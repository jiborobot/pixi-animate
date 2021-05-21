import { DrawCommands } from './Graphics';
import { TweenProps, KeyframeData, TweenData, TweenablePropNames } from './Tween';
import { MovieClip } from './MovieClip';
import { DisplayObject } from '@pixi/display';
import { Renderer } from '@pixi/core';
import { Prepare } from '@pixi/prepare';

// If the movieclip plugin is installed
let _prepare: Prepare = null;

/* eslint-disable @typescript-eslint/no-namespace, no-inner-declarations */
// awkwardly named instead of the final export of 'utils' to avoid problems in .d.ts build tools.
export namespace utils {

    /**
     * Convert the Hexidecimal string (e.g., "#fff") to uint
     */
    export function hexToUint(hex: string): number
    {
        // Remove the hash
        hex = hex.substr(1);

        // Convert shortcolors fc9 to ffcc99
        if (hex.length === 3)
        {
            hex = hex.replace(/([a-f0-9])/g, '$1$1');
        }

        return parseInt(hex, 16);
    }

    /**
     * Fill frames with booleans of true (showing) and false (hidden).
     * @param timeline
     * @param startFrame The start frame when the timeline shows up
     * @param duration The length of showing
     */
    export function fillFrames(timeline: boolean[], startFrame: number, duration: number): void
    {
        // ensure that the timeline is long enough
        const oldLength = timeline.length;

        if (oldLength < startFrame + duration)
        {
            timeline.length = startFrame + duration;
            // fill any gaps with false to denote that the child should be removed for a bit
            if (oldLength < startFrame)
            {
                // if the browser has implemented the ES6 fill() function, use that
                if (timeline.fill)
                {
                    timeline.fill(false, oldLength, startFrame);
                }
                else
                {
                    // if we can't use fill, then do a for loop to fill it
                    for (let i = oldLength; i < startFrame; ++i)
                    {
                        timeline[i] = false;
                    }
                }
            }
        }
        // if the browser has implemented the ES6 fill() function, use that
        if (timeline.fill)
        {
            timeline.fill(true, startFrame, startFrame + duration);
        }
        else
        {
            const length = timeline.length;
            // if we can't use fill, then do a for loop to fill it

            for (let i = startFrame; i < length; ++i)
            {
                timeline[i] = true;
            }
        }
    }

    const keysMap: {[s: string]: keyof TweenProps} = {
        X: 'x', // x position
        Y: 'y', // y position
        A: 'sx', // scale x
        B: 'sy', // scale y
        C: 'kx', // skew x
        D: 'ky', // skew y
        R: 'r', // rotation
        L: 'a', // alpha
        T: 't', // tint
        F: 'c', // colorTransform
        V: 'v', // visibility
    };

    /**
     * Parse the value of the compressed keyframe.
     * @param prop The property key
     * @param buffer The contents
     * @return The parsed value
     */
    function parseValue(prop: string, buffer: string): string|number|boolean|(string|number)[]
    {
        switch (prop)
        {
            // Color transforms are parsed as an array
            case 'c':
            {
                const buff: (string|number)[] = buffer.split(',');

                buff.forEach((val, i, buffer) =>
                {
                    buffer[i] = parseFloat(val as string);
                });

                return buff;
            }
            // Tint value should not be converted
            // can be color uint or string
            case 't':
            {
                return buffer;
            }
            // The visiblity parse as boolean
            case 'v':
            {
                return !!parseInt(buffer, 10);
            }
            // Everything else parse a floats
            default:
            {
                return parseFloat(buffer);
            }
        }
    }

    const tweenKeysMap: { [s: string]: keyof TweenData } = {
        D: 'd', // duration
        // E: 'e', // easing - disabled for manual handling
        P: 'p', // props
    };

    /**
     * Regex to test for a basic ease desccriptor
     */
    const basicEase = /(\-?\d*\.?\d*)([a-zA-Z]+)/;

    /**
     * Convert serialized tween from a serialized keyframe into TweenData
     * `"D20E25EaseIn;PX3Y5A1.2"` to: `{ d: 20, e: { s: 25, n: "EaseIn" }, p: { x:3, y: 5, sx: 1.2 } }`
     * @param tweenBuffer
     * @return Resulting TweenData
     */
    function parseTween(tweenBuffer: string): TweenData
    {
        const result: TweenData = { d: 0, p: {} };

        let i = 0;
        let buffer = '';
        let handlingProps = false;
        let prop: keyof TweenProps|keyof TweenData;

        // tween format:
        // D20E25EaseIn;PX3Y5A1.2

        while (i <= tweenBuffer.length)
        {
            const c = tweenBuffer[i];

            if (!handlingProps && (tweenKeysMap[prop] || tweenKeysMap[c]))
            {
                // handle potential active duration property, which is the only normal one
                if (prop === 'd')
                {
                    (result.d as any) = parseValue(prop, buffer);
                    prop = null;
                }

                // seeing the p property kicks us immediately into props mode
                if (c === 'P')
                {
                    handlingProps = true;
                    ++i;
                }
                else
                {
                    // only handles D, really
                    prop = tweenKeysMap[c];
                    ++i;
                }
                buffer = '';
            }
            // seeing easing means we need to read ahead to the end of the easing section
            else if (c === 'E')
            {
                // search for the next space or end of the string to see where the tween ends
                let index = tweenBuffer.indexOf(';', i);

                // should never end early, but just in case we are somehow tweening 0 properties
                if (index < 0)
                {
                    index = tweenBuffer.length;
                }
                const easeBuffer = tweenBuffer.substring(i + 1, index);

                if (basicEase.test(easeBuffer))
                {
                    const [, strength, name] = basicEase.exec(easeBuffer);

                    // if not yet handling props, apply ease to whole tween
                    if (!handlingProps)
                    {
                        result.e = {
                            s: parseFloat(strength),
                            n: name,
                        };
                    }
                    // apply ease to last property read
                    else if (prop)
                    {
                        (result.p[prop as TweenablePropNames] as any) = parseValue(prop, buffer);
                        if (!result.p.e)
                        {
                            result.p.e = {};
                        }
                        result.p.e[prop as TweenablePropNames] = {
                            s: parseFloat(strength),
                            n: name,
                        };
                        prop = null;
                        buffer = '';
                    }
                }
                else
                {
                    // TODO: encode some sort of function for a custom ease
                }

                i = index + 1;
            }
            // normal prop/buffer handling, like in the main deserializeKeyframes function
            else if (keysMap[c])
            {
                if (prop)
                {
                    (result.p[prop as keyof TweenProps] as any) = parseValue(prop, buffer);
                }
                prop = keysMap[c];
                buffer = '';
                i++;
            }
            else if (!c)
            {
                if (prop)
                {
                    (result.p[prop as keyof TweenProps] as any) = parseValue(prop, buffer);
                }
                buffer = '';
                prop = null;
                i++;
            }
            else
            {
                buffer += c;
                i++;
            }
        }

        return result;
    }

    /**
     * Convert serialized array into keyframes
     * `"0x100y100 1x150"` to: `{ "0": {"x":100, "y": 100}, "1": {"x": 150} }`
     * @param keyframes
     * @return Resulting keyframes
     */
    export function deserializeKeyframes(keyframes: string): {[s: number]: KeyframeData}
    {
        const result: {[s: number]: KeyframeData} = {};
        let i = 0;

        let buffer = '';
        let isFrameStarted = false;
        let prop: keyof TweenProps;
        let frame: KeyframeData = {};

        while (i <= keyframes.length)
        {
            const c = keyframes[i];

            // if we found the name of a property
            if (keysMap[c])
            {
                // start a new frame if we need to
                if (!isFrameStarted)
                {
                    isFrameStarted = true;
                    result[buffer as any] = frame;
                }
                // finish a previous prop if one is running
                if (prop)
                {
                    (frame[prop] as any) = parseValue(prop, buffer);
                }
                // save the new prop that we are now handling
                prop = keysMap[c];
                // reset buffer (because we did the previous prop if we had to)
                buffer = '';
                i++;
            }
            // contains a tween
            else if (c === 'W')
            {
                // start a new frame if we need to
                if (!isFrameStarted)
                {
                    isFrameStarted = true;
                    result[buffer as any] = frame;
                }
                // finish previous prop
                if (prop)
                {
                    (frame[prop] as any) = parseValue(prop, buffer);
                    buffer = '';
                    prop = null;
                }
                // search for the next space or end of the string to see where the tween ends
                let index = keyframes.indexOf(' ', i);

                if (index < 0)
                {
                    index = keyframes.length;
                }
                // parse the tween section
                frame.tw = parseTween(keyframes.substring(i + 1, index));
                // skip past the tween section
                i = index;
            }
            // finish existing prop & frame on end of string or space
            else if (!c || c === ' ')
            {
                i++;
                if (prop)
                {
                    (frame[prop] as any) = parseValue(prop, buffer);
                }
                buffer = '';
                prop = null;
                frame = {};
                isFrameStarted = false;
            }
            // add to the buffer for the next parse
            else
            {
                buffer += c;
                i++;
            }
        }

        return result;
    }

    /**
     * Convert serialized shapes into draw commands for PIXI.Graphics.
     * @param str
     * @param Resulting shapes map
     */
    export function deserializeShapes(str: string): DrawCommands[]
    {
        const result = [];
        // each shape is a new line
        const shapes = str.split('\n');
        const isCommand = /^[a-z]{1,2}$/;

        for (let i = 0; i < shapes.length; i++)
        {
            const shape: DrawCommands = shapes[i].split(' '); // arguments are space separated

            for (let j = 0; j < shape.length; j++)
            {
                // Convert all numbers to floats, ignore colors
                const arg = shape[j] as string;

                if (arg[0] !== '#' && !isCommand.test(arg))
                {
                    shape[j] = parseFloat(arg);
                }
            }
            result.push(shape);
        }

        return result;
    }

    /**
     * Add movie clips to the upload prepare.
     * @param {*} item To add to the queue
     */
    export function addMovieClips(item: any): boolean
    {
        if (item instanceof MovieClip)
        {
            item._timedChildTimelines.forEach((timeline) =>
            {
                const index = item.children.indexOf(timeline.target);

                if (index === -1)
                {
                    // eslint-disable-next-line no-unused-expressions
                    _prepare?.add(timeline.target);
                }
            });

            return true;
        }

        return false;
    }

    /**
     * Upload all the textures and graphics to the GPU.
     * @param renderer Render to upload to
     * @param clip MovieClip to upload
     * @param done When complete
     */
    export function upload(renderer: Renderer, displayObject: DisplayObject, done: () => void): void
    {
        if (!_prepare)
        {
            _prepare = renderer.plugins.prepare;
            _prepare.registerFindHook(addMovieClips);
        }
        // eslint-disable-next-line no-unused-expressions
        _prepare?.upload(displayObject, done);
    }
}

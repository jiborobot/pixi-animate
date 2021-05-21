import { AnimateDisplayObject } from './DisplayObject';
import { Graphics } from '@pixi/graphics';
import { Sprite } from '@pixi/sprite';

export type EaseMethod = (input: number) => number;

// NOTE ABOUT KEYS OF TweenProps: Use "(myProps[key] as any) = myVal;"
// Typescript is unhelpful in this case: https://github.com/microsoft/TypeScript/issues/31663
export interface TweenProps {
    x?: number;
    y?: number;
    sx?: number;
    sy?: number;
    kx?: number;
    ky?: number;
    r?: number;
    a?: number;
    t?: number;
    v?: boolean;
    c?: number[];
    m?: Graphics|Sprite;
    g?: any;
    /** Eases for any of the tweenable properties, if published as a per-property ease */
    e?: {[P in TweenablePropNames]?: EaseMethod|{n: string; s: number}};
}

export type TweenablePropNames = keyof Omit<TweenProps, 'm'|'g'|'e'|'v'>;

export interface TweenData
{
    d: number;
    p: TweenProps;
    e?: EaseMethod|{n: string; s: number};
}

export interface KeyframeData extends TweenProps
{
    /** Not tweenable, but information about a tween that starts on this frame */
    tw?: TweenData;
}

// standard tweening
function lerpValue(start: number, end: number, t: number): number
{
    return start + ((end - start) * t);
}

const PI = Math.PI;
const TWO_PI = PI * 2;

// handle 355 -> 5 degrees only going through a 10 degree change instead of
// the long way around
// Math from http://stackoverflow.com/a/2708740
function lerpRotation(start: number, end: number, t: number): number
{
    const difference = Math.abs(end - start);

    if (difference > PI)
    {
        // We need to add on to one of the values.
        if (end > start)
        {
            // We'll add it on to start...
            start += TWO_PI;
        }
        else
        {
            // Add it on to end.
            end += PI + TWO_PI;
        }
    }

    // Interpolate it.
    const value = (start + ((end - start) * t));

    // wrap to 0-2PI
    /* if (value >= 0 && value <= TWO_PI)
        return value;
    return value % TWO_PI;*/

    // just return, as it's faster
    return value;
}

// split r, g, b into separate values for tweening
function lerpTint(start: number, end: number, t: number): number
{
    // split start color into components
    const sR = (start >> 16) & 0xFF;
    const sG = (start >> 8) & 0xFF;
    const sB = start & 0xFF;
    // split end color into components
    const eR = (end >> 16) & 0xFF;
    const eG = (end >> 8) & 0xFF;
    const eB = end & 0xFF;
    // lerp red
    let r = sR + ((eR - sR) * t);

    // clamp red to valid values
    if (r < 0) r = 0;
    else if (r > 255) r = 255;
    // lerp green
    let g = sG + ((eG - sG) * t);

    // clamp green to valid values
    if (g < 0) g = 0;
    else if (g > 255) g = 255;
    // lerp blue
    let b = sB + ((eB - sB) * t);

    // clamp blue to valid values
    if (b < 0) b = 0;
    else if (b > 255) b = 255;

    const combined = (r << 16) | (g << 8) | b;

    return combined;
}

const COLOR_HELPER: number[] = [];

function lerpColor(start: number[], end: number[], t: number): number[]
{
    COLOR_HELPER[0] = start[0] + ((end[0] - start[0]) * t);
    COLOR_HELPER[1] = start[1] + ((end[1] - start[1]) * t);
    COLOR_HELPER[2] = start[2] + ((end[2] - start[2]) * t);
    COLOR_HELPER[3] = start[3] + ((end[3] - start[3]) * t);
    COLOR_HELPER[4] = start[4] + ((end[4] - start[4]) * t);
    COLOR_HELPER[5] = start[5] + ((end[5] - start[5]) * t);

    return COLOR_HELPER;
}

const PROP_LERPS: {[P in keyof TweenProps]: (start: number, end: number, t: number) => number} = {
    // position
    x: lerpValue,
    y: lerpValue,
    // scale
    sx: lerpValue,
    sy: lerpValue,
    // skew
    kx: lerpValue,
    ky: lerpValue,
    // rotation
    r: lerpRotation,
    // alpha
    a: lerpValue,
    // tinting
    t: lerpTint,
    // values to be set
    v: null, // visible
    c: lerpColor as any, // colorTransform
    m: null, // mask
    g: null, // not sure if we'll actually handle graphics this way?
};

function setPropFromShorthand(target: AnimateDisplayObject, prop: keyof TweenProps, value: any): void
{
    switch (prop)
    {
        case 'x':
            target.transform.position.x = value;
            break;
        case 'y':
            target.transform.position.y = value;
            break;
        case 'sx':
            target.transform.scale.x = value;
            break;
        case 'sy':
            target.transform.scale.y = value;
            break;
        case 'kx':
            target.transform.skew.x = value;
            break;
        case 'ky':
            target.transform.skew.y = value;
            break;
        case 'r':
            target.transform.rotation = value;
            break;
        case 'a':
            target.alpha = value;
            break;
        case 't':
            target.i(value); // i = setTint
            break;
        case 'c':
            target.setColorTransform(...value as [number, number, number, number, number, number]); // c = setColorTransform
            break;
        case 'v':
            target.visible = value;
            break;
        case 'm':
            target.ma(value); // ma = setMask
            break;
    }
}

// builds an ease in function for a specific exponential power, i.e. quadratic easing is power 2 and cubic is 3
function buildPowIn(power: number): EaseMethod
{
    return (t): number => Math.pow(t, power);
}

// builds an ease out function for a specific exponential power, i.e. quadratic easing is power 2 and cubic is 3
function buildPowOut(power: number): EaseMethod
{
    return (t): number => 1 - Math.pow(1 - t, power);
}

// builds an ease in & out function for a specific exponential power, i.e. quadratic easing is power 2 and cubic is 3
function buildPowInOut(power: number): EaseMethod
{
    return (t): number =>
    {
        if ((t *= 2) < 1) return 0.5 * Math.pow(t, power);

        return 1 - (0.5 * Math.abs(Math.pow(2 - t, power)));
    };
}
const ELASTIC_AMPLITUDE = 1;
const ELASTIC_PERIOD = 0.3;
const ELASTIC_INOUT_PERIOD = 0.3 * 1.5;

const EASE_DICT: { [name: string]: EaseMethod } = {
    quadIn: buildPowIn(2),
    quadOut: buildPowOut(2),
    quadInOut: buildPowInOut(2),
    cubicIn: buildPowIn(3),
    cubicOut: buildPowOut(3),
    cubicInOut: buildPowInOut(3),
    quartIn: buildPowIn(4),
    quartOut: buildPowOut(4),
    quartInOut: buildPowInOut(4),
    quintIn: buildPowIn(5),
    quintOut: buildPowOut(5),
    quintInOut: buildPowInOut(5),
    sineIn: (t) => 1 - Math.cos(t * PI / 2),
    sineOut: (t) => Math.sin(t * PI / 2),
    sineInOut: (t) => -0.5 * (Math.cos(PI * t) - 1),
    backIn: (t) => t * t * (((1.7 + 1) * t) - 1.7),
    backOut: (t) => (--t * t * (((1.7 + 1) * t) + 1.7)) + 1,
    backInOut: (t) =>
    {
        const constVal = 1.7 * 1.525;

        if ((t *= 2) < 1) return 0.5 * (t * t * (((constVal + 1) * t) - constVal));

        return 0.5 * (((t -= 2) * t * (((constVal + 1) * t) + constVal)) + 2);
    },
    circIn: (t) => -(Math.sqrt(1 - (t * t)) - 1),
    circOut: (t) => Math.sqrt(1 - ((--t) * t)),
    circInOut: (t) =>
    {
        if ((t *= 2) < 1) return -0.5 * (Math.sqrt(1 - (t * t)) - 1);

        return 0.5 * (Math.sqrt(1 - ((t -= 2) * t)) + 1);
    },
    bounceIn: (t) => 1 - EASE_DICT.bounceOut(1 - t),
    bounceOut: (t) =>
    {
        if (t < 1 / 2.75)
        {
            return 7.5625 * t * t;
        }
        else if (t < 2 / 2.75)
        {
            return (7.5625 * (t -= 1.5 / 2.75) * t) + 0.75;
        }
        else if (t < 2.5 / 2.75)
        {
            return (7.5625 * (t -= 2.25 / 2.75) * t) + 0.9375;
        }

        return (7.5625 * (t -= 2.625 / 2.75) * t) + 0.984375;
    },
    // eslint-disable-next-line no-confusing-arrow
    bounceInOut: (t) => t < 0.5 ? EASE_DICT.bounceIn(t * 2) * 0.5 : (EASE_DICT.bounceOut((t * 2) - 1) * 0.5) + 0.5,
    elasticIn: (t) =>
    {
        if (t === 0 || t === 1) return t;
        const s = ELASTIC_PERIOD / TWO_PI * Math.asin(1 / ELASTIC_AMPLITUDE);

        return -(ELASTIC_AMPLITUDE * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * TWO_PI / ELASTIC_PERIOD));
    },
    elasticOut: (t) =>
    {
        if (t === 0 || t === 1) return t;
        const s = ELASTIC_PERIOD / TWO_PI * Math.asin(1 / ELASTIC_AMPLITUDE);

        return (ELASTIC_AMPLITUDE * Math.pow(2, -10 * t) * Math.sin((t - s) * TWO_PI / ELASTIC_PERIOD)) + 1;
    },
    elasticInOut: (t) =>
    {
        const s = ELASTIC_INOUT_PERIOD / TWO_PI * Math.asin(1 / ELASTIC_AMPLITUDE);

        if ((t *= 2) < 1)
        {
            return -0.5 * (ELASTIC_AMPLITUDE * Math.pow(2, 10 * (t -= 1))
                * Math.sin((t - s) * TWO_PI / ELASTIC_INOUT_PERIOD));
        }

        return (ELASTIC_AMPLITUDE * Math.pow(2, -10 * (t -= 1))
            * Math.sin((t - s) * TWO_PI / ELASTIC_INOUT_PERIOD) * 0.5) + 1;
    },
};

export function getEaseFromConfig(config: EaseMethod | { n: string; s: number }): EaseMethod | null
{
    if (!config) return null;
    if (typeof config === 'function') return config;
    // TODO: use config (name, strength) to determine an ease method
    // In order to figure that out, we need to test out Animate's actual output values so we know what to use.

    if (config.n === 'classic')
    {
        const s = config.s / 100;

        // (s + 1)t + (-s)(t^2)
        return (t: number): number => ((s + 1) * t) + ((-s) * t * t);
    }

    return EASE_DICT[config.n];
}

/**
 * Provides timeline playback of movieclip
 */
export class Tween
{
    /**
     * Target display object.
     */
    public target: AnimateDisplayObject;
    /**
     * Properties at the start of the tween
     */
    public startProps: TweenProps;
    /**
     * Properties at the end of the tween, as well as any properties that are set
     * instead of tweened
     */
    public endProps: TweenProps;
    /**
     * duration of tween in frames. For a keyframe with no tweening, the duration will be 0.
     */
    public duration: number;
    /**
     * The frame that the tween starts on
     */
    public startFrame: number;
    /**
     * the frame that the tween ends on
     */
    public endFrame: number;
    /**
     * easing function to use, if any
     */
    public ease: {[P in TweenablePropNames]?: EaseMethod};
    /**
     * If we don't tween.
     */
    public isTweenlessFrame: boolean;

    /**
     * @param target The target to play
     * @param startProps The starting properties
     * @param endProps The ending properties
     * @param startFrame frame number on which to begin tweening
     * @param duration Number of frames to tween
     * @param ease Ease function to use
     */
    constructor(target: AnimateDisplayObject,
        startProps: TweenProps,
        endProps: TweenProps|null,
        startFrame: number,
        duration: number,
        ease?: EaseMethod)
    {
        this.target = target;
        this.startProps = startProps;
        this.endProps = {};
        this.duration = duration;
        this.startFrame = startFrame;
        this.endFrame = startFrame + duration;
        this.ease = {};
        this.isTweenlessFrame = !endProps;

        if (endProps)
        {
            // make a copy to safely include any unchanged values from the start of the tween
            for (const prop in endProps)
            {
                if (prop === 'e') continue;
                // read the end value
                (this.endProps[prop as TweenablePropNames] as any) = endProps[prop as TweenablePropNames];
                // if there is an ease for that property, use that
                if (endProps.e?.[prop as TweenablePropNames])
                {
                    this.ease[prop as TweenablePropNames] = getEaseFromConfig(endProps.e[prop as TweenablePropNames]);
                }
                // otherwise use the global ease for this tween (if any)
                else
                {
                    this.ease[prop as TweenablePropNames] = ease;
                }
            }
        }

        // copy in any starting properties don't change
        for (const prop in startProps)
        {
            // eslint-disable-next-line no-prototype-builtins
            if (!this.endProps.hasOwnProperty(prop))
            {
                (this.endProps[prop as keyof TweenProps] as any) = startProps[prop as keyof TweenProps];
            }
        }
    }

    /**
     * Set the current frame.
     */
    public setPosition(currentFrame: number): void
    {
        // if this is a single frame with no tweening, or at the end of the tween, then
        // just speed up the process by setting values
        if (currentFrame >= this.endFrame)
        {
            this.setToEnd();

            return;
        }

        if (this.isTweenlessFrame)
        {
            this.setToEnd();

            return;
        }

        const time = (currentFrame - this.startFrame) / this.duration;

        const target = this.target;
        const startProps = this.startProps;
        const endProps = this.endProps;

        for (const prop in endProps)
        {
            const p = prop as keyof TweenProps;
            const lerp = PROP_LERPS[p];
            let lerpedTime = time;

            if (this.ease[prop as TweenablePropNames])
            {
                lerpedTime = this.ease[prop as TweenablePropNames](time);
            }

            if (lerp)
            {
                setPropFromShorthand(target, p, lerp(startProps[p], endProps[p], lerpedTime));
            }
            else
            {
                setPropFromShorthand(target, p, startProps[p]);
            }
        }
    }

    /**
     * Set to the end position
     */
    setToEnd(): void
    {
        const endProps = this.endProps;
        const target = this.target;

        for (const prop in endProps)
        {
            setPropFromShorthand(target, prop as keyof TweenProps, endProps[prop as keyof TweenProps]);
        }
    }
}

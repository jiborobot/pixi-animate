import { Timeline } from './Timeline';
import { TweenProps, EaseMethod, getEaseFromConfig, KeyframeData } from './Tween';
import { utils } from './utils';
import { sound } from './sound';
import { AnimateContainer } from './Container';
import { AnimateDisplayObject } from './DisplayObject';
import { Ticker } from '@pixi/ticker';
import { settings } from '@pixi/settings';
import { Graphics } from '@pixi/graphics';
import { Sprite } from '@pixi/sprite';
import { IDestroyOptions } from '@pixi/display';
const SharedTicker = Ticker.shared;

export interface MovieClipOptions
{
    /**
     * The default playback mode is independent (0). Child movieclips are given a different value as subordinate objects.
     */
    mode?: number;
    /**
     * The starting frame. Default is 0.
     */
    startPosition?: number;
    /**
     * If playback is looped. Default is true.
     */
    loop?: boolean;
    /**
     * The frame labels map - label to frames
     */
    labels?: LabelMap;
    /**
     * The duration of the clip. If no duration is provided, length is automatically determined.
     */
    duration?: number;
    /**
     * The framerate to use for an independent mode MovieClip. Default is 24.
     */
    framerate?: number;
}

export interface FrameLabel
{
    label: string;
    position: number;
}

export interface LabelMap
{
    [label: string]: number;
}

export type FrameAction = (this: MovieClip) => void;

type TimedChildTimeline = boolean[] & {target?: AnimateDisplayObject};

/**
 * Provide timeline playback of movieclip
 */
export class MovieClip extends AnimateContainer
{
    /**
     * The MovieClip will advance independently of its parent, even if its parent is paused.
     * This is the default mode.
     */
    public static readonly INDEPENDENT = 0;

    /**
     * The MovieClip will only display a single frame (as determined by the startPosition property).
     */
    public static readonly SINGLE_FRAME = 1;

    /**
     * The MovieClip will be advanced only when its parent advances and will be synched to the position of
     * the parent MovieClip.
     */
    public static readonly SYNCHED = 2;

    /**
     * The default framerate if none is specified or there's not parent clip with a framerate.
     */
    public static readonly DEFAULT_FRAMERATE = 24;

    /**
     * Controls how this MovieClip advances its time. Must be one of 0 (INDEPENDENT), 1 (SINGLE_FRAME), or 2 (SYNCHED).
     * See each constant for a description of the behaviour.
     */
    public mode: number;

    /**
     * Specifies what the first frame to play in this movieclip, or the only frame to display if mode is SINGLE_FRAME.
     */
    public startPosition: number;

    /**
     * Indicates whether this MovieClip should loop when it reaches the end of its timeline.
     */
    public loop: boolean;

    /**
     * The current frame of the movieclip.
     * @readOnly
     */
    public currentFrame: number;

    /**
     * The collection of private labels
     */
    private _labels: FrameLabel[];

    /**
     * The collection of private labels
     */
    private _labelDict: LabelMap;

    /**
     * If true, this movieclip will animate automatically whenever it is on the stage.
     */
    public selfAdvance: boolean;

    /**
     * If true, the MovieClip's position will not advance when ticked.
     */
    public paused: boolean;

    /**
     * If true, actions in this MovieClip's tweens will be run when the playhead advances.
     */
    public actionsEnabled: boolean;

    /**
     * If true, the MovieClip will automatically be reset to its first frame whenever the timeline adds
     * it back onto the display list. This only applies to MovieClip instances with mode=INDEPENDENT.
     * <br><br>
     * For example, if you had a character animation with a 'body' child MovieClip instance
     * with different costumes on each frame, you could set body.autoReset = false, so that
     * you can manually change the frame it is on, without worrying that it will be reset
     * automatically.
     */
    public autoReset: boolean;

    /**
     * Offset from parent frame for a synched movieclip.
     */
    private _synchOffset: number;

    /**
     * Previous position that this movieclip was stopped on.
     */
    private _prevPos: number;

    /**
     * Note - changed from default: When the MovieClip is framerate independent, this is the time
     * elapsed from frame 0 in seconds.
     */
    private _t: number;

    /**
     * By default MovieClip instances advance one frame per tick. Specifying a framerate for the MovieClip
     * will cause it to advance based on elapsed time between ticks as appropriate to maintain the target
     * framerate.
     */
    protected _framerate: number;

    /**
     * The total time in seconds for the animation. This is changed when setting the framerate.
     */
    private _duration: number;

    /**
     * The total duration in frames for the animation.
     */
    private _totalFrames: number;

    /**
     * Standard tween timelines for all objects. Each element in the _timelines array
     * is a Timeline object - an array of tweens for one target, in order of occurrence.
     */
    protected _timelines: Timeline[];

    /**
     * Array of child timelines denoting if a child is actively a child of this movieclip
     * on any given frame. Each element in the _timedChildTimelines is an array with a 'target'
     * property, and is an array of boolean values indexed by frame.
     * @private
     */
    public _timedChildTimelines: TimedChildTimeline[];

    /**
     * Array to depth sort timed children
     */
    protected _depthSorted: AnimateDisplayObject[];

    /**
     * Array of frame scripts, indexed by frame.
     */
    protected _actions: FrameAction[][];

    /**
     * Optional callback fired before timeline is updated.
     * Can be used to clamp or update the currentFrame.
     * @private
     */
    public _beforeUpdate: (target: MovieClip) => (() => void|null);

    /**
     * Internal property used to control child MovieClips relative to parents.
     */
    private parentStartPosition: number;

    /**
     * @param options The options object
     */
    constructor(options?: MovieClipOptions);
    /**
     * @param mode The playback mode default is independent (0),
     * @param startPosition The starting frame
     * @param loop If playback is looped
     * @param labels The frame labels map of label to frames
     * @param duration The duration, if no duration is provided, auto determines length
     * @param framerate The framerate to use for independent mode
     */
    constructor(mode?: number, duration?: number, loop?: boolean, framerate?: number, labels?: LabelMap);
    constructor(options?: MovieClipOptions|number, duration?: number, loop?: boolean, framerate?: number, labels?: LabelMap)
    {
        super();

        // Default options
        options = options === undefined ? {} : options;

        // Options can also be the mode
        if (typeof options === 'number')
        {
            options = {
                mode: options || MovieClip.INDEPENDENT,
                duration: duration || 0,
                loop: loop === undefined ? true : loop,
                labels: labels || {},
                framerate: framerate || 0,
                startPosition: 0,
            };
        }
        else
        {
            // Apply defaults to options
            options = Object.assign({
                mode: MovieClip.INDEPENDENT,
                startPosition: 0,
                loop: true,
                labels: {},
                duration: 0,
                framerate: 0,
            }, options);
        }

        this.mode = options.mode;
        this.startPosition = options.startPosition;
        this.loop = !!options.loop;
        this.currentFrame = 0;
        this._labels = [];
        this._labelDict = options.labels;

        if (options.labels)
        {
            for (const name in options.labels)
            {
                const label = {
                    label: name,
                    position: options.labels[name],
                };

                this._labels.push(label);
            }
            this._labels.sort((a, b) => a.position - b.position);
        }

        this.selfAdvance = true;
        this.paused = false;
        this.actionsEnabled = true;
        this.autoReset = true;
        this._synchOffset = 0;
        this._prevPos = -1; // TODO: evaluate using a ._reset Boolean prop instead of -1.
        this._t = 0;
        this._framerate = options.framerate;
        this._duration = 0;
        this._totalFrames = options.duration;
        this._timelines = [];
        this._timedChildTimelines = [];
        this._depthSorted = [];
        this._actions = [];
        this._beforeUpdate = null;
        this.parentStartPosition = 0;

        if (this.mode === MovieClip.INDEPENDENT)
        {
            this._tickListener = this._tickListener.bind(this);
            this._onAdded = this._onAdded.bind(this);
            this._onRemoved = this._onRemoved.bind(this);
            this.on('added', this._onAdded);
            this.on('removed', this._onRemoved);
        }

        if (options.framerate)
        {
            this.framerate = options.framerate;
        }

        // save often used methods on the instance so that they can be fetched slightly faster
        // than if they had to be fetched from the prototype
        /* eslint-disable no-self-assign */
        this.advance = this.advance;
        this._updateTimeline = this._updateTimeline;
        this._setTimelinePosition = this._setTimelinePosition;
        this._goto = this._goto;
        /* eslint-enable no-self-assign */
    }

    private _onAdded(): void
    {
        if (!this._framerate)
        {
            this.framerate = this.parentFramerate;
        }
        SharedTicker.add(this._tickListener, null);
    }

    private _tickListener(tickerDeltaTime: number): void
    {
        if (this.paused || !this.selfAdvance)
        {
            // see if the movieclip needs to be updated even though it isn't animating
            if (this._prevPos < 0)
            {
                this._goto(this.currentFrame);
            }

            return;
        }
        const seconds = tickerDeltaTime / settings.TARGET_FPMS / 1000;

        this.advance(seconds);
    }

    private _onRemoved(): void
    {
        SharedTicker.remove(this._tickListener, null);
    }

    /**
     * Returns an array of objects with label and position (aka frame) properties, sorted by position.
     */
    public get labels(): FrameLabel[]
    {
        return this._labels;
    }

    /**
     * Returns a dictionary of labels where key is the label and value is the frame.
     */
    public get labelsMap(): LabelMap
    {
        return this._labelDict;
    }

    /**
     * Returns the name of the label on or immediately before the current frame.
     */
    public get currentLabel(): string|null
    {
        const labels = this._labels;
        let current: string = null;

        for (let i = 0, len = labels.length; i < len; ++i)
        {
            if (labels[i].position <= this.currentFrame)
            {
                current = labels[i].label;
            }
            else
            {
                break;
            }
        }

        return current;
    }

    /**
     * When the MovieClip is framerate independent, this is the time elapsed from frame 0 in seconds.
     */
    public get elapsedTime(): number
    {
        return this._t;
    }

    public set elapsedTime(value)
    {
        this._t = value;
    }

    /**
     * By default MovieClip instances advance one frame per tick. Specifying a framerate for the
     * MovieClip will cause it to advance based on elapsed time between ticks as appropriate to
     * maintain the target framerate.
     *
     * For example, if a MovieClip with a framerate of 10 is placed on a Stage being updated at
     * 40fps, then the MovieClip advance roughly one frame every 4 ticks. This will not be exact,
     * because the time between each tick vary slightly between frames.
     *
     * This feature is dependent on the tick event object (or an object with an appropriate 'delta' property) being
     * passed into {{#crossLink 'Stage/update'}}{{/crossLink}}.
     */
    public get framerate(): number
    {
        return this._framerate;
    }
    public set framerate(value)
    {
        if (value > 0)
        {
            if (this._framerate)
            {
                // recalculate time based on difference between new and old framerate:
                this._t *= this._framerate / value;
            }
            else
            {
                this._t = this.currentFrame / value;
            }
            this._framerate = value;
            this._duration = value ? this._totalFrames / value : 0;
        }
        else
        {
            this._t = this._framerate = this._duration = 0;
        }
    }

    /**
     * Get the total number of frames (duration) of this MovieClip
     */
    public get totalFrames(): number
    {
        return this._totalFrames;
    }

    /**
     * Extend the timeline to the last frame.
     */
    private _autoExtend(endFrame: number): void
    {
        if (this._totalFrames < endFrame)
        {
            this._totalFrames = endFrame;
        }
    }

    /**
     * Convert values of properties
     */
    private _parseProperties(properties: TweenProps & {t?: string|number; v?: number|boolean}): void
    {
        // Convert any string colors to uints
        if (typeof properties.t === 'string')
        {
            properties.t = utils.hexToUint(properties.t);
        }
        else if (typeof properties.v === 'number')
        {
            properties.v = !!properties.v;
        }
    }

    /**
     * Get a timeline for a child, synced timeline.
     */
    private _getChildTimeline(instance: AnimateDisplayObject): Timeline
    {
        for (let i = this._timelines.length - 1; i >= 0; --i)
        {
            if (this._timelines[i].target === instance)
            {
                return this._timelines[i];
            }
        }
        const timeline = Timeline.create(instance);

        this._timelines.push(timeline);

        return timeline;
    }

    /**
     * Add mask or masks
     */
    public addTimedMask(instance: AnimateDisplayObject, keyframes: {[frame: number]: Graphics|Sprite}): this
    {
        for (const i in keyframes)
        {
            this.addKeyframe(instance, {
                m: keyframes[i],
            }, parseInt(i, 10));
        }

        // Set the initial position/add
        this._setTimelinePosition(this.currentFrame, this.currentFrame, true);

        return this;
    }

    /**
     * Shortcut alias for `addTimedMask`
     */
    public am = this.addTimedMask;

    /**
     * Shortcut alias for `addTween`
     */
    public tw = this.addTween;

    /**
     * Add a tween to the clip
     * @param instance The clip to tween
     * @param properties The property or property to tween
     * @param startFrame The frame to start tweening
     * @param duration Number of frames to tween. If 0, then the properties are set with no tweening.
     * @param ease An optional easing function that takes the tween time from 0-1.
     */
    public addTween(instance: AnimateDisplayObject,
        properties: TweenProps,
        startFrame: number,
        duration?: number,
        ease?: EaseMethod): this
    {
        const timeline = this._getChildTimeline(instance);

        this._parseProperties(properties);
        timeline.addTween(properties, startFrame, duration, ease);
        this._autoExtend(startFrame + duration);

        return this;
    }

    /**
     * Add a tween to the clip
     * @param instance The clip to tween
     * @param properties The property or property to tween
     * @param startFrame The frame to start tweening
     */
    public addKeyframe(instance: AnimateDisplayObject, properties: KeyframeData, startFrame: number): this
    {
        const timeline = this._getChildTimeline(instance);
        const { tw } = properties;

        // remove tw property just so that it doesn't mess anything up or confuse anyone doing debugging
        delete properties.tw;
        this._parseProperties(properties);
        // add keyframe - note that even if we add a tween immediately afterwards, we want to
        // add this keyframe in order to make sure the starting properties are set
        timeline.addKeyframe(properties, startFrame);
        this._autoExtend(startFrame);
        // Add a tween if present in the keyframe data
        if (tw)
        {
            this.addTween(instance, tw.p, startFrame, tw.d, getEaseFromConfig(tw.e));
        }

        return this;
    }

    /**
     * Alias for method `addTimedChild`
     */
    public at = this.addTimedChild;

    /**
     * Add a child to show for a certain number of frames before automatic removal.
     * @param instance The clip to show
     * @param startFrame The starting frame
     * @param duration The number of frames to display the child before removing it.
     * @param keyframes The collection of static keyframes to add
     */
    public addTimedChild(instance: AnimateDisplayObject,
        startFrame: number,
        duration?: number,
        keyframes?: string|{[frame: number]: TweenProps}): this
    {
        if (startFrame === undefined) // jshint ignore:line
        {
            startFrame = 0;
        }
        if (duration === undefined || duration < 1) // jshint ignore:line
        {
            duration = this._totalFrames || 1;
        }

        // Add the starting offset for synced movie clips
        if (instance instanceof MovieClip && instance.mode === MovieClip.SYNCHED)
        {
            (instance as MovieClip).parentStartPosition = startFrame;
        }

        // add tweening info about this child's presence on stage
        // when the child is (re)added, if it has 'autoReset' set to true, then it
        // should be set back to frame 0
        let timeline: TimedChildTimeline;

        // get existing timeline
        for (let i = this._timedChildTimelines.length - 1; i >= 0; --i)
        {
            if (this._timedChildTimelines[i].target === instance)
            {
                timeline = this._timedChildTimelines[i];
                break;
            }
        }
        // if there wasn't one, make a new one
        if (!timeline)
        {
            timeline = [];
            timeline.target = instance;
            this._timedChildTimelines.push(timeline);
        }

        // Fill the timeline with keyframe booleans
        utils.fillFrames(timeline, startFrame, duration);

        // Update the total frames if the instance extends our current
        // total frames for this movieclip
        if (this._totalFrames < startFrame + duration)
        {
            this._totalFrames = startFrame + duration;
        }

        // Add the collection of keyframes
        if (keyframes)
        {
            if (typeof keyframes === 'string')
            {
                keyframes = utils.deserializeKeyframes(keyframes);
            }
            for (const i in keyframes)
            {
                this.addKeyframe(instance, keyframes[i], parseInt(i, 10));
            }
            this._getChildTimeline(instance)
                // subtract 1 from duration because we are using 0 based frame indices
                // and duration is calculated as total frames
                .extendLastFrame(startFrame + duration - 1);
        }

        // Set the initial position/add
        this._setTimelinePosition(startFrame, this.currentFrame, true);

        return this;
    }

    /**
     * Short cut for `addAction`
     */
    public aa = this.addAction;

    /**
     * Handle frame actions, callback is bound to the instance of the MovieClip.
     * @param callback The clip call on a certain frame
     * @param startFrame The starting frame index or label
     */
    public addAction(callback: FrameAction, startFrame: number|string): this
    {
        if (typeof startFrame === 'string')
        {
            const index = this._labelDict[startFrame];

            if (index === undefined)
            {
                throw new Error(`The label '${startFrame}' does not exist on this timeline`);
            }
            startFrame = index;
        }

        const actions = this._actions;

        // ensure that the movieclip timeline is long enough to support the target frame
        if (actions.length <= startFrame)
        {
            actions.length = startFrame + 1;
        }
        if (this._totalFrames < startFrame)
        {
            this._totalFrames = startFrame;
        }
        // add the action
        if (actions[startFrame])
        {
            actions[startFrame].push(callback);
        }
        else
        {
            actions[startFrame] = [callback];
        }

        return this;
    }

    /**
     * Short cut for `playSound`
     */
    public ps = this.playSound;

    /**
     * Handle sounds.
     * @method PIXI.animate.MovieClip#playSound
     * @param {String} alias The name of the Sound
     * @param {Boolean} [loop=false] The loop property of the sound
     */
    public playSound(alias: string, loop?: boolean): this
    {
        sound.emit('play', alias, !!loop, this);

        return this;
    }

    /**
     * Sets paused to false.
     */
    play(): void
    {
        this.paused = false;
    }

    /**
     * Sets paused to true.
     */
    stop(): void
    {
        this.paused = true;
    }

    /**
     * Advances this movie clip to the specified position or label and sets paused to false.
     * @param positionOrLabel The animation name or frame number to go to.
     */
    public gotoAndPlay(positionOrLabel: string|number): void
    {
        this.paused = false;
        this._goto(positionOrLabel);
    }

    /**
     * Advances this movie clip to the specified position or label and sets paused to true.
     * @param positionOrLabel The animation or frame name to go to.
     */
    public gotoAndStop(positionOrLabel: string|number): void
    {
        this.paused = true;
        this._goto(positionOrLabel);
    }

    /**
     * Get the close parent with a valid framerate. If no parent, returns the default framerate.
     */
    public get parentFramerate(): number
    {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let o: MovieClip = this;
        let fps = o._framerate;

        while ((o = o.parent as MovieClip) && !fps)
        {
            if (o.mode === MovieClip.INDEPENDENT)
            {
                fps = o._framerate;
            }
        }

        return fps || MovieClip.DEFAULT_FRAMERATE;
    }

    /**
     * Advances the playhead. This occurs automatically each tick by default.
     * @param time The amount of time in seconds to advance by. Only applicable if framerate is set.
     */
    public advance(time?: number): void
    {
        // Handle any other cases where starting to play
        // and no framerate has been set yet
        if (!this._framerate)
        {
            this.framerate = this.parentFramerate;
        }

        if (time)
        {
            this._t += time;
        }
        if (this._t > this._duration)
        {
            this._t = this.loop ? this._t % this._duration : this._duration;
        }
        // add a tiny amount to account for potential floating point errors
        this.currentFrame = Math.floor((this._t * this._framerate) + 0.00000001);
        // final error checking
        if (this.currentFrame >= this._totalFrames)
        {
            this.currentFrame = this._totalFrames - 1;
        }
        let afterUpdateOnce;

        if (this._beforeUpdate)
        {
            afterUpdateOnce = this._beforeUpdate(this);
        }
        // update all tweens & actions in the timeline
        this._updateTimeline();

        // Do the animator callback here
        if (afterUpdateOnce)
        {
            afterUpdateOnce();
        }
    }

    /**
     * @param positionOrLabel The animation name or frame number to go to.
     */
    protected _goto(positionOrLabel: string|number): void
    {
        const pos = typeof positionOrLabel === 'string' ? this._labelDict[positionOrLabel] : positionOrLabel;

        if (pos === undefined) // jshint ignore:line
        {
            return;
        }
        // prevent _updateTimeline from overwriting the new position because of a reset:
        this._prevPos = NaN;
        this.currentFrame = pos;

        // Handle the case where trying to play but haven't
        // added to the stage yet
        if (!this._framerate)
        {
            this.framerate = this.parentFramerate;
        }

        // update the elapsed time if a time based movieclip
        if (this._framerate > 0)
        {
            this._t = pos / this._framerate;
        }
        else
        {
            this._t = 0;
        }
        this._updateTimeline();
    }

    /**
     * Reset the movieclip to the first frame (without advancing the timeline).
     */
    private _reset(): void
    {
        this._prevPos = -1;
        this._t = 0;
        this.currentFrame = 0;
    }

    /**
     * Update timeline position according to playback, performing actions and updating children.
     * @private
     */
    public _updateTimeline(): void
    {
        const synched = this.mode !== MovieClip.INDEPENDENT;

        if (synched)
        {
            this.currentFrame = this.startPosition + (this.mode === MovieClip.SINGLE_FRAME ? 0 : this._synchOffset);
            if (this.currentFrame >= this._totalFrames)
            {
                this.currentFrame %= this._totalFrames;
            }
        }

        if (this._prevPos === this.currentFrame)
        {
            return;
        }

        // update timeline position, ignoring actions if this is a graphic.
        this._setTimelinePosition(this._prevPos, this.currentFrame, synched ? false : this.actionsEnabled);

        this._prevPos = this.currentFrame;
    }

    /**
     * Set the timeline position
     */
    protected _setTimelinePosition(startFrame: number, currentFrame: number, doActions: boolean): void
    {
        if (startFrame !== currentFrame && doActions)
        {
            let startPos: number;

            if (isNaN(startFrame))
            {
                startPos = currentFrame;
            }
            else
            {
                startPos = (startFrame >= this._totalFrames - 1 ? 0 : startFrame + 1);
            }
            // generate actionFrames on the way
            const actionFrames: number[] = [];

            // loop
            if (currentFrame < startPos)
            {
                for (let i = startPos; i < this._actions.length; ++i)
                {
                    if (this._actions[i])
                    {
                        actionFrames.push(i);
                    }
                }
                for (let i = 0; i <= currentFrame; ++i)
                {
                    if (this._actions[i])
                    {
                        actionFrames.push(i);
                    }
                }
            }
            // no loop
            else
            {
                for (let i = startPos; i <= currentFrame; ++i)
                {
                    if (this._actions[i])
                    {
                        actionFrames.push(i);
                    }
                }
            }

            if (actionFrames.length)
            {
                const oldCurrentFrame = this.currentFrame;

                for (let i = 0; i < actionFrames.length; ++i)
                {
                    const frame = actionFrames[i];

                    this._setTimelinePosition(frame, frame, true);
                    // _goto is called OR last frame reached
                    if (this.currentFrame !== oldCurrentFrame || frame === currentFrame)
                    {
                        return;
                    }
                    // stop is called
                    else if (this.paused)
                    {
                        this.currentFrame = frame;

                        return;
                    }
                }
            }
        }

        // handle all tweens
        const _timelines = this._timelines;

        for (let i = _timelines.length - 1; i >= 0; --i)
        {
            const timeline = _timelines[i];

            for (let j = 0, length = timeline.length; j < length; ++j)
            {
                const tween = timeline[j];

                // if the tween contains part of the timeline that we are travelling through
                if (currentFrame >= tween.startFrame && currentFrame <= tween.endFrame)
                {
                    // set the position within that tween
                    // and break the loop to move onto the next timeline
                    tween.setPosition(currentFrame);
                    break;
                }
            }
        }

        const timedChildTimelines = this._timedChildTimelines;
        const depthSorted = this._depthSorted;

        for (let i = 0, length = timedChildTimelines.length; i < length; ++i)
        {
            const target = timedChildTimelines[i].target;
            const shouldBeChild = timedChildTimelines[i][currentFrame];

            // if child should be on stage and is not:
            if (shouldBeChild)
            {
                // Add to the depthSorted object so we can
                // check that items are property drawn later
                depthSorted.push(target);
                if (target.parent !== this)
                {
                    // add the target if it's not there already
                    this.addChild(target);
                    if (target instanceof MovieClip && target.mode === MovieClip.INDEPENDENT && target.autoReset)
                    {
                        target._reset();
                    }
                }
            }
            else if (!shouldBeChild && target.parent === this)
            {
                this.removeChild(target);
            }
        }

        // Properly depth sort the children
        for (let i = 0, length = depthSorted.length; i < length; i++)
        {
            const target = depthSorted[i];
            const currentIndex = this.children.indexOf(target);

            if (currentIndex !== i)
            {
                this.addChildAt(target, i);
            }
        }

        // Clear the temporary depth sorting array
        depthSorted.length = 0;

        // go through all children and update synched movieclips that are not single frames
        const children = this.children;

        for (let i = 0, length = children.length; i < length; ++i)
        {
            const child = children[i];

            if (child instanceof MovieClip && child.mode === MovieClip.SYNCHED)
            {
                child._synchOffset = currentFrame - child.parentStartPosition;
                child._updateTimeline();
            }
        }

        // handle actions
        if (doActions && this._actions && this._actions[currentFrame])
        {
            const frameActions = this._actions[currentFrame];

            for (let j = 0; j < frameActions.length; ++j)
            {
                frameActions[j].call(this);
            }
        }
    }

    destroy(options?: IDestroyOptions|boolean): void
    {
        if (this._tickListener)
        {
            SharedTicker.remove(this._tickListener, null);
            this._tickListener = null;
        }
        const hiddenChildren = [];
        const timelines = this._timelines;

        if (timelines)
        {
            for (let i = 0; i < timelines.length; i++)
            {
                const timeline = timelines[i];

                hiddenChildren.push(timeline.target);
                timeline.destroy();
            }
        }
        const childTimelines = this._timedChildTimelines;

        if (childTimelines)
        {
            for (let i = 0; i < childTimelines.length; i++)
            {
                const timeline = childTimelines[i];

                if (hiddenChildren.indexOf(timeline.target) < 0)
                {
                    hiddenChildren.push(timeline.target);
                }
                timeline.length = 0;
            }
        }
        // Destroy all the children
        for (let i = 0; i < hiddenChildren.length; i++)
        {
            // Don't destroy children in the display list
            if (this.children.indexOf(hiddenChildren[i]) < 0)
            {
                hiddenChildren[i].destroy(options as IDestroyOptions);
            }
        }
        hiddenChildren.length = 0;
        this._actions = null;
        this._timelines = null;
        this._depthSorted = null;
        this._timedChildTimelines = null;
        this._beforeUpdate = null;
        this._labels = null;
        this._labelDict = null;
        super.destroy(options as IDestroyOptions);
    }
}

import { AnimatorTimeline } from './AnimatorTimeline';
import { MovieClip } from './MovieClip';

// Static collection of timelines
const timelines: AnimatorTimeline[] = [];

/**
 * Play animation via start/stop frame labels
 * @class Animator
 */
export class Animator
{
    /**
     * The collection of timelines
     */
    private static get _timelines(): AnimatorTimeline[]
    {
        return timelines;
    }

    /**
     * Suffix added to label for a stop.
     */
    static get STOP_LABEL(): string
    {
        return '_stop';
    }

    /**
     * Suffix added to label for a loop.
     */
    static get LOOP_LABEL(): string
    {
        return '_loop';
    }

    /**
     * Play the entire duration of the MovieClip.
     * @param instance Movie clip to play.
     * @param callback Optional callback when complete
     * @return Timeline object for stopping or getting progress.
     */
    static play(instance: MovieClip, callback?: () => void): AnimatorTimeline;
    /**
     * Play an animation by frame labels. For instance, play animation sequence from
     * 'idle' to 'idle_stop' or 'idle_loop'. If no event label is provided, will
     * play the entire duration of the MovieClip.
     * @param instance Movie clip to play.
     * @param label The frame label event to call, if no event is provided
     *        will use the entire length of the MovieClip.
     * @param callback Optional callback when complete
     * @return Timeline object for stopping or getting progress.
     */
    static play(instance: MovieClip, label: string, callback?: () => void): AnimatorTimeline;
    static play(instance: MovieClip, label?: string|(() => void), callback?: () => void): AnimatorTimeline
    {
        let loop = false;
        let start;
        let end;

        if (!label || typeof label === 'function')
        {
            start = 0;
            end = instance.totalFrames - 1;
            if (label && typeof label === 'function')
            {
                callback = label;
                label = null;
            }
        }
        else
        {
            start = instance.labelsMap[label];
            end = instance.labelsMap[label + this.STOP_LABEL];
            if (end === undefined)
            {
                end = instance.labelsMap[label + this.LOOP_LABEL];
                loop = true;
            }
            if (start === undefined)
            {
                throw new Error(`No start label matching "${label}"`);
            }
            else if (end === undefined)
            {
                throw new Error(`No end label matching "${label}"`);
            }
        }

        return this.fromTo(
            instance,
            start,
            end,
            loop,
            callback,
        );
    }

    /**
     * Play an animation from the current frame to an end frame or label.
     * @param instance Movie clip to play.
     * @param end The end frame or label.
     * @param callback Optional callback when complete
     * @return Timeline object for stopping or getting progress.
     */
    static to(instance: MovieClip, end: string|number, callback?: () => void): AnimatorTimeline
    {
        return this.fromTo(
            instance,
            instance.currentFrame,
            end,
            false,
            callback,
        );
    }

    /**
     * Play a MovieClip from a start to end frame.
     * @param instance Movie clip to play.
     * @param start The starting frame index or label.
     * @param end The ending frame index or label.
     * @param loop If the animation should loop.
     * @param callback Optional callback when complete
     * @return Timeline object for stopping or getting progress.
     */
    static fromTo(instance: MovieClip,
        start: number|string,
        end: number|string,
        loop?: boolean,
        callback?: () => void): AnimatorTimeline
    {
        if (typeof start === 'string')
        {
            const startLabel = start;

            start = instance.labelsMap[startLabel];
            if (start === undefined)
            {
                throw new Error(`No start label matching "${startLabel}"`);
            }
        }
        if (typeof end === 'string')
        {
            const endLabel = end;

            end = instance.labelsMap[endLabel];
            if (end === undefined)
            {
                throw new Error(`No end label matching "${endLabel}"`);
            }
        }
        if (start < 0)
        {
            throw new Error('Start frame is out of bounds');
        }
        if (end >= instance.totalFrames)
        {
            throw new Error('End frame is out of bounds');
        }
        if (start >= end)
        {
            throw new Error('End frame is before start frame');
        }

        // Stop any animation that's playing
        this.stop(instance);

        loop = !!loop;

        // Add a new timeline
        const timeline = AnimatorTimeline.create(
            instance,
            start,
            end,
            loop,
            callback,
        );

        this._timelines.push(timeline);

        // Set the current frame
        if (instance.currentFrame !== start)
        {
            instance.gotoAndPlay(start);
        }
        else
        {
            instance.play();
        }

        return timeline;
    }

    /**
     * Stop the animation by instance.
     * @param instance Movie clip to play.
     */
    static stop(instance: MovieClip): void
    {
        for (let i = 0, len = this._timelines.length; i < len; i++)
        {
            const timeline = this._timelines[i];

            if (timeline.instance === instance)
            {
                this._internalStop(timeline);
                break;
            }
        }
    }

    /**
     * Stop all the currently playing animations.
     */
    static stopAll(): void
    {
        for (let i = this._timelines.length - 1; i >= 0; i--)
        {
            this._internalStop(this._timelines[i]);
        }
    }

    /**
     * Stop the animation
     * @private
     * @param timeline Timeline to stop.
     */
    static _internalStop(timeline: AnimatorTimeline): void
    {
        this._timelines.splice(this._timelines.indexOf(timeline), 1);
        timeline.instance.stop();
        timeline.destroy();
    }
}

import { MovieClip } from './MovieClip';
import { Animator } from './Animator';

const pool: AnimatorTimeline[] = [];

/**
 * Represents a single animation play.
 */
export class AnimatorTimeline
{
    /**
     * Bound copy of update().
     */
    private _update: (instance: MovieClip) => (() => void|null);

    /**
     * Instance of clip to play.
     * @readOnly
     */
    public instance: MovieClip;

    /**
     * `true` if the timeline is suppose to loop.
     * @readOnly
     */
    public loop: boolean;

    /**
     * Frame number of the starting farme.
     * @readOnly
     */
    public start: number;

    /**
     * Frame number of the ending frame.
     * @readOnly
     */
    public end: number;

    /**
     * Callback called when completed (non-looping animation).
     * @readOnly
     */
    public callback: () => void;

    constructor()
    {
        this._update = this.update.bind(this);
        this.init(null, 0, 0, false, null);
    }

    /**
     * The pool of timelines to use
     * @param instance
     * @param start
     * @param end
     * @param loop
     * @param callback
     */
    private init(instance: MovieClip, start: number, end: number, loop: boolean, callback: () => void): void
    {
        this.instance = instance;
        this.loop = loop;
        this.start = start;
        this.end = end;
        this.callback = callback;

        if (instance)
        {
            // Prevent overshooting the end frame and looping back around:
            instance.loop = false;
            instance.gotoAndStop(start);
            instance._beforeUpdate = this._update;
        }
    }

    /**
     * Don't use after this
     * @private
     */
    destroy(): void
    {
        this.instance._beforeUpdate = null;
        this.init(null, 0, 0, false, null);
        AnimatorTimeline._pool.push(this);
    }

    /**
     * Is the animation complete
     * @method PIXI.animate.AnimatorTimeline#update
     * @param instance
     * @return Callback to do after updateTimeline
     * @private
     */
    update(instance: MovieClip): (() => void) | null
    {
        let completed: () => void;

        if (instance.currentFrame >= this.end)
        {
            // In case we over-shoot the current frame becuase of low FPS
            instance.currentFrame = this.end;

            if (this.loop)
            {
                // Update timeline so we get actions at the end frame
                instance._updateTimeline();
                instance.gotoAndPlay(this.start);
            }
            else
            {
                instance.stop();
                if (this.callback)
                {
                    completed = this.callback;
                }
                this.stop(); // cleanup timeline
            }
        }

        return completed;
    }

    /**
     * Stop the animation, cannot be reused.
     */
    stop(): void
    {
        Animator._internalStop(this);
    }

    /**
     * The progress from 0 to 1 of the playback.
     */
    get progress(): number
    {
        const progress = (this.instance.currentFrame - this.start) / (this.end - this.start);

        return Math.max(0, Math.min(1, progress)); // clamp
    }

    /**
     * The pool of timelines to use
     * @private
     */
    static get _pool(): AnimatorTimeline[]
    {
        return pool;
    }

    /**
     * Create a new timeline
     */
    static create(instance: MovieClip, start: number, end: number, loop: boolean, callback: () => void): AnimatorTimeline
    {
        let timeline: AnimatorTimeline;

        if (this._pool.length)
        {
            timeline = this._pool.pop();
        }
        else
        {
            timeline = new AnimatorTimeline();
        }
        timeline.init(instance, start, end, loop, callback);

        return timeline;
    }
}

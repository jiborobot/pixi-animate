import { ColorMatrixFilter } from '@pixi/filter-color-matrix';
import { Graphics, GraphicsGeometry, ILineStyleOptions } from '@pixi/graphics';
import { Sprite } from '@pixi/sprite';
import { utils } from './utils';

export type DrawCommands = (string|number)[];

export class AnimateGraphics extends Graphics
{
    constructor(geometry?: GraphicsGeometry)
    {
        super(geometry);

        // overwrite with a cleaner version, so fewer function calls are involved
        this.s = super.lineStyle;
    }

    // **************************
    //     Graphics methods
    // **************************

    /**
     * Execute a series of commands, this is the name of the short function
     * followed by the parameters, e.g., `["f", "#ff0000", "r", 0, 0, 100, 200]`
     * @param commands The commands and parameters to draw
     * @return This instance for chaining.
     */
    public drawCommands(commands: DrawCommands): this
    {
        let currentCommand: string; const params = [];
        let i = 0;

        while (i <= commands.length)
        {
            const item = commands[i++];

            if (item === undefined || (this as any)[item])
            {
                if (currentCommand)
                {
                    (this as any)[currentCommand].apply(this, params);
                    params.length = 0;
                }
                currentCommand = item as string;
            }
            else
            {
                params.push(item);
            }
        }

        return this;
    }
    /**
     * Shortcut for `drawCommands`.
     */
    public d = this.drawCommands;

    /**
     * Shortcut for `closePath`.
     **/
    public cp = super.closePath;

    /**
     * Shortcut for `beginHole`
     **/
    public bh = super.beginHole;

    /**
     * Shortcut for `endHole`
     **/
    public eh = super.endHole;

    /**
     * Shortcut for `moveTo`.
     **/
    public m = super.moveTo;

    /**
     * Shortcut for `lineTo`.
     **/
    public l = super.lineTo;

    /**
     * Shortcut for `quadraticCurveTo`.
     **/
    public q = super.quadraticCurveTo;

    /**
     * Shortcut for `bezierCurveTo`.
     **/
    public b = super.bezierCurveTo;

    /**
     * Shortcut for `beginFill`.
     **/
    public f = super.beginFill;

    /**
     * Shortcut for `lineStyle`.
     **/
    public s(width: number, color?: number, alpha?: number, alignment?: number, native?: boolean): this;
    public s(options?: ILineStyleOptions): this;
    public s(...args: any[]): this
    {
        return super.lineStyle(...args);
    }

    /**
     * Shortcut for `drawRect`.
     **/
    public dr = super.drawRect;

    /**
     * Shortcut for `drawRoundedRect`.
     **/
    public rr = super.drawRoundedRect;

    /**
     * Shortcut for `drawRoundedRect`.
     **/
    public rc = super.drawRoundedRect;

    /**
     * Shortcut for `drawCircle`.
     **/
    public dc = super.drawCircle;

    /**
     * Shortcut for `arc`.
     **/
    public ar = super.arc;

    /**
     * Shortcut for `arcTo`.
     **/
    public at = super.arcTo;

    /**
     * Shortcut for `drawEllipse`.
     */
    public de = super.drawEllipse;

    /**
     * Placeholder method for a linear gradient fill. Pixi does not support linear gradient fills,
     * so we just pick the first color in colorArray
     * @param colorArray An array of CSS compatible color values @see `f`
     * @return The Graphics instance the method is called on (useful for chaining calls.)
     **/
    public lf(colorArray: number[]): this
    {
        // @if DEBUG
        console.warn('Linear gradient fills are not supported');
        // @endif

        return this.f(colorArray[0]) as this;
    }

    /**
     * Placeholder method for a radial gradient fill. Pixi does not support radial gradient fills,
     * so we just pick the first color in colorArray
     * @param colorArray An array of CSS compatible color values @see `f`
     * @return The Graphics instance the method is called on (useful for chaining calls.)
     **/
    public rf(colorArray: number[]): this
    {
        // @if DEBUG
        console.warn('Radial gradient fills are not supported');
        // @endif

        return this.f(colorArray[0]) as this;
    }

    /**
     * Placeholder method for a `beginBitmapFill`. Pixi does not support bitmap fills.
     * @return The Graphics instance the method is called on (useful for chaining calls.)
     **/
    public bf(): this
    {
        // @if DEBUG
        console.warn('Bitmap fills are not supported');
        // @endif

        return this.f(0x0) as this;
    }

    /**
     * Placeholder method for a `setStrokeDash`. Pixi does not support dashed strokes.
     * @return The Graphics instance the method is called on (useful for chaining calls.)
     **/
    public sd(): this
    {
        // @if DEBUG
        console.warn('Dashed strokes are not supported');
        // @endif

        return this;
    }

    /**
     * Placeholder method for a `beginBitmapStroke`. Pixi does not support bitmap strokes.
     * @return The Graphics instance the method is called on (useful for chaining calls.)
     **/
    public bs(): this
    {
        // @if DEBUG
        console.warn('Bitmap strokes are not supported');
        // @endif

        return this;
    }

    /**
     * Placeholder method for a `beginLinearGradientStroke`. Pixi does not support gradient strokes.
     * @return The Graphics instance the method is called on (useful for chaining calls.)
     **/
    public ls(): this
    {
        // @if DEBUG
        console.warn('Linear gradient strokes are not supported');
        // @endif

        return this;
    }

    /**
     * Placeholder method for a `beginRadialGradientStroke`. Pixi does not support gradient strokes.
     * @return The Graphics instance the method is called on (useful for chaining calls.)
     **/
    public rs(): this
    {
        // @if DEBUG
        console.warn('Radial gradient strokes are not supported');
        // @endif

        return this;
    }

    // **************************
    //     DisplayObject methods
    // **************************

    /**
     * Function to set if this is renderable or not. Useful for setting masks.
     * @param renderable Make renderable. Defaults to false.
     * @return This instance, for chaining.
     */
    public setRenderable(renderable?: boolean): this
    {
        this.renderable = !!renderable;

        return this;
    }
    /**
     * Shortcut for `setRenderable`.
     */
    public re = this.setRenderable;

    /**
     * Shortcut for `setTransform`.
     */
    public t = super.setTransform;

    /**
     * Setter for mask to be able to chain.
     * @param mask The mask shape to use
     * @return Instance for chaining
     */
    public setMask(mask: Graphics|Sprite): this
    {
        // According to PIXI, only Graphics and Sprites can
        // be used as mask, let's ignore everything else, like other
        // movieclips and displayobjects/containers
        if (mask)
        {
            if (!(mask instanceof Graphics) && !(mask instanceof Sprite))
            {
                if (typeof console !== 'undefined' && console.warn)
                {
                    console.warn('Warning: Masks can only be PIXI.Graphics or PIXI.Sprite objects.');
                }

                return this;
            }
        }
        this.mask = mask;

        return this;
    }
    /**
     * Shortcut for `setMask`.
     */
    public ma = this.setMask;

    /**
     * Chainable setter for alpha
     * @param alpha The alpha amount to use, from 0 to 1
     * @return Instance for chaining
     */
    public setAlpha(alpha: number): this
    {
        this.alpha = alpha;

        return this;
    }
    /**
     * Shortcut for `setAlpha`.
     */
    public a = this.setAlpha;

    /**
     * Set the tint values by color.
     * @param tint The color value to tint
     * @return Object for chaining
     */
    public setTint(tint: string|number): this
    {
        if (typeof tint === 'string')
        {
            tint = utils.hexToUint(tint);
        }
        // this.tint = tint
        // return this;
        // TODO: Replace with DisplayObject.tint setter
        // once the functionality is added to Pixi.js, for
        // now we'll use the slower ColorMatrixFilter to handle
        // the color transformation
        const r = (tint >> 16) & 0xFF;
        const g = (tint >> 8) & 0xFF;
        const b = tint & 0xFF;

        return this.setColorTransform(r / 255, 0, g / 255, 0, b / 255, 0);
    }
    /**
     * Shortcut for `setTint`.
     */
    public i = this.setTint;

    /**
     * Set additive and multiply color, tinting
     * @param r The multiply red value
     * @param rA The additive red value
     * @param g The multiply green value
     * @param gA The additive green value
     * @param b The multiply blue value
     * @param bA The additive blue value
     * @return Object for chaining
     */
    public setColorTransform(r: number, rA: number, g: number, gA: number, b: number, bA: number): this
    {
        const filter = this.colorTransformFilter;

        filter.matrix[0] = r;
        filter.matrix[4] = rA;
        filter.matrix[6] = g;
        filter.matrix[9] = gA;
        filter.matrix[12] = b;
        filter.matrix[14] = bA;
        this.filters = [filter];

        return this;
    }
    /**
     * Shortcut for `setColor`.
     */
    // method instead of direct reference to allow override in v1 shim
    public c(r: number, rA: number, g: number, gA: number, b: number, bA: number): this
    {
        return this.setColorTransform(r, rA, g, gA, b, bA);
    }
    // public c = this.setColorTransform;

    protected _colorTransformFilter: ColorMatrixFilter;
    /**
     * The current default color transforming filter
     */
    public set colorTransformFilter(filter: ColorMatrixFilter)
    {
        this._colorTransformFilter = filter;
    }
    public get colorTransformFilter(): ColorMatrixFilter
    {
        return this._colorTransformFilter || new ColorMatrixFilter();
    }
}

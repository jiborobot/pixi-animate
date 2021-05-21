import { Sprite } from '@pixi/sprite';
import { Graphics } from '@pixi/graphics';
import { ColorMatrixFilter } from '@pixi/filter-color-matrix';
import { utils } from './utils';

/**
 * Utility subclass of PIXI.Sprite
 */
export class AnimateSprite extends Sprite
{
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
        this.tint = tint;

        return this;
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
    public c = this.setColorTransform;

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

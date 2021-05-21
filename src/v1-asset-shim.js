// NOTE: This file is included _only_ in the pixi-animate-legacy bundle
// any references to 'this' would be a 'window' reference, but work slightly differently when
// require()'d in unit tests

/* eslint-disable no-undef, func-names */
// override base PixiJS versions with the pixi-animate extensions.
// have to override the PIXI object because individual sets may not work in all situations.
this.PIXI = Object.assign({}, PIXI, {
    Container: this.PIXI.animate.Container,
    Text: this.PIXI.animate.Text,
    Sprite: this.PIXI.animate.Sprite,
    Graphics: this.PIXI.animate.Graphics,
    animate: this.PIXI.animate,
});

// Deprecated version of class extension. Provided as support for old assets.
function extend(child)
{
    child.prototype = Object.create(this.prototype);
    child.prototype.__parent = this.prototype;
    child.prototype.constructor = child;

    return child;
}

// set extend as static method on relevant classes
this.PIXI.Container.extend = this.PIXI.Container.e = extend;
this.PIXI.Text.extend = this.PIXI.Text.e = extend;
this.PIXI.Sprite.extend = this.PIXI.Sprite.e = extend;
this.PIXI.Graphics.extend = this.PIXI.Graphics.e = extend;
this.PIXI.animate.MovieClip.extend = this.PIXI.animate.MovieClip.e = extend;

// Replace Graphics.c as closePath instead of setColorTransform, as it was in 1.X
this.PIXI.Graphics.prototype.c = this.PIXI.Graphics.prototype.closePath;

// Put in a version of addHole() that works like this.PIXI v4
this.PIXI.Graphics.prototype.h = this.PIXI.Graphics.prototype.addHole = function ()
{
    // note: this works fine when a moveTo() happened before the hole started (which should have
    // in most/all cases), because moveTo() ends the polygon that was previously drawn.
    // if something like that _didn't_ happen, then this won't work properly
    // enable hole mode (retroactively)
    this._holeMode = true;
    // end the hole that we just drew
    this.endHole();

    return this;
};

// restore fromFrame(), which from() has subsumed
this.PIXI.Texture.fromFrame = this.PIXI.Texture.from;

// Create global library and shape data caches
this.PIXI.animate.ShapesCache = {};
window.lib = window.lib || {};

// wrap load() with one that intercepts and handles the v1 assets.
const realLoad = this.PIXI.animate.load;

this.PIXI.animate.load = (scene, optionsOrComplete) =>
{
    if (typeof scene === 'function')
    {
        scene = {
            version: 2,
            stage: scene,
            assets: scene.assets,
            textures: this.PIXI.utils.TextureCache,
            shapes: this.PIXI.animate.ShapesCache,
            // spritesheets needs to exist, even if legacy assets won't read from it
            spritesheets: [],
            lib: window.lib,
        };
    }

    return realLoad(scene, optionsOrComplete);
};

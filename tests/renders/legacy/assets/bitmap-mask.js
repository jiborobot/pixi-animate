(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Sprite = PIXI.Sprite;
    var fromFrame = PIXI.Texture.fromFrame;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    lib.bitmap_mask = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 1,
            framerate: 24
        });
        var instance1 = new Sprite(fromFrame("Bitmap 1"))
            .setRenderable(false)
            .setTransform(2, 2, 0.5, 0.5);
        var instance2 = new Graphics()
            .drawCommands(shapes.bitmap_mask[0])
            .setMask(instance1);
        this.addChild(instance1, instance2);
    });

    lib.bitmap_mask.assets = {
        "Bitmap 1": "images/Bitmap 1.png",
        "bitmap_mask": "images/bitmap_mask.shapes.json"
    };
})(PIXI, lib = lib || {});
var lib;
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        stage: lib.bitmap_mask,
        background: 0xffffff,
        width: 32,
        height: 32,
        framerate: 24,
        totalFrames: 1,
        library: lib
    };
}
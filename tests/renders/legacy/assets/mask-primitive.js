(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    lib.mask_primitive = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 1,
            framerate: 30
        });
        var instance1 = new Graphics()
            .drawCommands(shapes.mask_primitive[0])
            .setRenderable(false)
            .setTransform(-13.1, -8);
        var instance2 = new Graphics()
            .drawCommands(shapes.mask_primitive[1])
            .setMask(instance1);
        this.addChild(instance1, instance2);
    });

    lib.mask_primitive.assets = {
        "mask_primitive": "images/mask_primitive.shapes.json"
    };
})(PIXI, lib = lib || {});
var lib;
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        stage: lib.mask_primitive,
        background: 0xffffff,
        width: 32,
        height: 32,
        framerate: 30,
        totalFrames: 1,
        library: lib
    };
}
(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    var Graphic1 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 4, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.mask_nested[0])
            .setRenderable(false);
        var instance1 = new Graphics()
            .drawCommands(shapes.mask_nested[1]);
        this.addTimedChild(instance2, 1, 2, {
                "1": {
                    x: 0,
                    y: 0
                },
                "2": {
                    x: 7,
                    y: 7
                }
            })
            .addTimedMask(instance1, {
                "1": instance2,
                "3": null
            })
            .addTimedChild(instance1);
    });

    lib.mask_nested = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 4,
            framerate: 30
        });
        var instance1 = new Graphic1(MovieClip.SYNCHED)
            .setTransform(16, 16)
            .setColorTransform(1, 0, 1, 0, 1, 0);
        this.addTimedChild(instance1);
    });

    lib.mask_nested.assets = {
        "mask_nested": "images/mask_nested.shapes.json"
    };
})(PIXI, lib = lib || {});
var lib;
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        stage: lib.mask_nested,
        background: 0xffffff,
        width: 32,
        height: 32,
        framerate: 30,
        totalFrames: 4,
        library: lib
    };
}
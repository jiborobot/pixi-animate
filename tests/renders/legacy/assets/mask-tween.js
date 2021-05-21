(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    var Graphic1 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.mask_tween[0]);
        this.addTimedChild(instance1);
    });

    lib.mask_tween = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 3,
            framerate: 30
        });
        var instance1 = new Graphic1(MovieClip.SYNCHED)
            .setRenderable(false);
        var instance2 = new Graphics()
            .drawCommands(shapes.mask_tween[1])
            .setMask(instance1);
        this.addTimedChild(instance1, 0, 3, {
                "0": {
                    x: 11,
                    y: 11
                },
                "1": {
                    x: 16.5
                },
                "2": {
                    x: 22
                }
            })
            .addTimedChild(instance2);
    });

    lib.mask_tween.assets = {
        "mask_tween": "images/mask_tween.shapes.json"
    };
})(PIXI, lib = lib || {});
var lib;
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        stage: lib.mask_tween,
        background: 0xffffff,
        width: 32,
        height: 32,
        framerate: 30,
        totalFrames: 3,
        library: lib
    };
}
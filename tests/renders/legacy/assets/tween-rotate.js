(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    var Graphic1 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_rotate[0]);
        this.addTimedChild(instance1);
    });

    lib.tween_rotate = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 3,
            framerate: 24
        });
        var instance1 = new Graphic1(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 16,
                y: 16,
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                x: 15.959,
                y: 16.005,
                r: 0.393
            },
            "2": {
                x: 16,
                y: 16,
                r: 0.785
            }
        });
    });

    lib.tween_rotate.assets = {
        "tween_rotate": "images/tween_rotate.shapes.json"
    };
})(PIXI, lib = lib || {});
var lib;
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        stage: lib.tween_rotate,
        background: 0xffffff,
        width: 32,
        height: 32,
        framerate: 24,
        totalFrames: 3,
        library: lib
    };
}
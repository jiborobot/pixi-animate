(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    var Graphic1 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_skew_y[0]);
        this.addTimedChild(instance1);
    });

    lib.tween_skew_y = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 3,
            framerate: 24
        });
        var instance1 = new Graphic1(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 16,
                y: 16,
                sx: 1,
                ky: 0
            },
            "1": {
                x: 16.061,
                y: 16.039,
                sx: 1.014,
                ky: -0.118
            },
            "2": {
                x: 16,
                y: 16,
                sx: 1.029,
                ky: -0.237
            }
        });
    });

    lib.tween_skew_y.assets = {
        "tween_skew_y": "images/tween_skew_y.shapes.json"
    };
})(PIXI, lib = lib || {});
var lib;
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        stage: lib.tween_skew_y,
        background: 0xffffff,
        width: 32,
        height: 32,
        framerate: 24,
        totalFrames: 3,
        library: lib
    };
}
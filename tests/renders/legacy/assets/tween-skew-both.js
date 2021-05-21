(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    var Graphic1 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_skew_both[0]);
        this.addTimedChild(instance1);
    });

    lib.tween_skew_both = MovieClip.extend(function () {
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
                sy: 1,
                kx: 0,
                ky: 0
            },
            "1": {
                x: 15.988,
                y: 15.979,
                sx: 1.047,
                sy: 1.008,
                kx: -0.109,
                ky: -0.084
            },
            "2": {
                x: 16,
                y: 16,
                sx: 1.095,
                sy: 1.016,
                kx: -0.219,
                ky: -0.172
            }
        });
    });

    lib.tween_skew_both.assets = {
        "tween_skew_both": "images/tween_skew_both.shapes.json"
    };
})(PIXI, lib = lib || {});
var lib;
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        stage: lib.tween_skew_both,
        background: 0xffffff,
        width: 32,
        height: 32,
        framerate: 24,
        totalFrames: 3,
        library: lib
    };
}
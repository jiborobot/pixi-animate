(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    var Graphic1 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_alpha_tint[0]);
        this.addTimedChild(instance1);
    });

    lib.tween_alpha_tint = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 3,
            framerate: 24
        });
        var instance1 = new Graphic1(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 16,
                y: 16,
                a: 0,
                c: [
                    1,
                    0,
                    1,
                    0,
                    1,
                    0
                ]
            },
            "1": {
                a: 0.5,
                c: [
                    0.5,
                    0,
                    0.5,
                    0,
                    0.5,
                    0.5
                ]
            },
            "2": {
                a: 1,
                c: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            }
        });
    });

    lib.tween_alpha_tint.assets = {
        "tween_alpha_tint": "images/tween_alpha_tint.shapes.json"
    };
})(PIXI, lib = lib || {});
var lib;
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        stage: lib.tween_alpha_tint,
        background: 0xffffff,
        width: 32,
        height: 32,
        framerate: 24,
        totalFrames: 3,
        library: lib
    };
}
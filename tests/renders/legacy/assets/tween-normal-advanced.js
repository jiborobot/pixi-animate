(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    var Graphic1 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_normal_advanced[0]);
        this.addTimedChild(instance1);
    });

    lib.tween_normal_advanced = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 3,
            framerate: 24
        });
        var instance1 = new Graphic1(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 16,
                y: 16,
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
                c: [
                    0.78,
                    0.38,
                    0.13,
                    0.35,
                    0.78,
                    0.5
                ]
            },
            "2": {
                c: [
                    0.55,
                    0.76, -0.74,
                    0.69,
                    0.55,
                    1
                ]
            }
        });
    });

    lib.tween_normal_advanced.assets = {
        "tween_normal_advanced": "images/tween_normal_advanced.shapes.json"
    };
})(PIXI, lib = lib || {});
var lib;
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        stage: lib.tween_normal_advanced,
        background: 0xffffff,
        width: 32,
        height: 32,
        framerate: 24,
        totalFrames: 3,
        library: lib
    };
}
(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    var Graphic1 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_scale_uniform[0]);
        this.addTimedChild(instance1);
    });

    lib.tween_scale_uniform = MovieClip.extend(function () {
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
                sy: 1
            },
            "1": {
                x: 16.017,
                y: 16.017,
                sx: 0.567,
                sy: 0.567
            },
            "2": {
                x: 16,
                y: 16,
                sx: 0.133,
                sy: 0.133
            }
        });
    });

    lib.tween_scale_uniform.assets = {
        "tween_scale_uniform": "images/tween_scale_uniform.shapes.json"
    };
})(PIXI, lib = lib || {});
var lib;
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        stage: lib.tween_scale_uniform,
        background: 0xffffff,
        width: 32,
        height: 32,
        framerate: 24,
        totalFrames: 3,
        library: lib
    };
}
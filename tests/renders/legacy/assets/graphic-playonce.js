(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    var Graphic1 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 2, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.graphic_playonce[0]);
        this.addTimedChild(instance1, 0, 2, {
            "0": {
                x: 0,
                y: 0
            },
            "1": {
                x: 4,
                y: 4
            }
        });
    });

    lib.graphic_playonce = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 2,
            framerate: 24
        });
        var instance1 = new Graphic1(MovieClip.SYNCHED)
            .setTransform(16, 16);
        this.addTimedChild(instance1);
    });

    lib.graphic_playonce.assets = {
        "graphic_playonce": "images/graphic_playonce.shapes.json"
    };
})(PIXI, lib = lib || {});
var lib;
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        stage: lib.graphic_playonce,
        background: 0xffffff,
        width: 32,
        height: 32,
        framerate: 24,
        totalFrames: 2,
        library: lib
    };
}
(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    var Graphic1 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 2, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.graphic_singleframe[0]);
        this.addTimedChild(instance1);
    });

    var Graphic2 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 2, loop: false });
        var instance1 = new Graphic1(MovieClip.SYNCHED)
            .setTransform(-2, -2);
        this.addTimedChild(instance1);
    });

    lib.graphic_singleframe = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 2,
            framerate: 24
        });
        var instance1 = new Graphic2(MovieClip.SYNCHED)
            .setTransform(16, 16);
        this.addTimedChild(instance1);
    });

    lib.graphic_singleframe.assets = {
        "graphic_singleframe": "images/graphic_singleframe.shapes.json"
    };
})(PIXI, lib = lib || {});
var lib;
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        stage: lib.graphic_singleframe,
        background: 0xffffff,
        width: 32,
        height: 32,
        framerate: 24,
        totalFrames: 2,
        library: lib
    };
}
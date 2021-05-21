(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Container = PIXI.Container;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    lib.Graphic1 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.end_only[0]);
        this.addChild(instance1);
    });

    lib.end_only = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 2,
            framerate: 24
        });
        var instance1 = new lib.Graphic1()
            .setTransform(16, 16);
        this.addTimedChild(instance1, 1, 1);
    });

    lib.end_only.assets = {
        "end_only": "images/end_only.shapes.json"
    };
})(PIXI, lib = lib || {});
var lib;
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        stage: lib.end_only,
        background: 0xffffff,
        width: 32,
        height: 32,
        framerate: 24,
        totalFrames: 2,
        library: lib
    };
}
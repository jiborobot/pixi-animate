(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Container = PIXI.Container;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    lib.Graphic1 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.nested_rotate[0]);
        this.addChild(instance1);
    });

    lib.Graphic2 = Container.extend(function () {
        Container.call(this);
        var instance1 = new lib.Graphic1()
            .setTransform(0, 0, 1, 1, 0.588)
            .setColorTransform(1, 0, 1, 0, 1, 0);
        this.addChild(instance1);
    });

    lib.Graphic3 = Container.extend(function () {
        Container.call(this);
        var instance1 = new lib.Graphic2()
            .setTransform(0, 0, 1, 1, 0.977)
            .setColorTransform(1, 0, 1, 0, 1, 0);
        this.addChild(instance1);
    });

    lib.nested_rotate = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 1,
            framerate: 24
        });
        var instance1 = new lib.Graphic3()
            .setTransform(16, 16, 1, 1, 0.226)
            .setColorTransform(1, 0, 1, 0, 1, 0);
        this.addChild(instance1);
    });

    lib.nested_rotate.assets = {
        "nested_rotate": "images/nested_rotate.shapes.json"
    };
})(PIXI, lib = lib || {});
var lib;
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        stage: lib.nested_rotate,
        background: 0xffffff,
        width: 32,
        height: 32,
        framerate: 24,
        totalFrames: 1,
        library: lib
    };
}
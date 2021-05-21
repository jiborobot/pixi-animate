(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Container = PIXI.Container;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    lib.Graphic1 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.nested_mixed_transform[0]);
        this.addChild(instance1);
    });

    lib.Graphic2 = Container.extend(function () {
        Container.call(this);
        var instance1 = new lib.Graphic1()
            .setTransform(0, 0, 0.762, 0.762, -1.234)
            .setColorTransform(1, 0, 1, 0, 1, 0);
        this.addChild(instance1);
    });

    lib.Graphic3 = Container.extend(function () {
        Container.call(this);
        var instance1 = new lib.Graphic2()
            .setTransform(0, 0, 1.016, 1.01, 0, -0.029, 0.256)
            .setColorTransform(1, 0, 1, 0, 1, 0);
        this.addChild(instance1);
    });

    lib.nested_mixed_transform = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 1,
            framerate: 24
        });
        var instance1 = new lib.Graphic3()
            .setTransform(16, 16, 1, 1, -0.143)
            .setColorTransform(1, 0, 1, 0, 1, 0);
        this.addChild(instance1);
    });

    lib.nested_mixed_transform.assets = {
        "nested_mixed_transform": "images/nested_mixed_transform.shapes.json"
    };
})(PIXI, lib = lib || {});
var lib;
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        stage: lib.nested_mixed_transform,
        background: 0xffffff,
        width: 32,
        height: 32,
        framerate: 24,
        totalFrames: 1,
        library: lib
    };
}
(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Container = PIXI.Container;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    lib.Graphic1 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.nested_scale[0]);
        this.addChild(instance1);
    });

    lib.Graphic2 = Container.extend(function () {
        Container.call(this);
        var instance1 = new lib.Graphic1()
            .setTransform(0, 0, 0.6, 0.6);
        this.addChild(instance1);
    });

    lib.Graphic3 = Container.extend(function () {
        Container.call(this);
        var instance1 = new lib.Graphic2()
            .setTransform(0, 0, 1.2, 1.2);
        this.addChild(instance1);
    });

    lib.nested_scale = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 1,
            framerate: 24
        });
        var instance1 = new lib.Graphic3()
            .setTransform(16, 16, 0.75, 0.75);
        this.addChild(instance1);
    });

    lib.nested_scale.assets = {
        "nested_scale": "images/nested_scale.shapes.json"
    };
})(PIXI, lib = lib || {});
var lib;
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        stage: lib.nested_scale,
        background: 0xffffff,
        width: 32,
        height: 32,
        framerate: 24,
        totalFrames: 1,
        library: lib
    };
}
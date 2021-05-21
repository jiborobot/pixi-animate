(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Container = PIXI.Container;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    lib.Graphic1 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.nested_skew[0]);
        this.addChild(instance1);
    });

    lib.Graphic2 = Container.extend(function () {
        Container.call(this);
        var instance1 = new lib.Graphic1()
            .setTransform(0, 0, 0.947, 1.057, 0, -0.124, 0.157);
        this.addChild(instance1);
    });

    lib.Graphic3 = Container.extend(function () {
        Container.call(this);
        var instance1 = new lib.Graphic2()
            .setTransform(0, 0, 1.086, 1.059, 0, 0.337, 0.181);
        this.addChild(instance1);
    });

    lib.nested_skew = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 1,
            framerate: 24
        });
        var instance1 = new lib.Graphic3()
            .setTransform(16, 16, 1.011, 1.007, 0, -0.116, -0.07);
        this.addChild(instance1);
    });

    lib.nested_skew.assets = {
        "nested_skew": "images/nested_skew.shapes.json"
    };
})(PIXI, lib = lib || {});
var lib;
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        stage: lib.nested_skew,
        background: 0xffffff,
        width: 32,
        height: 32,
        framerate: 24,
        totalFrames: 1,
        library: lib
    };
}
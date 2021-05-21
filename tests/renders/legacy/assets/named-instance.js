(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Container = PIXI.Container;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    lib.Example = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.NamedInstance[0]);
        this.addChild(instance1);
    });

    lib.NamedInstance = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 1,
            framerate: 24
        });
        var instance1 = this.example = new lib.Example()
            .setTransform(4, 4)
            .setColorTransform(1, 0, 1, 0, 1, 0);
        this.addChild(instance1);
    });

    lib.NamedInstance.assets = {
        "NamedInstance": "images/NamedInstance.shapes.json"
    };
})(PIXI, lib = lib || {});
var lib;
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        stage: lib.NamedInstance,
        background: 0xffffff,
        width: 32,
        height: 32,
        framerate: 24,
        totalFrames: 1,
        library: lib
    };
}
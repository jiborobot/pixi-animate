(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Container = PIXI.Container;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    lib.mask = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.mask_movieclip[0]);
        this.addChild(instance1);
    });

    lib.mask_movieclip = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 1,
            framerate: 30
        });
        var instance1 = new lib.mask()
            .setRenderable(false)
            .setTransform(10.5, 10.5)
            .setColorTransform(1, 0, 1, 0, 1, 0);
        var instance2 = new Graphics()
            .drawCommands(shapes.mask_movieclip[1])
            .setMask(instance1);
        this.addChild(instance1, instance2);
    });

    lib.mask_movieclip.assets = {
        "mask_movieclip": "images/mask_movieclip.shapes.json"
    };
})(PIXI, lib = lib || {});
var lib;
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        stage: lib.mask_movieclip,
        background: 0xffffff,
        width: 32,
        height: 32,
        framerate: 30,
        totalFrames: 1,
        library: lib
    };
}
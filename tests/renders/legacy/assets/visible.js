(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Container = PIXI.Container;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    lib.graphic = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.visible[0]);
        this.addChild(instance1);
    });

    lib.visible = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 2,
            framerate: 24
        });
        var instance1 = new lib.graphic();
        this.addTimedChild(instance1, 0, 2, {
            "0": {
                x: 16,
                y: 16,
                v: 1
            },
            "1": {
                v: 0
            }
        });
    });

    lib.visible.assets = {
        "visible": "images/visible.shapes.json"
    };
})(PIXI, lib = lib || {});
var lib;
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        stage: lib.visible,
        background: 0xffffff,
        width: 32,
        height: 32,
        framerate: 24,
        totalFrames: 2,
        library: lib
    };
}
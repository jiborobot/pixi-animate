(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Container = PIXI.Container;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    lib.Graphic1 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_skew_both_test[0]);
        this.addChild(instance1);
    });

    lib.tween_skew_both_test = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 1,
            framerate: 24
        });
        var instance1 = new lib.Graphic1()
            .setTransform(16, 16, 1.047, 1.008, 0, -0.109, -0.084);
        this.addChild(instance1);
    });

    lib.tween_skew_both_test.assets = {
        "tween_skew_both_test": "images/tween_skew_both_test.shapes.json"
    };
})(PIXI, lib = lib || {});
var lib;
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        stage: lib.tween_skew_both_test,
        background: 0xffffff,
        width: 32,
        height: 32,
        framerate: 24,
        totalFrames: 1,
        library: lib
    };
}
(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    lib.hole = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 1,
            framerate: 24
        });
        var instance1 = new Graphics()
            .drawCommands(shapes.hole[0]);
        this.addChild(instance1);
    });

    lib.hole.assets = {
        "hole": "images/hole.shapes.json"
    };
})(PIXI, lib = lib || {});
var lib;
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        stage: lib.hole,
        background: 0xffffff,
        width: 32,
        height: 32,
        framerate: 24,
        totalFrames: 1,
        library: lib
    };
}
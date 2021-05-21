(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    lib.depth_sorting = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 1,
            framerate: 24
        });
        var instance3 = new Graphics()
            .drawCommands(shapes.depth_sorting[2]);
        var instance2 = new Graphics()
            .drawCommands(shapes.depth_sorting[1]);
        var instance1 = new Graphics()
            .drawCommands(shapes.depth_sorting[0]);
        this.addChild(instance3, instance2, instance1);
    });

    lib.depth_sorting.assets = {
        "depth_sorting": "images/depth_sorting.shapes.json"
    };
})(PIXI, lib = lib || {});
var lib;
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        stage: lib.depth_sorting,
        background: 0xffffff,
        width: 32,
        height: 32,
        framerate: 24,
        totalFrames: 1,
        library: lib
    };
}
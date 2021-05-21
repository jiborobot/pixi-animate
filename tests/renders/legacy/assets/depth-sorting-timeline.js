(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    lib.depth_sorting_timeline = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 3,
            framerate: 24
        });
        var instance2 = new Graphics()
            .drawCommands(shapes.depth_sorting_timeline[1]);
        var instance3 = new Graphics()
            .drawCommands(shapes.depth_sorting_timeline[2]);
        var instance1 = new Graphics()
            .drawCommands(shapes.depth_sorting_timeline[0]);
        this.addTimedChild(instance2, 1, 2)
            .addTimedChild(instance3, 2, 1)
            .addTimedChild(instance1);
    });

    lib.depth_sorting_timeline.assets = {
        "depth_sorting_timeline": "images/depth_sorting_timeline.shapes.json"
    };
})(PIXI, lib = lib || {});
var lib;
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        stage: lib.depth_sorting_timeline,
        background: 0xffffff,
        width: 32,
        height: 32,
        framerate: 24,
        totalFrames: 3,
        library: lib
    };
}
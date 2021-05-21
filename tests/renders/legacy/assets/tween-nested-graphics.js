(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    var Graphic1 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_graphics[0]);
        this.addTimedChild(instance1);
    });

    var Graphic2 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic1(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic3 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic2(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic4 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic3(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic5 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic4(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                y: 0
            },
            "1": {
                y: 7.35
            },
            "2": {
                y: 14.7
            }
        });
    });

    lib.tween_nested_graphics = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 3,
            framerate: 24
        });
        var instance1 = new Graphic5(MovieClip.SYNCHED)
            .setTransform(16, 16);
        this.addTimedChild(instance1);
    });

    lib.tween_nested_graphics.assets = {
        "tween_nested_graphics": "images/tween_nested_graphics.shapes.json"
    };
})(PIXI, lib = lib || {});
var lib;
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        stage: lib.tween_nested_graphics,
        background: 0xffffff,
        width: 32,
        height: 32,
        framerate: 24,
        totalFrames: 3,
        library: lib
    };
}
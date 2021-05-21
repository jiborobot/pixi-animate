(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Container = PIXI.Container;
    var Sprite = PIXI.Sprite;
    var fromFrame = PIXI.Texture.fromFrame;

    lib.Graphic1 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("Bitmap 1"))
            .setTransform(-12, -12);
        this.addChild(instance1);
    });

    lib.bitmap_symbol = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 1,
            framerate: 24
        });
        var instance1 = new lib.Graphic1()
            .setTransform(16, 16);
        this.addChild(instance1);
    });

    lib.bitmap_symbol.assets = {
        "Bitmap 1": "images/Bitmap 1.png"
    };
})(PIXI, lib = lib || {});
var lib;
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        stage: lib.bitmap_symbol,
        background: 0xffffff,
        width: 32,
        height: 32,
        framerate: 24,
        totalFrames: 1,
        library: lib
    };
}
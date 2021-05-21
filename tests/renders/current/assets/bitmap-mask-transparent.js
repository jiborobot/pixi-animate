const data = {
    stage: null,
    background: 0xffffff,
    width: 32,
    height: 32,
    framerate: 24,
    totalFrames: 1,
    assets: {
        "Bitmap 4": "images/Bitmap 4.png",
        "bitmap_mask_transparent": "images/bitmap_mask_transparent.shapes.json"
    },
    lib: {},
    shapes: {},
    textures: {},
    spritesheets: [],
    getTexture: function(id) {
        if (data.textures[id]) {
            return data.textures[id];
        }
        const atlas = data.spritesheets.find(atlas => !!atlas.textures[id]);
        return atlas ? atlas.textures[id] : null;
    },
    setup: function (animate) {
        const MovieClip = animate.MovieClip;
        const Sprite = animate.Sprite;
        const Graphics = animate.Graphics;

        data.lib.bitmap_mask_transparent = class extends MovieClip {
            constructor() {
                super({
                    duration: 1,
                    framerate: 24
                });
                const instance1 = new Sprite(data.getTexture("Bitmap 4"))
                    .setRenderable(false)
                    .setTransform(2, 2);
                const instance2 = new Graphics()
                    .drawCommands(data.shapes.bitmap_mask_transparent[0])
                    .setMask(instance1);
                this.addChild(instance1, instance2);
            }
        };

        data.lib.bitmap_mask_transparent;
    }
};

module.exports = data;
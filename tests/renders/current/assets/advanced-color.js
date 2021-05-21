const data = {
    /**
     * Constructor for the root MovieClip. Is null before setup() is run.
     */
    stage: null,
    /**
     * Background color of the scene, as defined when the asset is published.
     */
    background: 0xffffff,
    /**
     * Width of the scene, as defined when the asset is published.
     */
    width: 32,
    /**
     * Height of the scene, as defined when the asset is published.
     */
    height: 32,
    /**
     * Framerate of the scene (frames per second), as defined when the asset is published.
     */
    framerate: 24,
    /**
     * Total number of frames of the root MovieClip.
     */
    totalFrames: 1,
    /**
     * Dictionary of paths to shape files and textures, indexed by unique id within the scene file.
     */
    assets: {
        "advanced_color": "images/advanced_color.shapes.json"
    },
    /**
     * Dictionary of display object constructors used within this scene. This is an empty object
     * before setup() is run, but can be overwritten with a shared library dictionary (before setup() is run).
     */
    lib: {},
    /**
     * Dictionary of loaded shape instructions for this scene. This is intially an empty object that
     * can be filled by animate.load(), or by a custom loading system. It must be filled before
     * any items are instantiated.
     */
    shapes: {},
    /**
     * Dictionary of loaded individual images for this scene.This is intially an empty object that
     * will be filled by animate.load(). It will be used by the animate.load() method for
     * getTexture(), and is not needed if getTexture() is overridden.
     */
    textures: {},
    /**
     * Dictionary of loaded spritesheet for this scene.This is intially an empty object that
     * will be filled by animate.load(). It will be used by the animate.load() method for
     * getTexture(), and is not needed if getTexture() is overridden.
     */
    spritesheets: [],
    /**
     * Function for getting a texture by ID.
     * It can be set to PIXI.Texture.from for global texture atlas.
     */
    getTexture: function(id) {
        if (data.textures[id]) {
            return data.textures[id];
        }
        const atlas = data.spritesheets.find(atlas => !!atlas.textures[id]);
        return atlas ? atlas.textures[id] : null;
    },
    /**
     * Creates classes for each Container and MovieClip within the scene, filling data.lib and
     * setting data.stage.
     */
    setup: function(animate) {
        const MovieClip = animate.MovieClip;
        const Container = animate.Container;
        const Graphics = animate.Graphics;

        data.lib.Graphic1 = class extends Container {
            constructor() {
                super();
                const instance1 = new Graphics()
                    .drawCommands(data.shapes.advanced_color[0]);
                this.addChild(instance1);
            }
        };

        data.lib.advanced_color = class extends MovieClip {
            constructor() {
                super({
                    duration: 1,
                    framerate: 24
                });
                const instance1 = new data.lib.Graphic1()
                    .setTransform(16, 16)
                    .setColorTransform(1, 0.42, -0.69, 0.09, 0.31, 0.89);
                this.addChild(instance1);
            }
        };
        
        data.stage = data.lib.advanced_color;
    }
};

/**
 * choose mutually exclusive output type when publishing
 */
// CommonJS output
module.exports = data;
// ES6 output
// export default data;
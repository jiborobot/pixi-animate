const data = {
	stage: null,
    background: 0xffffff,
    width: 32,
    height: 32,
    framerate: 30,
    totalFrames: 4,
	assets: {
        "mask_nested": "images/mask_nested.shapes.json"
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
	setup: function(animate) {
	

    const MovieClip = animate.MovieClip;
    const Graphics = animate.Graphics;

    const Graphic1 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 4, loop: false });
        const instance2 = new Graphics()
            .drawCommands(data.shapes.mask_nested[0])
            .setRenderable(false);
        const instance1 = new Graphics()
            .drawCommands(data.shapes.mask_nested[1]);
        this.addTimedChild(instance2, 1, 2, {
                "1": {
                    x: 0,
                    y: 0
                },
                "2": {
                    x: 7,
                    y: 7
                }
            })
            .addTimedMask(instance1, {
                "1": instance2,
                "3": null
            })
            .addTimedChild(instance1);
    }
    }

    data.lib.mask_nested = class extends MovieClip {
    constructor() {
        super({
            duration: 4,
            framerate: 30
        });
        const instance1 = new Graphic1(MovieClip.SYNCHED)
            .setTransform(16, 16)
            .setColorTransform(1, 0, 1, 0, 1, 0);
        this.addTimedChild(instance1);
    }
    }

    data.stage = data.lib.mask_nested;

	}
};

module.exports = data;
const data = {
	stage: null,
    background: 0xffffff,
    width: 32,
    height: 32,
    framerate: 30,
    totalFrames: 3,
	assets: {
        "mask_tween": "images/mask_tween.shapes.json"
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
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.mask_tween[0]);
        this.addTimedChild(instance1);
    }
    }

    data.lib.mask_tween = class extends MovieClip {
    constructor() {
        super({
            duration: 3,
            framerate: 30
        });
        const instance1 = new Graphic1(MovieClip.SYNCHED)
            .setRenderable(false);
        const instance2 = new Graphics()
            .drawCommands(data.shapes.mask_tween[1])
            .setMask(instance1);
        this.addTimedChild(instance1, 0, 3, {
                "0": {
                    x: 11,
                    y: 11
                },
                "1": {
                    x: 16.5
                },
                "2": {
                    x: 22
                }
            })
            .addTimedChild(instance2);
    }
    }

    data.stage = data.lib.mask_tween;

	}
};

module.exports = data;
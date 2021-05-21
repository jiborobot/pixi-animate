const data = {
	stage: null,
    background: 0xffffff,
    width: 32,
    height: 32,
    framerate: 24,
    totalFrames: 3,
	assets: {
        "tween_scale_uniform": "images/tween_scale_uniform.shapes.json"
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
            .drawCommands(data.shapes.tween_scale_uniform[0]);
        this.addTimedChild(instance1);
    }
    }

    data.lib.tween_scale_uniform = class extends MovieClip {
    constructor() {
        super({
            duration: 3,
            framerate: 24
        });
        const instance1 = new Graphic1(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 16,
                y: 16,
                sx: 1,
                sy: 1
            },
            "1": {
                x: 16.017,
                y: 16.017,
                sx: 0.567,
                sy: 0.567
            },
            "2": {
                x: 16,
                y: 16,
                sx: 0.133,
                sy: 0.133
            }
        });
    }
    }

    data.stage = data.lib.tween_scale_uniform;

	}
};

module.exports = data;
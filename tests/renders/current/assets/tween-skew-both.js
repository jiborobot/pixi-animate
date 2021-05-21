const data = {
	stage: null,
    background: 0xffffff,
    width: 32,
    height: 32,
    framerate: 24,
    totalFrames: 3,
	assets: {
        "tween_skew_both": "images/tween_skew_both.shapes.json"
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
            .drawCommands(data.shapes.tween_skew_both[0]);
        this.addTimedChild(instance1);
    }
    }

    data.lib.tween_skew_both = class extends MovieClip {
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
                sy: 1,
                kx: 0,
                ky: 0
            },
            "1": {
                x: 15.988,
                y: 15.979,
                sx: 1.047,
                sy: 1.008,
                kx: -0.109,
                ky: -0.084
            },
            "2": {
                x: 16,
                y: 16,
                sx: 1.095,
                sy: 1.016,
                kx: -0.219,
                ky: -0.172
            }
        });
    }
    }

    data.stage = data.lib.tween_skew_both;

	}
};

module.exports = data;
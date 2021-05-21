const data = {
	stage: null,
    background: 0xffffff,
    width: 32,
    height: 32,
    framerate: 24,
    totalFrames: 3,
	assets: {
        "tween_normal_advanced": "images/tween_normal_advanced.shapes.json"
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
            .drawCommands(data.shapes.tween_normal_advanced[0]);
        this.addTimedChild(instance1);
    }
    }

    data.lib.tween_normal_advanced = class extends MovieClip {
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
                c: [
                    1,
                    0,
                    1,
                    0,
                    1,
                    0
                ]
            },
            "1": {
                c: [
                    0.78,
                    0.38,
                    0.13,
                    0.35,
                    0.78,
                    0.5
                ]
            },
            "2": {
                c: [
                    0.55,
                    0.76, -0.74,
                    0.69,
                    0.55,
                    1
                ]
            }
        });
    }
    }

    data.stage = data.lib.tween_normal_advanced;

	}
};

module.exports = data;
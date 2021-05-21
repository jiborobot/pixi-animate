const data = {
	stage: null,
    background: 0xffffff,
    width: 32,
    height: 32,
    framerate: 24,
    totalFrames: 2,
	assets: {
        "graphic_loop": "images/graphic_loop.shapes.json"
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
        super({ mode: mode, duration: 2, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.graphic_loop[0]);
        this.addTimedChild(instance1, 0, 2, {
            "0": {
                x: 0,
                y: 0
            },
            "1": {
                x: 4,
                y: 4
            }
        });
    }
    }

    data.lib.graphic_loop = class extends MovieClip {
    constructor() {
        super({
            duration: 2,
            framerate: 24
        });
        const instance1 = new Graphic1(MovieClip.SYNCHED)
            .setTransform(16, 16);
        this.addTimedChild(instance1);
    }
    }

    data.stage = data.lib.graphic_loop;

	}
};

module.exports = data;
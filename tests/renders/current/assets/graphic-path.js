const data = {
	stage: null,
    background: 0xffffff,
    width: 32,
    height: 32,
    framerate: 24,
    totalFrames: 3,
	assets: {
        "graphic_path": "images/graphic_path.shapes.json"
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
            .drawCommands(data.shapes.graphic_path[0]);
        this.addTimedChild(instance1);
    }
    }

    data.lib.graphic_path = class extends MovieClip {
    constructor() {
        super({
            duration: 3,
            framerate: 24
        });
        const instance1 = new Graphic1(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 8,
                y: 8,
                sx: 0.333,
                sy: 0.333
            },
            "1": {
                x: 15.6,
                y: 24.35
            },
            "2": {
                x: 26.95,
                y: 8
            }
        });
    }
    }

    data.stage = data.lib.graphic_path;

	}
};

module.exports = data;
const data = {
	stage: null,
    background: 0xffffff,
    width: 32,
    height: 32,
    framerate: 24,
    totalFrames: 2,
	assets: {
        "graphic_singleframe": "images/graphic_singleframe.shapes.json"
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
            .drawCommands(data.shapes.graphic_singleframe[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic2 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 2, loop: false });
        const instance1 = new Graphic1(MovieClip.SYNCHED)
            .setTransform(-2, -2);
        this.addTimedChild(instance1);
    }
    }

    data.lib.graphic_singleframe = class extends MovieClip {
    constructor() {
        super({
            duration: 2,
            framerate: 24
        });
        const instance1 = new Graphic2(MovieClip.SYNCHED)
            .setTransform(16, 16);
        this.addTimedChild(instance1);
    }
    }

    data.stage = data.lib.graphic_singleframe;

	}
};

module.exports = data;
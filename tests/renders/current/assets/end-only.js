const data = {
	stage: null,
    background: 0xffffff,
    width: 32,
    height: 32,
    framerate: 24,
    totalFrames: 2,
	assets: {
        "end_only": "images/end_only.shapes.json"
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
    const Container = animate.Container;
    const Graphics = animate.Graphics;

    data.lib.Graphic1 = class extends Container {
    constructor() {
        super();
        const instance1 = new Graphics()
            .drawCommands(data.shapes.end_only[0]);
        this.addChild(instance1);
    }
    }

    data.lib.end_only = class extends MovieClip {
    constructor() {
        super({
            duration: 2,
            framerate: 24
        });
        const instance1 = new data.lib.Graphic1()
            .setTransform(16, 16);
        this.addTimedChild(instance1, 1, 1);
    }
    }

    data.stage = data.lib.end_only;

	}
};

module.exports = data;
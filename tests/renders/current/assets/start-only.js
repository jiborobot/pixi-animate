const data = {
	stage: null,
    background: 0xffffff,
    width: 32,
    height: 32,
    framerate: 24,
    totalFrames: 2,
	assets: {
        "start_only": "images/start_only.shapes.json"
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
            .drawCommands(data.shapes.start_only[0]);
        this.addChild(instance1);
    }
    }

    data.lib.start_only = class extends MovieClip {
    constructor() {
        super({
            duration: 2,
            framerate: 24
        });
        const instance1 = new data.lib.Graphic1();
        this.addTimedChild(instance1, 0, 1, {
            "0": {
                x: 16,
                y: 16
            }
        });
    }
    }

    data.stage = data.lib.start_only;

	}
};

module.exports = data;
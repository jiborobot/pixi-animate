const data = {
	stage: null,
    background: 0xffffff,
    width: 32,
    height: 32,
    framerate: 24,
    totalFrames: 3,
	assets: {
        "no_start_end": "images/no_start_end.shapes.json"
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
            .drawCommands(data.shapes.no_start_end[0]);
        this.addChild(instance1);
    }
    }

    data.lib.no_start_end = class extends MovieClip {
    constructor() {
        super({
            duration: 3,
            framerate: 24
        });
        const instance1 = new data.lib.Graphic1();
        this.addTimedChild(instance1, 1, 1, {
            "1": {
                x: 16,
                y: 16
            }
        });
    }
    }

    data.stage = data.lib.no_start_end;

	}
};

module.exports = data;
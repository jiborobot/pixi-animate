const data = {
	stage: null,
    background: 0xffffff,
    width: 32,
    height: 32,
    framerate: 24,
    totalFrames: 2,
	assets: {
        "visible": "images/visible.shapes.json"
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

    data.lib.graphic = class extends Container {
    constructor() {
        super();
        const instance1 = new Graphics()
            .drawCommands(data.shapes.visible[0]);
        this.addChild(instance1);
    }
    }

    data.lib.visible = class extends MovieClip {
    constructor() {
        super({
            duration: 2,
            framerate: 24
        });
        const instance1 = new data.lib.graphic();
        this.addTimedChild(instance1, 0, 2, {
            "0": {
                x: 16,
                y: 16,
                v: 1
            },
            "1": {
                v: 0
            }
        });
    }
    }

    data.stage = data.lib.visible;

	}
};

module.exports = data;
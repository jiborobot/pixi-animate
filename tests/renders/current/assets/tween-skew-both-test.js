const data = {
	stage: null,
    background: 0xffffff,
    width: 32,
    height: 32,
    framerate: 24,
    totalFrames: 1,
	assets: {
        "tween_skew_both_test": "images/tween_skew_both_test.shapes.json"
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
            .drawCommands(data.shapes.tween_skew_both_test[0]);
        this.addChild(instance1);
    }
    }

    data.lib.tween_skew_both_test = class extends MovieClip {
    constructor() {
        super({
            duration: 1,
            framerate: 24
        });
        const instance1 = new data.lib.Graphic1()
            .setTransform(16, 16, 1.047, 1.008, 0, -0.109, -0.084);
        this.addChild(instance1);
    }
    }

    data.stage = data.lib.tween_skew_both_test;

	}
};

module.exports = data;
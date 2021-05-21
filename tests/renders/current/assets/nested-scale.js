const data = {
	stage: null,
    background: 0xffffff,
    width: 32,
    height: 32,
    framerate: 24,
    totalFrames: 1,
	assets: {
        "nested_scale": "images/nested_scale.shapes.json"
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
            .drawCommands(data.shapes.nested_scale[0]);
        this.addChild(instance1);
    }
    }

    data.lib.Graphic2 = class extends Container {
    constructor() {
        super();
        const instance1 = new data.lib.Graphic1()
            .setTransform(0, 0, 0.6, 0.6);
        this.addChild(instance1);
    }
    }

    data.lib.Graphic3 = class extends Container {
    constructor() {
        super();
        const instance1 = new data.lib.Graphic2()
            .setTransform(0, 0, 1.2, 1.2);
        this.addChild(instance1);
    }
    }

    data.lib.nested_scale = class extends MovieClip {
    constructor() {
        super({
            duration: 1,
            framerate: 24
        });
        const instance1 = new data.lib.Graphic3()
            .setTransform(16, 16, 0.75, 0.75);
        this.addChild(instance1);
    }
    }

    data.stage = data.lib.nested_scale;

	}
};

module.exports = data;
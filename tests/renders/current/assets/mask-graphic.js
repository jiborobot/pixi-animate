const data = {
	stage: null,
    background: 0xffffff,
    width: 32,
    height: 32,
    framerate: 30,
    totalFrames: 1,
	assets: {
        "mask_graphic": "images/mask_graphic.shapes.json"
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
            .drawCommands(data.shapes.mask_graphic[0]);
        this.addChild(instance1);
    }
    }

    data.lib.mask_graphic = class extends MovieClip {
    constructor() {
        super({
            duration: 1,
            framerate: 30
        });
        const instance1 = new data.lib.Graphic1()
            .setRenderable(false)
            .setTransform(10.5, 10.5)
            .setColorTransform(1, 0, 1, 0, 1, 0);
        const instance2 = new Graphics()
            .drawCommands(data.shapes.mask_graphic[1])
            .setMask(instance1);
        this.addChild(instance1, instance2);
    }
    }

    data.stage = data.lib.mask_graphic;

	}
};

module.exports = data;
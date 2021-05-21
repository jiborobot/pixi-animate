const data = {
	stage: null,
    background: 0xffffff,
    width: 32,
    height: 32,
    framerate: 30,
    totalFrames: 1,
	assets: {
        "mask_primitive": "images/mask_primitive.shapes.json"
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

    data.lib.mask_primitive = class extends MovieClip {
    constructor() {
        super({
            duration: 1,
            framerate: 30
        });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.mask_primitive[0])
            .setRenderable(false)
            .setTransform(-13.1, -8);
        const instance2 = new Graphics()
            .drawCommands(data.shapes.mask_primitive[1])
            .setMask(instance1);
        this.addChild(instance1, instance2);
    }
    }

    data.stage = data.lib.mask_primitive;

	}
};

module.exports = data;
const data = {
	stage: null,
    background: 0xffffff,
    width: 32,
    height: 32,
    framerate: 30,
    totalFrames: 3,
	assets: {
        "mask": "images/mask.shapes.json"
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

    data.lib.mask = class extends MovieClip {
    constructor() {
        super({
            duration: 3,
            framerate: 30
        });
        const instance2 = new Graphics()
            .drawCommands(data.shapes.mask[1])
            .setRenderable(false);
        const instance3 = new Graphics()
            .drawCommands(data.shapes.mask[2])
            .setRenderable(false);
        const instance1 = new Graphics()
            .drawCommands(data.shapes.mask[0]);
        this.addTimedChild(instance2, 1, 1)
            .addTimedChild(instance3, 2, 1)
            .addTimedMask(instance1, {
                "1": instance2,
                "2": instance3
            })
            .addTimedChild(instance1);
    }
    }

    data.stage = data.lib.mask;

	}
};

module.exports = data;
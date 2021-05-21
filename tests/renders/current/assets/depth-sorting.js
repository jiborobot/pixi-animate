const data = {
	stage: null,
    background: 0xffffff,
    width: 32,
    height: 32,
    framerate: 24,
    totalFrames: 1,
	assets: {
        "depth_sorting": "images/depth_sorting.shapes.json"
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

    data.lib.depth_sorting = class extends MovieClip {
    constructor() {
        super({
            duration: 1,
            framerate: 24
        });
        const instance3 = new Graphics()
            .drawCommands(data.shapes.depth_sorting[2]);
        const instance2 = new Graphics()
            .drawCommands(data.shapes.depth_sorting[1]);
        const instance1 = new Graphics()
            .drawCommands(data.shapes.depth_sorting[0]);
        this.addChild(instance3, instance2, instance1);
    }
    }

    data.stage = data.lib.depth_sorting;

	}
};

module.exports = data;
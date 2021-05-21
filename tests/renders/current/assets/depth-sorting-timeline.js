const data = {
	stage: null,
    background: 0xffffff,
    width: 32,
    height: 32,
    framerate: 24,
    totalFrames: 3,
	assets: {
        "depth_sorting_timeline": "images/depth_sorting_timeline.shapes.json"
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

    data.lib.depth_sorting_timeline = class extends MovieClip {
    constructor() {
        super({
            duration: 3,
            framerate: 24
        });
        const instance2 = new Graphics()
            .drawCommands(data.shapes.depth_sorting_timeline[1]);
        const instance3 = new Graphics()
            .drawCommands(data.shapes.depth_sorting_timeline[2]);
        const instance1 = new Graphics()
            .drawCommands(data.shapes.depth_sorting_timeline[0]);
        this.addTimedChild(instance2, 1, 2)
            .addTimedChild(instance3, 2, 1)
            .addTimedChild(instance1);
    }
    }

    data.stage = data.lib.depth_sorting_timeline;

	}
};

module.exports = data;
const data = {
	stage: null,
    background: 0xffffff,
    width: 32,
    height: 32,
    framerate: 24,
    totalFrames: 3,
	assets: {
        "tween_nested_graphics": "images/tween_nested_graphics.shapes.json"
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

    const Graphic1 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_graphics[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic2 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic1(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    }
    }

    const Graphic3 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic2(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    }
    }

    const Graphic4 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic3(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    }
    }

    const Graphic5 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic4(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                y: 0
            },
            "1": {
                y: 7.35
            },
            "2": {
                y: 14.7
            }
        });
    }
    }

    data.lib.tween_nested_graphics = class extends MovieClip {
    constructor() {
        super({
            duration: 3,
            framerate: 24
        });
        const instance1 = new Graphic5(MovieClip.SYNCHED)
            .setTransform(16, 16);
        this.addTimedChild(instance1);
    }
    }

    data.stage = data.lib.tween_nested_graphics;

	}
};

module.exports = data;
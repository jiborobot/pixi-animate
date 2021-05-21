const data = {
    stage: null,
    background: 0xffffff,
    width: 32,
    height: 32,
    framerate: 24,
    totalFrames: 1,
    assets: {
        "actions": "images/actions.shapes.json"
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
    setup: function (animate) {
        const MovieClip = animate.MovieClip;
        const Graphics = animate.Graphics;

        data.lib.actions = class extends MovieClip {
            constructor() {
                super({
                    duration: 1,
                    framerate: 24
                });
                const instance1 = new Graphics()
                    .drawCommands(data.shapes.actions[0]);
                this.addChild(instance1);
                this.addAction(function () {
                    this.emit('actionsWork');
                }, 0);
            }
        }

        data.stage = data.lib.actions;
    }
};

module.exports = data;
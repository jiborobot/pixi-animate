describe('Renders - Legacy asset format', function ()
{
    before(function ()
    {
        PIXI.utils.skipHello();
        const Renderer = require('./renderer');
        const webgl = this.webgl = document.createElement('canvas');
        const canvas = this.canvas = document.createElement('canvas');

        document.body.appendChild(webgl);
        document.body.appendChild(canvas);
        this.renderer = new Renderer(webgl, canvas);
        this.validate = function (id, tolerance, done)
        {
            if (typeof tolerance === 'function')
            {
                done = tolerance;
                tolerance = Renderer.TOLERANCE;
            }
            // Override the tolerance
            const path = require('path');
            const solution = path.resolve(__dirname, '..', 'solutions', `${id}.json`);
            const fla = path.join(__dirname, 'assets', `${id}.js`);

            this.renderer.imagediff.tolerance = tolerance;
            this.renderer.compare(fla, require(solution), function (err, success)
            {
                if (err)
                {
                    done(err.message);

                    return;
                }
                done(success ? undefined : 'Render not successful');
            });
        };

        this.getInstance = function (id, done)
        {
            const path = require('path');
            const file = path.join(__dirname, 'assets', `${id}.js`);

            delete require.cache[path.resolve(file)];
            const fla = require(file);

            PIXI.animate.load(fla.stage, {
                complete: done,
                basePath: path.join(__dirname, 'assets'),
                createInstance: true,
            });
        };
    });

    beforeEach(function ()
    {
        this.renderer.clear();
    });

    after(function ()
    {
        this.webgl.parentNode.removeChild(this.webgl);
        this.canvas.parentNode.removeChild(this.canvas);
        this.webgl = null;
        this.canvas = null;
        this.renderer = null;
        this.getInstance = null;
        this.validate = null;
    });

    // -------------- Tests begin here --------------

    it('should render advanced color', function (done)
    {
        this.validate('advanced-color', done);
    });

    it('should render an alpha', function (done)
    {
        this.validate('alpha', done);
    });

    it('should render a bitmap', function (done)
    {
        this.validate('bitmap', done);
    });

    // it('should render a bitmap mask', function(done){
    //     this.validate('bitmap-mask', done);
    // });
    //
    // it('should render a bitmap mask with transparency', function(done){
    //     this.validate('bitmap-mask-transparent', done);
    // });

    it('should render a bitmap inside a symbol', function (done)
    {
        this.validate('bitmap-symbol', done);
    });

    it('should render brightness', function (done)
    {
        this.validate('brightness', done);
    });

    it('should render depth sorting (single frame)', function (done)
    {
        this.validate('depth-sorting', done);
    });

    it('should render depth sorting over the timeline', function (done)
    {
        this.validate('depth-sorting-timeline', done);
    });

    it('should render end-of-timeline only', function (done)
    {
        this.validate('end-only', done);
    });

    it('should render a graphic', function (done)
    {
        this.validate('graphic', done);
    });

    it('should render a graphic set to "loop"', function (done)
    {
        this.validate('graphic-loop', done);
    });

    it('should render a graphic animating on a path', function (done)
    {
        this.validate('graphic-path', done);
    });

    it('should render a graphic set to "play once"', function (done)
    {
        this.validate('graphic-playonce', done);
    });

    it('should render a graphic set to "single frame"', function (done)
    {
        this.validate('graphic-singleframe', done);
    });

    it('should render a hole', function (done)
    {
        this.validate('hole', done);
    });

    // it('should render a graphic mask', function(done){
    //     this.validate('mask-graphic', done);
    // });
    //
    // it('should render a movie clip mask', function(done){
    //     this.validate('mask-movieclip', done);
    // });
    //
    // it('should render a tweened mask inside a symbol', function(done){
    //     this.validate('mask-nested-tween', done);
    // });

    it('should render a mask inside a symbol', function (done)
    {
        this.validate('mask-nested', done);
    });

    // it('should render a tweened mask', function(done){
    //     this.validate('mask-tween', done);
    // });

    it('should render a mask', function (done)
    {
        this.validate('mask', done);
    });

    it('should render a shape primitive mask', function (done)
    {
        this.validate('mask-primitive', done);
    });

    it('should render a nested mixed transformation (scale/skew/rotate)', function (done)
    {
        this.validate('nested-mixed-transform', done);
    });

    it('should render a nested rotation', function (done)
    {
        this.validate('nested-rotate', done);
    });

    it('should render a nested scale', function (done)
    {
        this.validate('nested-scale', done);
    });

    it('should render a nested skew', function (done)
    {
        this.validate('nested-skew', 0.05, done);
    });

    it('should render only the middle of the timeline', function (done)
    {
        this.validate('no-start-end', done);
    });

    it('should render only the start of the timeline', function (done)
    {
        this.validate('start-only', done);
    });

    // it('should render text', function(done){
    //     this.validate('text', done);
    // });

    it('should render a tint', function (done)
    {
        this.validate('tint', done);
    });

    it('should render a tween from alpha to tint', function (done)
    {
        this.validate('tween-alpha-tint', done);
    });

    it('should render a nested graphics tween', function (done)
    {
        this.validate('tween-nested-graphics', done);
    });

    it('should render a nested movieclip tween', function (done)
    {
        this.validate('tween-nested-movieclip', done);
    });

    it('should render multiple instances of a nested tween', function (done)
    {
        this.validate('tween-nested-multiple-instances', done);
    });

    it('should render a tween from normal to advanced color', function (done)
    {
        this.validate('tween-normal-advanced', done);
    });

    it('should render a tween from normal to alpha', function (done)
    {
        this.validate('tween-normal-alpha', done);
    });

    it('should render a tween from normal to brightness', function (done)
    {
        this.validate('tween-normal-brightness', done);
    });

    it('should render a tween from normal to tint', function (done)
    {
        this.validate('tween-normal-tint', done);
    });

    it('should render a rotating tween', function (done)
    {
        this.validate('tween-rotate', done);
    });

    it('should render a tween scaling uniformly', function (done)
    {
        this.validate('tween-scale-uniform', done);
    });

    it('should render a tween scaling horizontally', function (done)
    {
        this.validate('tween-scale-x', done);
    });

    it('should render a tween scaling vertically', function (done)
    {
        this.validate('tween-scale-y', done);
    });

    it('should render a tween skewing x and y', function (done)
    {
        this.validate('tween-skew-both', 0.06, done);
    });

    it('should render a tween skewing horizontally', function (done)
    {
        this.validate('tween-skew-x', done);
    });

    it('should render a tween skewing vertically', function (done)
    {
        this.validate('tween-skew-y', 0.05, done);
    });

    it('should render a tween from one tint to another', function (done)
    {
        this.validate('tween-tint-tint', done);
    });

    it('should render a tween along both x and y axes', function (done)
    {
        this.validate('tween-x-y', done);
    });

    it('should render a horizontal tween', function (done)
    {
        this.validate('tween-x', done);
    });

    it('should render a vertical tween', function (done)
    {
        this.validate('tween-y', done);
    });

    it('should render visibility toggling on/off', function (done)
    {
        this.validate('visible', done);
    });

    it('should work for actions', function (done)
    {
        this.getInstance('actions', (instance) =>
        {
            instance.once('actionsWork', () =>
            {
                done();
            });
            this.renderer.stage.addChild(instance);
            instance.play();
        });
    });

    it('should work for named instances', function (done)
    {
        this.getInstance('named-instance', (instance) =>
        {
            assert(instance.example, 'Missing named instance');
            done();
        });
    });
});

const animate = require('../..');
const { Container } = require('pixi.js');

describe('MovieClip', function ()
{
    const MovieClip = animate.MovieClip;

    it('should exist', function ()
    {
        assert.isOk(MovieClip);
    });
    it('should be extendable', function ()
    {
        assert.isOk(MovieClip);
        assert.isOk(Container);
        const clip = new MovieClip();

        assert.isOk(clip instanceof Container);
        assert.isOk(clip instanceof animate.Container);
    });
});

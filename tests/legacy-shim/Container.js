const extendable = require('./extendable');

describe('Container', function ()
{
    it('should override base', function ()
    {
        assert.equal(PIXI.Container, PIXI.animate.Container);
    });

    it('should be extendable', function ()
    {
        extendable(PIXI.Container);
    });
});

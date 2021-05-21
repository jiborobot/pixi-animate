const extendable = require('./extendable');

describe('Sprite', function ()
{
    it('should override base', function ()
    {
        assert.equal(PIXI.Sprite, PIXI.animate.Sprite);
    });

    it('should be extendable', function ()
    {
        extendable(PIXI.Sprite);
    });
});

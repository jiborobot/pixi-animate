describe('Graphics', function ()
{
    it('should override base', function ()
    {
        assert.equal(PIXI.Graphics, PIXI.animate.Graphics);
    });

    it('should have addHole', function ()
    {
        assert.isOk(PIXI.Graphics.prototype.addHole);
        assert.equal(PIXI.Graphics.prototype.h, PIXI.Graphics.prototype.addHole);
    });
});

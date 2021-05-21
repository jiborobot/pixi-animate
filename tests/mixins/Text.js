const { Text } = require('../..');

describe('Text', function ()
{
    it('should have DisplayObject shortened names', function ()
    {
        const p = new Text();

        assert.isOk(p.setRenderable);
        assert.isOk(p.re);
        assert.equal(p.setRenderable, p.re);
        assert.isOk(p.t);
        assert.equal(p.setTransform, p.t);
        assert.isOk(p.ma);
        assert.isOk(p.setMask);
        assert.equal(p.setMask, p.ma);
        assert.isOk(p.a);
        assert.isOk(p.setAlpha);
        assert.equal(p.setAlpha, p.a);
        assert.isOk(p.i);
        assert.isOk(p.setTint);
        assert.equal(p.setTint, p.i);
        assert.isOk(p.c);
        assert.isOk(p.setColorTransform);
        assert.equal(p.setColorTransform, p.c);
    });
    it('should have shortened names', function ()
    {
        const p = new Text();

        assert.isOk(p.setStyle);
        assert.isOk(p.ss);
        assert.equal(p.setStyle, p.ss);
        assert.isOk(p.setAlign);
        assert.isOk(p.g);
        assert.equal(p.setAlign, p.g);
        assert.isOk(p.setShadow);
        assert.isOk(p.sh);
        assert.equal(p.setShadow, p.sh);
    });
});

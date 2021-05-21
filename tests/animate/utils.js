const animate = require('../..');

describe('utils', function ()
{
    it('should convert shortened hex strings', function ()
    {
        const color = animate.utils.hexToUint('#fc9');

        assert.equal(parseInt(color, 10), 0xffcc99);
        assert.equal(color, 0xffcc99);
    });
    it('should handle long strings', function ()
    {
        const color = animate.utils.hexToUint('#ffcc99');

        assert.equal(color, 0xffcc99);
    });
    it('should convert keyframes', function ()
    {
        const result = animate.utils.deserializeKeyframes('0X-55.05Y-361.05A1B1T#fffF1,2,3 1Y-360.2 2Y-357.6 3Y-353.25');

        assert.equal(typeof result, 'object');
        assert.equal(Object.keys(result).length, 4);
        assert.equal(result['0'].x, -55.05);
        assert.equal(result['0'].y, -361.05);
        assert.equal(result['0'].sx, 1);
        assert.equal(result['0'].sy, 1);
        assert.equal(result['0'].t, '#fff');
        assert(Array.isArray(result['0'].c));
        assert.equal(result['0'].c.length, 3);
        assert.equal(result['0'].c[0], 1);
        assert.equal(result['1'].y, -360.2);
        assert.equal(result['2'].y, -357.6);
        assert.equal(result['3'].y, -353.25);
    });

    it('should convert keyframes with tweens', function ()
    {
        const result = animate.utils.deserializeKeyframes('0X-55.05Y-361.05A1B1T#fffF1,2,3WD2E-1Quadratic;PY-360.2 2WD5PY-357.6 7WD3E0.8Cubic;PY-353.25');

        assert.equal(typeof result, 'object');
        assert.equal(Object.keys(result).length, 3);
        assert.equal(result['0'].x, -55.05);
        assert.equal(result['0'].y, -361.05);
        assert.equal(result['0'].sx, 1);
        assert.equal(result['0'].sy, 1);
        assert.equal(result['0'].t, '#fff');
        assert(Array.isArray(result['0'].c));
        assert.equal(result['0'].c.length, 3);
        assert.equal(result['0'].c[0], 1);
        assert.equal(result['0'].tw.d, 2);
        assert.equal(result['0'].tw.e.s, -1);
        assert.equal(result['0'].tw.e.n, 'Quadratic');
        assert.equal(result['0'].tw.p.y, -360.2);
        assert.equal(result['2'].tw.d, 5);
        assert.equal(result['2'].tw.e, undefined);
        assert.equal(result['2'].tw.p.y, -357.6);
        assert.equal(result['7'].tw.d, 3);
        assert.equal(result['7'].tw.e.s, 0.8);
        assert.equal(result['7'].tw.e.n, 'Cubic');
        assert.equal(result['7'].tw.p.y, -353.25);
    });

    it('should fill frames', function ()
    {
        const timeline = [];

        animate.utils.fillFrames(timeline, 3, 10);
        assert.equal(timeline.length, 13);
        assert.equal(timeline[0], false);
        assert.equal(timeline[1], false);
        assert.equal(timeline[2], false);
        assert.equal(timeline[3], true);
        assert.equal(timeline[12], true);
    });

    it('should deserialize shapes', function ()
    {
        const shapes = 'f #000 1 m 185.5 59.75 l 180.65 74.1 '
            + 'l 192.85 83.15 l 205.2 74.3 l 200.65 59.85 l 185.5 59.75 c\n'
            + 'f #000 1 m 184 61 l 184 79.5 l 202.5 79.5 l 202.5 61 l 184 61 c';
        const items = animate.utils.deserializeShapes(shapes);

        assert(items);
        assert(Array.isArray(items));
        assert.equal(items.length, 2);
        assert(Array.isArray(items[0]));
        assert.equal(items[0].length, 22);
        assert(Array.isArray(items[1]));
        assert.equal(items[1].length, 19);
    });
});

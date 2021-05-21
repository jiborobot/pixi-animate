describe('ShapesCache', function ()
{
    const ShapesCache = PIXI.animate.ShapesCache;

    it('should exist', function ()
    {
        assert.isOk(ShapesCache);
    });

    // in library use of ShapesCache.add isn't used - the laoder just runs the add() code directly
    // it('should add shapes to cache', function() {
    //     var commands = [[
    //         "f", "#003fcc", 1,
    //         "m", 363.05, 287.3,
    //         "l", 431.2, 208.5,
    //         "l", 377.4, 119.35,
    //         "l", 275.95, 143,
    //         "l", 267.05, 246.75,
    //         "l", 363.05, 287.3,
    //         "c"
    //     ]];
    //     ShapesCache.add('TestShape2', commands);
    //     assert.isOk(ShapesCache.TestShape2);
    //     assert.equal(ShapesCache.TestShape2, commands);
    //     assert.equal(ShapesCache.fromCache('TestShape2'), commands);
    //     ShapesCache.removeAll();
    // });
});

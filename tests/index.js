global.assert = require('chai').assert;
// setup for bundle inclusion (the legacy require)
global.PIXI = require('pixi.js-legacy');
// assigning here because builds in /dist/ are designed for <script> inclusion, not require().
global.PIXI = require('../dist/pixi-animate-legacy').PIXI;

describe('PIXI', function ()
{
    describe('subclasses', function ()
    {
        require('./mixins/Container');
        require('./mixins/Graphics');
        require('./mixins/Sprite');
        require('./mixins/Text');
    });

    describe('animate', function ()
    {
        require('./animate/load');
        require('./animate/MovieClip');
        require('./animate/Timeline');
        require('./animate/Tween');
        require('./animate/utils');
    });

    describe('legacy shim', function ()
    {
        require('./legacy-shim/Container');
        require('./legacy-shim/Graphics');
        require('./legacy-shim/Sprite');
        require('./legacy-shim/Text');
        require('./legacy-shim/ShapesCache');
    });
});

const renders = document.createElement('div');

renders.id = 'renders-failed';
document.body.appendChild(renders);

require('./renders/legacy');
require('./renders/current');

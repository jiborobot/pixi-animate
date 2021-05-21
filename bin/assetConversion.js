#!/usr/bin/env node

/* eslint-disable no-console, newline-after-var, camelcase, prefer-template */
const fs = require('fs');
const path = require('path');

const files = process.argv.slice(2);

const MODE_COMMONJS = 'CJS';
const MODE_ES6 = 'ES6';
const MODE_ES6_AUTORUN = 'ES6_A';
let moduleMode = MODE_COMMONJS;

for (let file of files)
{
    if (file === '-h')
    {
        console.log(`Usage: pixi-animate-upgrade <mode> path/to/file1.js path/to/file2.js

Modes:
    -c (Default) CommonJS/Node style export
    -e ES6 style export (export default)
    -a ES6 style export with auto import of pixi-animate and run of setup(), exports library items as well as the default.
`);

        return;
    }
    else if (file === '-e')
    {
        moduleMode = MODE_ES6;
        continue;
    }
    else if (file === '-c')
    {
        moduleMode = MODE_COMMONJS;
        continue;
    }
    else if (file === '-a')
    {
        moduleMode = MODE_ES6_AUTORUN;
        continue;
    }
    if (!path.isAbsolute(file))
    {
        file = path.resolve(process.cwd(), file);
    }
    let orig;
    try
    {
        orig = fs.readFileSync(file, 'utf8');
    }
    catch (e)
    {
        console.log(e.message);
        continue;
    }

    const libSetup = (/\(function \(([^)]+)\) {((?:.|[\n\r])+)}\)\(/m).exec(orig);
    /* LIB ARGS (Match 1):
    PIXI, lib
    */
    /* LIB SETUP (Match 2) (mandatory):

        var MovieClip = PIXI.animate.MovieClip;
        var Graphics = PIXI.Graphics;
        var shapes = PIXI.animate.ShapesCache;

        var Graphic1 = MovieClip.extend(function (mode) {
            MovieClip.call(this, { mode: mode, duration: 2, loop: false });
            var instance1 = new Graphics()
                .drawCommands(shapes.graphic_singleframe[0]);
            this.addTimedChild(instance1);
        });

        var Graphic2 = MovieClip.extend(function (mode) {
            MovieClip.call(this, { mode: mode, duration: 2, loop: false });
            var instance1 = new Graphic1(MovieClip.SYNCHED)
                .setTransform(-2, -2);
            this.addTimedChild(instance1);
        });

        lib.graphic_singleframe = MovieClip.extend(function () {
            MovieClip.call(this, {
                duration: 2,
                framerate: 24
            });
            var instance1 = new Graphic2(MovieClip.SYNCHED)
                .setTransform(16, 16);
            this.addTimedChild(instance1);
        });

        lib.graphic_singleframe.assets = {
            "graphic_singleframe": "images/graphic_singleframe.shapes.json"
        };
    */
    if (!libSetup)
    {
        console.log(`Unable to parse library setup method from ${file}`);
        continue;
    }

    const [arg_PIXI, arg_lib] = libSetup[1].split(', ');
    let foundAssets = new RegExp(`${arg_lib}\\.([a-zA-Z_$0-9]+)\\.assets = ({[^}]*});`).exec(orig);
    if (!foundAssets)
    {
        console.log('Warning: Unable to parse library assets (and which item is the stage) from ' + file);
        console.log('You will need to ensure correct loading of assets and stage instantiation.');
        console.log('At any point before instantiation, you will need to overwrite \'getTexture\' on the asset data with \'Texture.fromFrame\' from PixiJS\'s Texture class');
        foundAssets = [null, null, null];
    }
    const [fullAssetSetup, stageName, assets] = foundAssets;

    /* STAGE DATA (optional):
    module.exports = {
        stage: lib.graphic_singleframe,
        background: 0xffffff,
        width: 32,
        height: 32,
        framerate: 24,
        totalFrames: 2,
        library: lib
    };
    */
    const stageData = (/module\.exports = {([^}]+)};/m).exec(orig);
    let data = `const data = {
    stage: null,
`;
    // if we are doing an autorun, then we need to put that at the top
    if (moduleMode === MODE_ES6_AUTORUN)
    {
        data = 'import animate from \'pixi-animate\';\n' + data;
    }
    if (stageData)
    {
        data += stageData[1].trim().split(/[\n\r]+/)
            .map((s) => s.trim())
            .filter((s) => !s.startsWith('stage') && !s.startsWith('library'))
            .map((s) => '    ' + s)
            .join('\n') + '\n';
    }
    else
    {
        data += `    background: 0x000000,
    width: 0,
    height: 0,
    framerate: 24,
    totalFrames: 1,
`;
    }
    data += `    assets: ${assets || '{}'},
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
`;
    let setup = libSetup[2];
    if (fullAssetSetup && stageName)
    {
        // replace assets setup with stage reference setup
        setup = setup.replace(fullAssetSetup, `data.stage = data.lib.${stageName};`);
    }
    // remove the shapes cache variable, if present
    setup = setup.replace(new RegExp(`^\\s+var shapes = ${arg_PIXI}\\.animate\\.ShapesCache;\\r?\\n?`, 'm'), '');
    // remove the fromFrame variable, if present
    setup = setup.replace(new RegExp(`^\\s+var fromFrame = ${arg_PIXI}\\.Texture\\.fromFrame;\\r?\\n?`, 'm'), '');
    // replace MovieClip variable
    setup = setup.replace(new RegExp(`${arg_PIXI}\\.animate.MovieClip`), 'animate.MovieClip');
    // replace Container variable
    setup = setup.replace(new RegExp(`${arg_PIXI}\\.Container`), 'animate.Container');
    // replace Sprite variable
    setup = setup.replace(new RegExp(`${arg_PIXI}\\.Sprite`), 'animate.Sprite');
    // replace Text variable
    setup = setup.replace(new RegExp(`${arg_PIXI}\\.Text`), 'animate.Text');
    // replace Graphics variable
    setup = setup.replace(new RegExp(`${arg_PIXI}\\.Graphics`), 'animate.Graphics');
    // fix lib usage
    setup = setup.replace(new RegExp(`(\\s)(${arg_lib})(?=\\.)`, 'g'), '$1data.lib');
    // fix shapes usage
    setup = setup.replace(new RegExp(`(\\W)(shapes)(?=\\.)`, 'g'), '$1data.shapes');
    // fix fromFrame usage
    setup = setup.replace(new RegExp(`(\\W)(fromFrame)(?=\\()`, 'g'), '$1data.getTexture');
    // list of classes that need to be exported if in MODE_ES6_AUTORUN
    const classList = [];
    // fix MovieClip extension
    const MCFinder = /^([ \t]+)((data\.lib\.|var )[a-zA-Z_$0-9]+ = )MovieClip.extend\(function \(([^)]*)\) {/gm;
    let found = MCFinder.exec(setup);
    while (found)
    {
        const [fullMatch, indent, libItem, libOrVar, args] = found;
        const { index } = found;
        // replace extend() with class declaration & constructor
        setup = setup.replace(fullMatch, `${indent}${libItem}class extends MovieClip {
    ${indent}constructor(${args}) {`);
        // replace super call with real super()
        const superFinder = /MovieClip.call\(this, /;
        superFinder.lastIndex = index;
        setup = setup.replace(superFinder, 'super(');
        // replace the closing of the extend() function with closing of constructor & class
        const endFinder = new RegExp(`^${indent}}\\);`, 'm');
        endFinder.lastIndex = index;
        setup = setup.replace(endFinder, `${indent}}\n${indent}}`);
        // add to class list if not a var
        if (libOrVar === 'data.lib.')
        {
            // extract just the class name
            const [, className] = (/([^. ]+) =/).exec(libItem);
            classList.push(className);
        }
        // find next
        found = MCFinder.exec(setup);
    }
    // fix Container extension
    const ContainerFinder = /^([ \t]+)((data\.lib\.|var )[a-zA-Z_$0-9]+ = )Container.extend\(function \(([^)]*)\) {/gm;
    found = ContainerFinder.exec(setup);
    while (found)
    {
        const [fullMatch, indent, libItem, libOrVar] = found;
        const { index } = found;
        // replace extend() with class declaration & constructor
        setup = setup.replace(fullMatch, `${indent}${libItem}class extends Container {
    ${indent}constructor() {`);
        // replace super call with real super()
        const superFinder = /Container.call\(this/;
        superFinder.lastIndex = index;
        setup = setup.replace(superFinder, 'super(');
        // replace the closing of the extend() function with closing of constructor & class
        const endFinder = new RegExp(`^${indent}}\\);`, 'm');
        endFinder.lastIndex = index;
        setup = setup.replace(endFinder, `${indent}}\n${indent}}`);
        // add to class list if not a var
        if (libOrVar === 'data.lib.')
        {
            // extract just the class name
            const [, className] = (/([^. ]+) =/).exec(libItem);
            classList.push(className);
        }
        // find next
        found = ContainerFinder.exec(setup);
    }
    // replace var with const
    setup = setup.replace(/(\s)(var)(?=\s)/g, '$1const');

    // now insert setup
    data += `    setup: function(animate) {
    ${setup}
    }
`;

    // close data object
    data += '};\n';

    // if in autorun mode, run setup and do individual exports
    if (moduleMode === MODE_ES6_AUTORUN)
    {
        data += 'data.setup(animate);\n';
        for (const className of classList)
        {
            data += `const ${className} = data.lib.${className};
export {${className}};
`;
        }
    }
    // do default export
    data += `
${moduleMode === MODE_COMMONJS ? 'module.exports =' : 'export default'} data;`;

    fs.writeFileSync(file, data, 'utf8');

    // *********************************************
    //       SHAPE UPDATING
    // *********************************************

    // now look at shapes so that we can update them
    const shapeFileFinder = /"([^"]+.shapes.(?:json|txt))"/g;
    let foundShape;
    // eslint-disable-next-line no-cond-assign
    while (foundShape = shapeFileFinder.exec(assets))
    {
        let [, shapeFile] = foundShape;
        if (!path.isAbsolute(shapeFile))
        {
            shapeFile = path.resolve(path.dirname(file), shapeFile);
        }
        let orig;
        try
        {
            orig = fs.readFileSync(shapeFile, 'utf8');
        }
        catch (e)
        {
            console.log(e.message);
            continue;
        }

        let shapeData = null;
        if (shapeFile.endsWith('txt'))
        {
            shapeData = orig.split('\n').map((line) => line.split(' '));
        }
        else if (shapeFile.endsWith('json'))
        {
            shapeData = JSON.parse(orig);
        }
        /* at this point shapeData should be an array of arrays - example:
        [[
            "f", "#345ffa", 1,
            "m", 3, 6,
            "l", 3, 22,
            "l", 19, 22,
            "l", 19, 6,
            "l", 3, 6,
            "c"],
           [
            "f", "#eb34fa", 1,
            "m", 11, 12,
            "l", 11, 28,
            "l", 27, 28,
            "l", 27, 12,
            "l", 11, 12,
            "c"],
           [
            "f", "#060", 1,
            "m", 13, 2,
            "l", 13, 18,
            "l", 29, 18,
            "l", 29, 2,
            "l", 13, 2,
            "c"]]
        */

        if (!Array.isArray(shapeData) || !Array.isArray(shapeData[0]))
        {
            console.log(`Unexpected format for ${shapeFile}`);
            continue;
        }
        // go through the list of shapes/distinct drawing commands
        for (let s = 0; s < shapeData.length; ++s)
        {
            const shape = shapeData[s];
            // go through each individual command
            for (let i = 0; i < shape.length; ++i)
            {
                if (shape[i] === 'c')
                {
                    // if it was the old close path, replace it with the new close path
                    shape[i] = 'cp';
                }
                else if (shape[i] === 'h')
                {
                    // if it was the old addHole, then replace it with endHold and go back to
                    // insert a begin hole
                    shape[i] = 'eh';
                    // start going backwards to find what we need
                    let prevIndex = i - 1;

                    for (; prevIndex >= 0; --prevIndex)
                    {
                        /* eslint-disable max-depth */
                        if (shape[prevIndex] === 'm')
                        {
                            break;
                        }
                        /* eslint-enable max-depth */
                    }
                    // at this point prevIndex is the location of the ending of the shape
                    // before our hole, or -1 if there was somehow nothing but a hole
                    // so we can insert beginHole right after that index
                    shape.splice(prevIndex/* + 1 */, 0, 'bh');
                    // increment i because we inserted a thing earlier into the array
                    ++i;
                }
            }
        }

        let shapeOut = null;
        if (shapeFile.endsWith('txt'))
        {
            shapeOut = shapeData.map((line) => line.join(' ')).join('\n');
        }
        else if (shapeFile.endsWith('json'))
        {
            shapeOut = JSON.stringify(shapeData, null, 2);
        }

        fs.writeFileSync(shapeFile, shapeOut, 'utf8');
    }
}

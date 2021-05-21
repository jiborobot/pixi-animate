#!/usr/bin/env node

/* eslint-disable no-console, newline-after-var, camelcase, prefer-template */
const fs = require('fs');
const path = require('path');

const files = process.argv.slice(2);

for (let file of files)
{
    if (file === '-h')
    {
        console.log(`Usage: pixi-animate-build-dts path/to/file1.js path/to/file2.js`);
    }

    if (!path.isAbsolute(file))
    {
        file = path.resolve(process.cwd(), file);
    }
    let source;
    try
    {
        source = fs.readFileSync(file, 'utf8');
    }
    catch (e)
    {
        console.log(e.message);
        continue;
    }

    const classes = [];
    // get set up to find any classes that are in the library, and make a list
    const classFinder = /data\.lib\.([a-zA-Z_$0-9]+) = class extends (MovieClip|Container)/g;
    let foundClass = classFinder.exec(source);
    while (foundClass)
    {
        // need to know class name & base class (Container, MovieClip)
        const [, className, baseClass] = foundClass;
        // figure out where the constructor starts, so that we can figure out where it ends
        const constructorStartRegex = /constructor\(/g;
        constructorStartRegex.lastIndex = foundClass.index + foundClass[0].length;
        const c = constructorStartRegex.exec(source);
        const constructorStart = c.index + c[0].length;
        let constructorEnd;
        // search for the constructors closing bracket, allowing for interfering {} blocks
        let bracketDepth = 0;
        const bracketFinder = /{|}/g;
        bracketFinder.lastIndex = constructorStart;
        let bracket = bracketFinder.exec(source);
        while (bracket)
        {
            if (bracket[0] === '}' && --bracketDepth === 0)
            {
                constructorEnd = bracket.index;
                break;
            }
            if (bracket[0] === '{')
            {
                bracketDepth++;
            }
            bracket = bracketFinder.exec(source);
        }
        // grab a string of just the constructor
        const constructor = source.substring(constructorStart, constructorEnd);
        // loop through all the properties defined in the constructor (if any)
        // prop declaration format: this.foo = new data.lib.Foo();
        let propFinder = /this\.([a-zA-Z0-9$_]+) = new (data\.lib\.)?([a-zA-Z0-9$_]+)/g;
        const props = [];
        let foundProp = propFinder.exec(constructor);
        while (foundProp)
        {
            const [, name, source, type] = foundProp;
            // track property name, source of property (data.lib. vs nothing), and type
            props.push({
                name,
                source,
                type,
            });
            foundProp = propFinder.exec(constructor);
        }
        // if we couldn't find any props, try a different format
        if (!props.length)
        {
            // prop declaration format: this[instance2.name = "fore"] = instance2;
            propFinder = /this\[([a-zA-Z0-9$_]+)\.name ?= ?"([^"]+)"\]/g;
            foundProp = propFinder.exec(constructor);
            while (foundProp)
            {
                const [, instanceName, name] = foundProp;
                const [, source, type] = new RegExp(`const ${instanceName} ?= ?new (data\\.lib\\.)?([a-zA-Z0-9$_]+)`)
                    .exec(constructor);
                // track property name, source of property (data.lib. vs nothing), and type
                props.push({
                    name,
                    source,
                    type,
                });
                foundProp = propFinder.exec(constructor);
            }
        }
        // now that we have all the data, add it to the list
        classes.push({
            className,
            baseClass,
            props,
        });
        foundClass = classFinder.exec(source);
    }
    let lib = '';
    // for each class, set up a declaration for it
    for (const classData of classes)
    {
        // indented twice, for two namespaces in
        lib += `        export class ${classData.className} extends animate.${classData.baseClass} {${classData.props.length
            ? '\n' + classData.props
                .map(({ name, source, type }) => `            ${name}: ${source ? '' : 'animate.'}${type};`)
                .join('\n') + '\n        '
            : ''}}
`;
    }
    // figure out which class is the root class
    const [, root] = (/data\.stage ?= ?data\.lib\.([a-zA-Z0-9$_]+)/).exec(source);
    // set up our library using a modified copy of AnimateAsset as a template
    let output = `import * as animate from 'pixi-animate';
import { Texture, Spritesheet } from 'pixi.js';

declare namespace data
{
    /**
     * Background color of the scene, as defined when the asset is published.
     */
    export const background: number;
    /**
     * Width of the scene, as defined when the asset is published.
     */
    export const width: number;
    /**
     * Height of the scene, as defined when the asset is published.
     */
    export const height: number;
    /**
     * Framerate of the scene (frames per second), as defined when the asset is published.
     */
    export const framerate: number;
    /**
     * Total number of frames of the root MovieClip.
     */
    export const totalFrames: number;
    /**
     * Dictionary of paths to shape files and textures, indexed by unique id within the scene file.
     */
    export let assets: { [id: string]: string };
    /**
     * Dictionary of loaded shape instructions for this scene. This is intially an empty object that
     * can be filled by animate.load(), or by a custom loading system. It must be filled before
     * any items are instantiated.
     */
    export let shapes: { [id: string]: animate.DrawCommands[] };
    /**
     * Dictionary of loaded individual images for this scene.This is intially an empty object that
     * will be filled by animate.load(). It will be used by the animate.load() method for
     * getTexture(), and is not needed if getTexture() is overridden.
     */
    export let textures: { [id: string]: Texture };
    /**
     * Dictionary of loaded spritesheet for this scene.This is intially an empty object that
     * will be filled by animate.load(). It will be used by the animate.load() method for
     * getTexture(), and is not needed if getTexture() is overridden.
     */
    export let spritesheets: Spritesheet[];
    /**
     * Function for getting a texture by ID.
     * It can be set to PIXI.Texture.from for global texture atlas.
     */
    export let getTexture: (id: string) => Texture;
    /**
     * Creates classes for each Container and MovieClip within the scene, filling data.lib and
     * setting data.stage.
     */
    export function setup(library: typeof animate): void;
    /**
     * Dictionary of display object constructors used within this scene. This is an empty object
     * before setup() is run, but can be overwritten with a shared library dictionary (before setup() is run).
     */
    export namespace lib
    {
${lib}
    }
    /**
     * Constructor for the root MovieClip. Is null before setup() is run.
     */
    export let stage: typeof lib.${root};
}
${source.match(/export default data/) ? 'export default' : 'export ='} data;
`;
    if ((/export {[a-zA-Z0-9$_]+}/).test(source))
    {
        for (const className of classes)
        {
            output += `import ${className} = data.lib.${className};
export { ${className} };
`;
        }
    }

    fs.writeFileSync(file.replace('.js', '.d.ts'), output, 'utf8');
}

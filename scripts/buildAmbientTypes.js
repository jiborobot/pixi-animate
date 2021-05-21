#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const moduleTypes = fs.readFileSync(path.resolve('./dist/pixi-animate.d.ts'), 'utf8');
// get fix of any "declare const foo" bits - once inside a namespace, the declare is not wanted
let ambientTypes = moduleTypes.replace(/^declare /mg, '');

// read out any PixiJS imports
const importRegex = /import {([^}]*)} from "@pixi\/[^"]+";/g;
const imports = [];
let importStatement = importRegex.exec(ambientTypes);
while (importStatement)
{
    const importedTypes = importStatement[1].trim().split(', ');
    // set up individual imports from PIXI namespace
    imports.push(...importedTypes.map((classImport) => `import ${classImport} = PIXI.${classImport};\n`));
    importStatement = importRegex.exec(ambientTypes);
}
// get rid of all the imports now that we've read them all
ambientTypes = ambientTypes.replace(importRegex, '');

// replace existing imports with our declared namespace and our individual imports
// eslint-disable-next-line prefer-template
ambientTypes = 'declare namespace PIXI.animate {\n' + imports.join('') + ambientTypes + '\n}';

// write out our updated version
fs.writeFileSync(path.resolve('./dist/pixi-animate-ambient.d.ts'), ambientTypes);
// remove unused .d.ts files, just to clean up
fs.unlinkSync(path.resolve('./dist/pixi-animate.d.ts'));
fs.unlinkSync(path.resolve('./lib/pixi-animate.es.d.ts'));
fs.unlinkSync(path.resolve('./dist/pixi-animate-legacy.d.ts'));

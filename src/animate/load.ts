import { Loader, ILoaderResource } from '@pixi/loaders';
import { Container } from '@pixi/display';
import { AnimateAsset } from '../AnimateAsset';
import { MovieClip } from './MovieClip';
import { DrawCommands } from './Graphics';
import { utils } from './utils';

type Complete = (instance: MovieClip|null, loader: Loader) => void;
export interface LoadOptions {
    /**
     * The Container to auto-add the stage to, if createInstance is true.
     */
    parent?: Container;
    /**
     * Callback for load completion.
     */
    complete?: Complete;
    /**
     * Base root directory
     */
    basePath?: string;
    /**
     * Enable or disable automatic instantiation of stage - defaults to false.
     */
    createInstance?: boolean;
    /**
     * Metadata to be handed off to the loader for assets that are loaded.
     */
    metadata?: any;
    /**
     * Pre-existing loader to use.
     */
    loader?: Loader;
}

const EXPECTED_ASSET_VERSION = 2;

/**
 * Load the stage class and preload any assets
 * ```
 * import MyAsset from './myAsset.js';
 * let renderer = new PIXI.autoDetectRenderer(1280, 720);
 * let stage = new PIXI.Container();
 * PIXI.animate.load(MyAsset, function(asset){
 *     stage.addChild(new asset.stage());
 * });
 * function update() {
 *      renderer.render(stage);
 *      update();
 * }
 * update();
 * ```
 * @param scene Reference to the scene data.
 * @param complete The callback function when complete.
 * @return instance of PIXI resource loader
 */
export function load(scene: AnimateAsset, complete?: Complete): Loader;
/**
 * Load the stage class and preload any assets
 * ```
 * import MyAsset from './myAsset.js';
 * let basePath = 'file:/path/to/assets';
 * let renderer = new PIXI.Renderer(1280, 720);
 *
 * let extensions = PIXI.compressedTextures.detectExtensions(renderer);
 * let loader = new PIXI.Loader();
 * // this is an example of setting up a pre loader plugin to handle compressed textures in this case
 * loader.pre(PIXI.compressedTextures.extensionChooser(extensions));
 *
 * // specify metadata this way if you want to provide a default loading strategy for all assets listed in the PIXI animation
 * let metadata = { default: { metadata: { imageMetadata: { choice: ['.crn'] } } } };
 * // specify metadata this way if you want to provide a specific loading strategy for a
 * // certain asset listed inside the PIXI animation library
 * let metadata = { MyStage_atlas_1: { metadata: { imageMetadata: { choice: ['.crn'] } } } };
 *
 * let stage = new PIXI.Container();
 * PIXI.animate.load(MyAsset, {
 *     parent: stage,
 *     complete: ()=>{},
 *     basePath: basePath,
 *     loader: loader,
 *     metadata: metadata
 * });
 * function update() {
 *      renderer.render(stage);
 *      update();
 * }
 * update();
 * ```
 * @param scene Reference to the scene data.
 * @param options Options for loading.
 * @return instance of PIXI resource loader
 */
export function load(scene: AnimateAsset, options: LoadOptions): Loader;
export function load(scene: AnimateAsset, optionsOrComplete?: Complete|LoadOptions): Loader
{
    const complete: Complete = typeof optionsOrComplete === 'function' ? optionsOrComplete : optionsOrComplete?.complete;
    let basePath = '';
    let parent: Container = null;
    let metadata: any;
    let createInstance = false;
    let loader: Loader;

    // check scene and warn about it
    const { version } = scene;

    if (typeof version === 'number')
    {
        /* eslint-disable max-len */
        if (Math.floor(version) !== Math.floor(EXPECTED_ASSET_VERSION))
        {
            console.warn(`Asset version is not the major version expected of ${Math.floor(EXPECTED_ASSET_VERSION)} - it may not load properly`, scene);
        }
        else if (version > EXPECTED_ASSET_VERSION)
        {
            console.warn('Asset has been published with a newer version than PixiAnimate expects. It may not load properly.', scene);
        }
        /* eslint-enable max-len */
    }

    if (optionsOrComplete && typeof optionsOrComplete !== 'function')
    {
        basePath = optionsOrComplete.basePath || '';
        parent = optionsOrComplete.parent;
        metadata = optionsOrComplete.metadata;
        createInstance = !!optionsOrComplete.createInstance;
        loader = optionsOrComplete.loader;
    }

    loader = loader || new Loader();

    function done(): void
    {
        const instance = (createInstance && typeof scene.stage === 'function') ? new scene.stage() : null;

        if (parent && instance)
        {
            parent.addChild(instance);
        }
        if (complete)
        {
            complete(instance, loader);
        }
    }

    // Check for assets to preload
    const assets = scene.assets || {};

    if (assets && Object.keys(assets).length)
    {
        // assetBaseDir can accept either with trailing slash or not
        if (basePath)
        {
            basePath += '/';
        }
        for (const id in assets)
        {
            let data = null;

            if (metadata)
            {
                // if the metadata was supplied for this particular asset, use these options
                if (metadata[id])
                {
                    data = metadata[id];
                }
                // if the metadata supplied a default option
                else if (metadata.default)
                {
                    data = metadata.default;
                }
            }
            loader.add(id, basePath + assets[id], data, (resource: ILoaderResource) =>
            {
                if (!resource.data)
                {
                    return;
                }
                if (resource.spritesheet)
                {
                    // handle spritesheets
                    scene.spritesheets.push(resource.spritesheet);
                }
                else if (resource.data.nodeName === 'IMG')
                {
                    // handle individual textures
                    scene.textures[resource.name] = resource.texture;
                }
                else if (resource.url.search(/\.shapes\.(json|txt)$/i) > -1)
                {
                    // save shape data
                    let items: string|DrawCommands[] = resource.data;

                    // Decode string to map of files
                    if (typeof items === 'string')
                    {
                        items = utils.deserializeShapes(items);
                    }

                    // Convert all hex string colors (animate) to int (pixi.js)
                    for (let i = 0; i < items.length; i++)
                    {
                        const item = items[i];

                        for (let j = 0; j < item.length; j++)
                        {
                            const arg = item[j];

                            if (typeof arg === 'string' && arg[0] === '#')
                            {
                                item[j] = utils.hexToUint(arg);
                            }
                        }
                    }
                    scene.shapes[resource.name] = items;
                }
            });
        }
        loader.onComplete.once(done);
        loader.load();
    }
    else
    {
        // tiny case where there's only text and no shapes/animations
        done();
    }

    return loader;
}

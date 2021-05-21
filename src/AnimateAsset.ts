import { MovieClip, AnimateContainer, AnimateGraphics, AnimateText, AnimateSprite, DrawCommands } from './animate';
import { Texture } from '@pixi/core';
import { Spritesheet } from '@pixi/spritesheet';

interface PixiAnimate
{
    MovieClip: typeof MovieClip;
    Container: typeof AnimateContainer;
    Graphics: typeof AnimateGraphics;
    Text: typeof AnimateText;
    Sprite: typeof AnimateSprite;
}

/**
 * The format of the output javascript file when publishing a scene.
 */
export interface AnimateAsset
{
    /**
     * File format version that the asset was published for.
     * 2 is the base version that PixiAnimate 2.0.0 supports.
     */
    version?: number;
    /**
     * Constructor for the root MovieClip. Is null before setup() is run.
     */
    stage: new () => MovieClip;
    /**
     * Background color of the scene, as defined when the asset is published.
     */
    background: number;
    /**
     * Width of the scene, as defined when the asset is published.
     */
    width: number;
    /**
     * Height of the scene, as defined when the asset is published.
     */
    height: number;
    /**
     * Framerate of the scene (frames per second), as defined when the asset is published.
     */
    framerate: number;
    /**
     * Total number of frames of the root MovieClip.
     */
    totalFrames: number;
    /**
     * Dictionary of paths to shape files and textures, indexed by unique id within the scene file.
     */
    assets: { [id: string]: string };
    /**
     * Dictionary of display object constructors used within this scene. This is an empty object
     * before setup() is run, but can be overwritten with a shared library dictionary (before setup() is run).
     */
    lib: { [id: string]: (new () => (MovieClip|AnimateContainer))};
    /**
     * Dictionary of loaded shape instructions for this scene. This is intially an empty object that
     * can be filled by animate.load(), or by a custom loading system. It must be filled before
     * any items are instantiated.
     */
    shapes: { [id: string]: DrawCommands[] };
    /**
     * Dictionary of loaded individual images for this scene. This is intially an empty object that
     * will be filled by animate.load(). It will be used by the default method for
     * getTexture(), and is not needed if getTexture() is overridden.
     */
    textures: { [id: string]: Texture };
    /**
     * Dictionary of loaded spritesheets for this scene. This is intially an empty object that
     * will be filled by animate.load(). It will be used by the default method for
     * getTexture(), and is not needed if getTexture() is overridden.
     */
    spritesheets: Spritesheet[];
    /**
     * Function for getting a texture by ID.
     * It can be set to PIXI.Texture.from for global texture atlas.
     */
    getTexture: (id: string) => Texture;
    /**
     * Creates classes for each Container and MovieClip within the scene, filling data.lib and
     * setting data.stage.
     */
    setup: (animate: PixiAnimate) => void;
}

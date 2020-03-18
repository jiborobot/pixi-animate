import {load} from './load';
import {sound} from './sound';
import {MovieClip} from './MovieClip';
import {Application, utils, /*IDestroyOptions*/} from 'pixi.js';
import {AnimateAsset} from '../AnimateAsset';

// TODO: Remove with next release of pixi.js
interface IDestroyOptions {
    children?: boolean;
    texture?: boolean;
    baseTexture?: boolean;
}

/**
 * Extends the PIXI.Application class to provide easy loading.
 * ```
 * const scene = new PIXI.animate.Scene();
 * scene.load(lib.StageName);
 * ```
 */
export class Scene extends Application {
    /**
     * Reference to the global sound object
     * @readOnly
     */
    public readonly sound:utils.EventEmitter = sound;
    
    /**
     * The stage object created.
     */
    public instance:MovieClip = null;

    /**
     * Load a stage scene and add it to the stage.
     * @param asset Reference to the scene to load.
     * @param complete Callback when finished loading.
     * @param basePath Optional base directory to prepend to assets.
     * @return instance of PIXI resource loader
     */
    public load(asset:AnimateAsset, complete?:(instance?:MovieClip)=>void, basePath?:string) {
        return load(asset, {
            parent: this.stage,
            createInstance: true,
            complete: (instance) => {
                this.instance = instance as MovieClip;
                if (complete) {
                    complete(this.instance);
                }
            },
            basePath
        });
    }

    /**
     * Destroy and don't use after calling.
     * @param removeView Automatically remove canvas from DOM.
     * @param stageOptions Options parameter. A boolean will act as if all options
     *  have been set to that value
     */
    destroy(removeView?: boolean, stageOptions?: IDestroyOptions | boolean): void {
        if (this.instance) {
            this.instance.destroy(true);
            this.instance = null;
        }
        super.destroy(removeView, stageOptions as IDestroyOptions);
    }
}
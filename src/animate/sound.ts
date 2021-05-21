import { EventEmitter } from '@pixi/utils';
/**
 * @description Event emitter for all sound events. This emits a single
 * `play` event which contains the alias, loop and MovieClip which is playing
 * the sound.
 * @example
 *
 * PIXI.animate.sound.on('play', (alias, loop, context) => {
 *    // custom handle sounds being played
 *    // where 'alias' is the ID in stage assets
 * });
 */
export const sound = new EventEmitter();

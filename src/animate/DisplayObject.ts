import { AnimateContainer } from './Container';
import { AnimateSprite } from './Sprite';
import { AnimateGraphics } from './Graphics';
import { AnimateText } from './Text';

export type AnimateDisplayObject = (AnimateContainer|AnimateGraphics|AnimateSprite|AnimateText);

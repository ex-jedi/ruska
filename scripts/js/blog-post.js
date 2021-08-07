// *==============================================================================
// ** Blog  **
// *==============================================================================

import { mainLogoAnimation, addMenuListener, pyramidDividerFunction } from './animations';
import { reframe } from './utils';
// ********** Animations **********
mainLogoAnimation();
addMenuListener();
pyramidDividerFunction();

reframe('.blog-video-embed iframe');

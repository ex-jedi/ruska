// *==============================================================================
// ** Blog  **
// *==============================================================================

import { mainLogoAnimation, addMenuListener, pyramidDividerFunction, scrollTriggerRefresh } from './animations';
import { reframe, displayInstagramFeed } from './utils';

// ********** Animations **********
mainLogoAnimation();
addMenuListener();
pyramidDividerFunction();
scrollTriggerRefresh();

// ********** Utils **********
reframe('.blog-video-embed iframe');
displayInstagramFeed();

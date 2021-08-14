// *==============================================================================
// ** Blog  **
// *==============================================================================

import { mainLogoAnimation, addMenuListener, pyramidDividerFunction, scrollTriggerRefresh } from './animations';
import { blogCatsToggle } from './lib';
import { displayInstagramFeed } from './utils';
// ********** Animations **********
mainLogoAnimation();
addMenuListener();
pyramidDividerFunction();
scrollTriggerRefresh();

// ********** Lib **********
blogCatsToggle();

// ********** Utils **********
displayInstagramFeed();

// *==============================================================================
// ** Blog  **
// *==============================================================================

import {
  mainLogoAnimation,
  addMenuListener,
  pyramidDividerFunction,
  scrollTriggerRefresh,
  splitTextFadeUpExport,
  simpleFadeIn,
} from './animations';

import { displayInstagramFeed, addClass } from './utils';

// ********** Utils **********
displayInstagramFeed();
addClass('.blog-text-block p', 'simple-fade-in');

// ********** Animations **********
mainLogoAnimation();
addMenuListener();
pyramidDividerFunction();
scrollTriggerRefresh();
splitTextFadeUpExport();
simpleFadeIn();

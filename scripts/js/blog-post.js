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

import { reframe, displayInstagramFeed, addClass } from './utils';

// ********** Utils **********
reframe('.blog-video-embed iframe');
displayInstagramFeed();
addClass('.blog-text-block p', 'simple-fade-in');

// ********** Animations **********
mainLogoAnimation();
addMenuListener();
pyramidDividerFunction();
scrollTriggerRefresh();
splitTextFadeUpExport();
simpleFadeIn();

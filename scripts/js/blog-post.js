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

import { displayInstagramFeed, addClass, cookieWarning } from './utils';

// ********** Utils **********
displayInstagramFeed();
addClass('.blog-text-block p', 'simple-fade-in');
cookieWarning();

// ********** Animations **********
mainLogoAnimation();
addMenuListener();
pyramidDividerFunction();
scrollTriggerRefresh();
splitTextFadeUpExport();
simpleFadeIn();

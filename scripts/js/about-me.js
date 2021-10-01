// *=========================================
// ** Imports  **
// *=========================================

import {
  pyramidDividerFunction,
  mainLogoAnimation,
  scrollTriggerRefresh,
  addMenuListener,
  simpleFadeIn,
  splitTextFadeUpExport,
} from './animations';

import { displayInstagramFeed, addClass, cookieWarning } from './utils';

// *=========================================
// ** Import Functions  **
// *=========================================

// ********** Utils **********

displayInstagramFeed();

addClass('.about-me-text-wrapper p', 'simple-fade-in');

cookieWarning();

// ********** Animation **********

mainLogoAnimation();

pyramidDividerFunction();

scrollTriggerRefresh();

addMenuListener();

simpleFadeIn();

splitTextFadeUpExport();

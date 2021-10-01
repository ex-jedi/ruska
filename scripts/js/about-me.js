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

import { displayInstagramFeed, addClass } from './utils';

// *=========================================
// ** Import Functions  **
// *=========================================

// ********** Utils **********

displayInstagramFeed();

addClass('.about-me-text-wrapper p', 'simple-fade-in');

// ********** Animation **********

mainLogoAnimation();

pyramidDividerFunction();

scrollTriggerRefresh();

addMenuListener();

simpleFadeIn();

splitTextFadeUpExport();

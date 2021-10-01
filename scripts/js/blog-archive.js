// *==============================================================================
// ** Blog Archive **
// *==============================================================================

import {
  mainLogoAnimation,
  addMenuListener,
  pyramidDividerFunction,
  scrollTriggerRefresh,
  splitTextFadeUpExport,
  simpleFadeIn,
} from './animations';

import { displayInstagramFeed, cookieWarning } from './utils';
// ********** Animations **********
mainLogoAnimation();
addMenuListener();
pyramidDividerFunction();
scrollTriggerRefresh();
splitTextFadeUpExport();
simpleFadeIn();

// ********** Utils **********
displayInstagramFeed();
cookieWarning();

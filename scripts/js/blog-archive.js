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

import { displayInstagramFeed, cookieWarning, blogIndexBackgrounds } from './utils';
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

blogIndexBackgrounds();

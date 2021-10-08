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

import { blogCatsToggle } from './lib';

import { displayInstagramFeed, cookieWarning, blogIndexBackgrounds } from './utils';
// ********** Animations **********
mainLogoAnimation();
addMenuListener();
pyramidDividerFunction();
scrollTriggerRefresh();
splitTextFadeUpExport();
simpleFadeIn();

// ********** Lib **********
blogCatsToggle();

// ********** Utils **********
displayInstagramFeed();
cookieWarning();
blogIndexBackgrounds();

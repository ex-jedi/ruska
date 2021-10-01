// *==============================================================================
// ** Homepage  **
// *==============================================================================

// *==============================================================================
// ** Imports  **
// *==============================================================================

import {
  mainLogoAnimation,
  homepageTreeAnimationOne,
  homepageTreeAnimationTwo,
  homepageTreeAnimationThree,
  homepageTreeAnimationFour,
  scrollTriggerRefresh,
  pyramidDividerFunction,
  addMenuListener,
  fadeAndSwapThreeExport,
  splitTextFadeUpExport,
  simpleFadeIn,
} from './animations';

import { displayInstagramFeed } from './utils';

import { consoleGreeting } from './lib';

// *=========================================
// ** Import Functions  **
// *=========================================

addMenuListener();

mainLogoAnimation();

homepageTreeAnimationOne();
homepageTreeAnimationTwo();
homepageTreeAnimationThree();
homepageTreeAnimationFour();

pyramidDividerFunction();

scrollTriggerRefresh();

displayInstagramFeed();

fadeAndSwapThreeExport();

splitTextFadeUpExport();

consoleGreeting();

simpleFadeIn();

// *==============================================================================
// ** Legals  **
// *==============================================================================

import {
  mainLogoAnimation,
  addMenuListener,
  pyramidDividerFunction,
  scrollTriggerRefresh,
  simpleFadeIn,
} from './animations';

import { cookieWarning } from './utils';

// ********** Animations **********
mainLogoAnimation();
addMenuListener();
pyramidDividerFunction();
scrollTriggerRefresh();
simpleFadeIn();

// ********** Utils **********

cookieWarning();

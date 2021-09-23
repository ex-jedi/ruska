// *==============================================================================
// ** Shop  **
// *==============================================================================

// TODO: Remove GSAP Imports
import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

// *=========================================
// ** Imports  **
// *=========================================

import {
  pyramidDividerFunction,
  mainLogoAnimation,
  scrollTriggerRefresh,
  addMenuListener,
  splitTextFadeUpExport,
  simpleFadeIn,
} from './animations';

import { displayInstagramFeed } from './utils';

// *=========================================
// ** GSAP  **
// *=========================================
gsap.registerPlugin(CSSRulePlugin, ScrollTrigger, DrawSVGPlugin);

// !==============================================================================
// FIXME: Temp Building 👇🏾
// !==============================================================================

// !==============================================================================
// FIXME: Temp Building 👆🏾
// !==============================================================================

// *=========================================
// ** Import Functions  **
// *=========================================

// ********** Animation **********

mainLogoAnimation();

pyramidDividerFunction();

scrollTriggerRefresh();

addMenuListener();

splitTextFadeUpExport();

simpleFadeIn();

// ********** Lib **********
displayInstagramFeed();

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
  simpleFadeIn,
  splitTextFadeUpExport,
} from './animations';

import { displayInstagramFeed, addClass } from './utils';
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

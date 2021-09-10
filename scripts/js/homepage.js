// *==============================================================================
// ** Homepage  **
// *==============================================================================

// *==============================================================================
// ** Imports  **
// *==============================================================================

// TODO: Remove GSAP Imports
import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

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

// TODO: Organise below 👇🏾

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

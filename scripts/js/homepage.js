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
} from './animations';

// *=========================================
// ** GSAP  **
// *=========================================
gsap.registerPlugin(CSSRulePlugin, ScrollTrigger, DrawSVGPlugin);

// !==============================================================================
// FIXME: Temp Building 👇🏾
// !==============================================================================
function getNavElements() {
  const mainNav = document.querySelector('.main-nav');
  const mainNavLinks = gsap.utils.toArray(document.querySelectorAll('.main-nav-link'));
  const mainNavTriggerWrapper = document.querySelector('.main-nav-trigger-wrapper');
  const mainNavTrigger = document.querySelector('.main-nav-trigger');

  console.log({ mainNav, mainNavLinks, mainNavTriggerWrapper, mainNavTrigger });

  return { mainNav, mainNavLinks, mainNavTriggerWrapper, mainNavTrigger };
}

getNavElements();

// !==============================================================================
// FIXME: Temp Building 👆🏾
// !==============================================================================

// ********** Main Logo **********
mainLogoAnimation();

// ********** Tree animations **********
homepageTreeAnimationOne();
homepageTreeAnimationTwo();
homepageTreeAnimationThree();
homepageTreeAnimationFour();

// ********** Footer pyramid **********
pyramidDividerFunction();

scrollTriggerRefresh();

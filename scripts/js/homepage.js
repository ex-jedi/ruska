// *==============================================================================
// ** Homepage  **
// *==============================================================================

// *==============================================================================
// ** Imports  **
// *==============================================================================

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
} from './animations';

// *=========================================
// ** GSAP  **
// *=========================================
gsap.registerPlugin(CSSRulePlugin, ScrollTrigger, DrawSVGPlugin);

// ********** Main Logo **********
mainLogoAnimation();
homepageTreeAnimationOne();
homepageTreeAnimationTwo();
homepageTreeAnimationThree();
homepageTreeAnimationFour();

scrollTriggerRefresh();

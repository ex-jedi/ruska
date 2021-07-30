// TODO: Remove GSAP Imports
import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

// *=========================================
// ** Imports  **
// *=========================================

import { pyramidDividerFunction, mainLogoAnimation, scrollTriggerRefresh, addMenuListener } from './animations';

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

mainLogoAnimation();

pyramidDividerFunction();

scrollTriggerRefresh();

addMenuListener();

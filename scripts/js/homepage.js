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

// *=========================================
// ** GSAP  **
// *=========================================

const animationOne = document.querySelector('#Animation_1');
const animationOnePaths = animationOne.querySelectorAll('path');
console.log(animationOnePaths);

animationOnePaths.forEach((paths) => {
  if (!paths.classList.contains('cls-1')) {
    gsap.fromTo(paths, { drawSVG: 0 }, { drawSVG: '100%', delay: 2, duration: 3 });
  }
});

gsap.registerPlugin(CSSRulePlugin, ScrollTrigger, DrawSVGPlugin);

// gsap.set('.cls-1', { opacity: 0 });
// gsap.fromTo('.cls-1', { drawSVG: 0 }, { drawSVG: '100%', delay: 2, duration: 3 });

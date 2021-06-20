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
gsap.registerPlugin(CSSRulePlugin, ScrollTrigger, DrawSVGPlugin);

// *=========================================
// ** Main Logo  **
// *=========================================

const animationOne = document.querySelector('#Animation_1');
const animationOnePaths = animationOne.querySelectorAll('path');

const animationTwo = document.querySelector('#Animation_2');
const animationTwoPaths = animationTwo.querySelectorAll('path');

const animationThree = document.querySelector('#Animation_3');
const animationThreePaths = animationThree.querySelectorAll('path');

const animationFour = document.querySelector('#Animation_4');
const animationFourPaths = animationFour.querySelectorAll('path');

const animationFive = document.querySelector('#Animation_5');
const animationFivePaths = animationFive.querySelectorAll('path');

const flipReverse = gsap.timeline({
  defaults: { duration: 1, ease: 'power3.inOut' },
  repeat: -1,
});

flipReverse
  .fromTo(animationOnePaths, { drawSVG: 0 }, { drawSVG: '100%' })
  .fromTo(animationTwoPaths, { drawSVG: 0 }, { drawSVG: '100%' })
  .fromTo(animationThreePaths, { drawSVG: 0 }, { drawSVG: '100%' })
  .fromTo(animationFourPaths, { drawSVG: 0 }, { drawSVG: '100%' })
  .fromTo(animationFivePaths, { drawSVG: 0 }, { drawSVG: '100%' });

console.log({ animationTwo });
console.log({ animationTwoPaths });

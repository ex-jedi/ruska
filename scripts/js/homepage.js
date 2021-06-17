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

// const logoPaths = document.querySelectorAll('.main-logo-wrapper path');
// console.log(logoPaths);

// gsap.fromTo(logoPaths, { drawSVG: 0 }, { drawSVG: '100%', delay: 2, duration: 2 });

//* List of paths to flip - Animation 2 .cls-17
//* List of paths to flip - Animation 5 .cls-53

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
  defaults: { duration: 3, ease: 'none' },
  repeat: -1,
});

// gsap.set([animationOnePaths, animationTwoPaths, animationFourPaths, animationFivePaths], { opacity: 0 });
flipReverse.fromTo(animationFivePaths, { drawSVG: 0 }, { drawSVG: '100%' });
// .fromTo(animationTwoPaths, { drawSVG: 0 }, { drawSVG: '100%' })
// .fromTo(animationThreePaths, { drawSVG: 0 }, { drawSVG: '100%' })
// .fromTo(animationFourPaths, { drawSVG: 0 }, { drawSVG: '100%' })
// .fromTo(animationFivePaths, { drawSVG: 0 }, { drawSVG: '100%' });

//* Find which paths run the wrong way and flip them
//* https://greensock.com/forums/topic/14946-drawsvg-start-from-the-other-end/

//* https://greensock.com/forums/topic/21132-drawsvg-path-draws-from-right-point-to-left-point-but-i-am-looking-for-left-to-right-have-i-drawn-all-my-paths-the-wrong-direction/?do=findComment&comment=98969&_rid=75370

//* Multiple class selector
//* https://stackoverflow.com/questions/7184562/how-to-get-elements-with-multiple-classes/7184581

// const animationTest = document.querySelector('#Animation_4');
// console.log('Testing > ', animationTest.id);

// const animationTestPaths = Array.from(animationTest.querySelectorAll('path'));
// console.log({ animationTestPaths });

// const animationTestPath = animationTest.querySelector('.cls-9');
// console.log({ animationTestPath });

// gsap.fromTo(animationTestPath, { drawSVG: 0 }, { drawSVG: '100%', duration: 5, repeat: -1 });
//* Reversed
// gsap.fromTo(animationTestPath, { drawSVG: '100% 100%' }, { drawSVG: '0% 100%', duration: 5, repeat: -1 });

//* List of paths to flip - Animation 2 .cls-17
//* List of paths to flip - Animation 5 .cls-53

//* Paths to hide - Animation 4 .cls-3
//* Paths to hide - Animation 4 .cls-4

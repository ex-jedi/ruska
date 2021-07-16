// *==============================================================================
// ** Homepage  **
// *==============================================================================

// *==============================================================================
// ** Imports  **
// *==============================================================================

// TODO: Remove GSAP
import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

import { mainLogoAnimation, homepageTreeAnimation, homepageTreeAnimationTwo } from './animations';

// *=========================================
// ** GSAP  **
// *=========================================
gsap.registerPlugin(CSSRulePlugin, ScrollTrigger, DrawSVGPlugin);

// ********** Main Logo **********
mainLogoAnimation();
// homepageTreeAnimation();
// homepageTreeAnimationTwo();

// !==============================================================================
// FIXME: Building
// !==============================================================================
function ref() {
  const animationOne = document.querySelector('[data-name="Animation 1"]');
  const animationOnePaths = animationOne.querySelectorAll('path');

  const animationTwo = document.querySelector('[data-name="Animation 2"]');
  const animationTwoPaths = animationTwo.querySelectorAll('path');

  const animationThree = document.querySelector('[data-name="Animation 3"]');
  const animationThreePaths = animationThree.querySelectorAll('path');

  const animationFour = document.querySelector('[data-name="Animation 4"]');
  const animationFourPaths = animationFour.querySelectorAll('path');

  const animationFive = document.querySelector('[data-name="Animation 5"]');
  const animationFivePaths = animationFive.querySelectorAll('path');

  // TODO: Remove markers
  const treeAnimationTimeline = gsap.timeline({
    defaults: { duration: 1, ease: 'power3.inOut' },
    scrollTrigger: {
      trigger: '.tree-animation-wrapper',
      id: 'Tree Animation',
      start: 'bottom bottom',
      end: 'top 5%',
      markers: true,
      scrub: 1,
    },
  });

  // TODO: Change name as they go the right way
  treeAnimationTimeline
    .fromTo(animationOnePaths, { drawSVG: 0 }, { drawSVG: '100%' })
    .fromTo(animationTwoPaths, { drawSVG: 0 }, { drawSVG: '100%' })
    .fromTo(animationThreePaths, { drawSVG: 0 }, { drawSVG: '100%' })
    .fromTo(animationFourPaths, { drawSVG: 0 }, { drawSVG: '100%' })
    .fromTo(animationFivePaths, { drawSVG: 0 }, { drawSVG: '100%' });
}

//* REF 👆🏾

function treeAnimationTimelineFunction(paths) {
  const treeAnimationTimeline = gsap.timeline({
    defaults: { duration: 1, ease: 'power3.inOut' },
  });

  treeAnimationTimeline
    .fromTo(paths[0], { drawSVG: 0 }, { drawSVG: '100%' })
    .fromTo(paths[1], { drawSVG: 0 }, { drawSVG: '100%' })
    .fromTo(paths[2], { drawSVG: 0 }, { drawSVG: '100%' })
    .fromTo(paths[3], { drawSVG: 0 }, { drawSVG: '100%' })
    .fromTo(paths[4], { drawSVG: 0 }, { drawSVG: '100%' });

  return treeAnimationTimeline;
}

function treeAnimationFunction() {
  // * Select all trees
  const treeSVGs = document.querySelectorAll('.tree-animation-wrapper');

  // * Select target paths in each tree
  treeSVGs.forEach((tree) => {
    const animationOne = tree.querySelector('[data-name="Animation 1"]');
    const animationOnePaths = animationOne.querySelectorAll('path');

    const animationTwo = tree.querySelector('[data-name="Animation 2"]');
    const animationTwoPaths = animationTwo.querySelectorAll('path');

    const animationThree = tree.querySelector('[data-name="Animation 3"]');
    const animationThreePaths = animationThree.querySelectorAll('path');

    const animationFour = tree.querySelector('[data-name="Animation 4"]');
    const animationFourPaths = animationFour.querySelectorAll('path');

    const animationFive = tree.querySelector('[data-name="Animation 5"]');
    const animationFivePaths = animationFive.querySelectorAll('path');

    const treePathsarray = [
      animationOnePaths,
      animationTwoPaths,
      animationThreePaths,
      animationFourPaths,
      animationFivePaths,
    ];

    // * Create scrolltrigger for each tree

    ScrollTrigger.create({
      trigger: tree,
      id: 'Tree Animation',
      start: 'bottom bottom',
      end: 'top 5%',
      markers: true,
      scrub: 1,
      onEnter: () => treeAnimationTimelineFunction(treePathsarray).play,
      onLeave: () => treeAnimationTimelineFunction(treePathsarray).reverse,
    });
  });
}

// * Pass paths into timelike

treeAnimationFunction();

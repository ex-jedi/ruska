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

function getTreePath(target) {
  const animationOne = target.querySelector('[data-name="Animation 1"]');
  const animationOnePaths = animationOne.querySelectorAll('path');

  const animationTwo = target.querySelector('[data-name="Animation 2"]');
  const animationTwoPaths = animationTwo.querySelectorAll('path');

  const animationThree = target.querySelector('[data-name="Animation 3"]');
  const animationThreePaths = animationThree.querySelectorAll('path');

  const animationFour = target.querySelector('[data-name="Animation 4"]');
  const animationFourPaths = animationFour.querySelectorAll('path');

  const animationFive = target.querySelector('[data-name="Animation 5"]');
  const animationFivePaths = animationFive.querySelectorAll('path');

  const treePathsarray = [
    animationOnePaths,
    animationTwoPaths,
    animationThreePaths,
    animationFourPaths,
    animationFivePaths,
  ];

  return treePathsarray;
}

function treeAnimationFunction() {
  // * Select all trees

  const treeSVGs = gsap.utils.toArray(document.querySelectorAll('.tree-animation-wrapper'));

  treeSVGs.forEach(function (tree) {
    // * Select target paths in each tree

    const treePaths = getTreePath(tree);
    // * Create scrolltrigger for each tree

    ScrollTrigger.create({
      trigger: tree,
      id: 'Tree Animation',
      start: 'bottom bottom',
      end: 'top 5%',
      markers: true,
      scrub: 1,
      onEnter: () => treeAnimationTimelineFunction(treePaths).play,
    });
  });
}

// * Pass paths into timelike

treeAnimationFunction();

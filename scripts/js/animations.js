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

// *==============================================================================
// ** GSAP Animations For Multiple Pages  **
// *==============================================================================

// ********** Globals **********
// Media query for menu
const mediaNineFifty = window.matchMedia('(max-width: 950px)');

// *=========================================
// ** Logo Animation  **
// *=========================================

function mainLogoAnimation() {
  const animationOne = document.querySelector('.main-logo-wrapper #Animation_1');
  const animationOnePaths = animationOne.querySelectorAll('path');

  const animationTwo = document.querySelector('.main-logo-wrapper #Animation_2');
  const animationTwoPaths = animationTwo.querySelectorAll('path');

  const animationThree = document.querySelector('.main-logo-wrapper #Animation_3');
  const animationThreePaths = animationThree.querySelectorAll('path');

  const animationFour = document.querySelector('.main-logo-wrapper #Animation_4');
  const animationFourPaths = animationFour.querySelectorAll('path');

  const animationFive = document.querySelector('.main-logo-wrapper #Animation_5');
  const animationFivePaths = animationFive.querySelectorAll('path');

  const logoImage = document.querySelector('.main-logo-wrapper image');

  const treeAnimationTimeline = gsap.timeline({
    defaults: { duration: 0.4, ease: 'power3.inOut' },
  });

  treeAnimationTimeline
    .fromTo(logoImage, { opacity: 0 }, { opacity: 1, ease: 'power4.in', duration: 0.75 })
    .fromTo(animationOnePaths, { drawSVG: 0 }, { opacity: 1, drawSVG: '100%' })
    .fromTo(animationTwoPaths, { drawSVG: 0 }, { opacity: 1, drawSVG: '100%' })
    .fromTo(animationThreePaths, { drawSVG: 0 }, { opacity: 1, drawSVG: '100%' })
    .fromTo(animationFourPaths, { drawSVG: 0 }, { opacity: 1, drawSVG: '100%' })
    .fromTo(animationFivePaths, { drawSVG: 0 }, { opacity: 1, drawSVG: '100%' });
}

// *=========================================
// ** Pyramid Divider  **
// *=========================================

function pyramidDividerFunction() {
  let triggerPoint = 'top 95%';
  if (mediaNineFifty.matches) {
    triggerPoint = 'top 85%';
  }

  gsap.to('.svg-pyramid-divider', {
    y: 0,
    scrollTrigger: {
      trigger: '.svg-pyramid-divider',
      start: triggerPoint,
      end: 'top 50%',
      id: 'Pyramid Divider',
      // markers: true,
      scrub: 1,
    },
  });
}

// *=========================================
// ** Main Nav  **
// *=========================================

function getNavElements() {
  const mainNav = document.querySelector('.main-nav');
  const mainNavLinks = gsap.utils.toArray(document.querySelectorAll('.main-nav-link'));
  const mainNavTrigger = document.querySelector('.main-nav-trigger');
  const mainNavCloser = document.querySelector('.main-nav-closer');

  return { mainNav, mainNavLinks, mainNavTrigger, mainNavCloser };
}

// * Open Menu

function menuOpenAnimation(startPosition, endPosition) {
  const { mainNav, mainNavLinks, mainNavCloser } = getNavElements();

  const openMenuTl = gsap.timeline({
    paused: true,
    // onComplete: navTextPointerEvents,
    defaults: { ease: 'power2.in', duration: 0.8, delay: 0 },
  });

  return openMenuTl
    .addLabel('start')
    .fromTo(mainNav, startPosition, endPosition, 'start')
    .to(mainNavCloser, { rotate: 180 }, 'start')
    .to(mainNavLinks, { y: '0%', opacity: 1, stagger: 0.1 }, '-=25%');
}

function navOpenerHandler() {
  let beginning = { x: '-100%', y: 0 };
  let end = { x: '0%', y: '0%' };
  if (mediaNineFifty.matches) {
    beginning = { x: '0%', y: '100%' };
    end = { y: '0%', x: '0%' };
  }
  menuOpenAnimation(beginning, end).play();
}

// * Close Menu

function closeMenuAnimation() {
  let endPosition = { x: '-100%', y: '0%' };
  if (mediaNineFifty.matches) {
    endPosition = { y: '100%', x: '0%' };
  }
  const { mainNav, mainNavLinks, mainNavCloser } = getNavElements();
  const closeMenuTl = gsap.timeline({
    paused: true,
    defaults: { ease: 'power2.out', duration: 0.8, delay: 0 },
  });

  return closeMenuTl
    .to(mainNavLinks, { y: 100, opacity: 0, stagger: { each: 0.15, from: 'end' } })
    .addLabel('end')
    .to(mainNav, endPosition, 'end-=60%')
    .to(mainNavCloser, { rotate: -180 }, 'end-=60%');
}

function navCloserHandler() {
  closeMenuAnimation().play();
}

function addMenuListener() {
  const { mainNavTrigger, mainNavCloser } = getNavElements();
  mainNavTrigger.addEventListener('click', navOpenerHandler);
  mainNavCloser.addEventListener('click', navCloserHandler);
}

// *==============================================================================
// ** Homepage  **
// *==============================================================================

// *=========================================
// ** Tree Animation  **
// *=========================================

// TODO: Add to all tree elements
function homepageTreeAnimationOne() {
  const animationOne = document.querySelector('#homepage-tree-animation-one [data-name="Animation 1"]');
  const animationOnePaths = animationOne.querySelectorAll('path');

  const animationTwo = document.querySelector('#homepage-tree-animation-one [data-name="Animation 2"]');
  const animationTwoPaths = animationTwo.querySelectorAll('path');

  const animationThree = document.querySelector('#homepage-tree-animation-one [data-name="Animation 3"]');
  const animationThreePaths = animationThree.querySelectorAll('path');

  const animationFour = document.querySelector('#homepage-tree-animation-one [data-name="Animation 4"]');
  const animationFourPaths = animationFour.querySelectorAll('path');

  const animationFive = document.querySelector('#homepage-tree-animation-one [data-name="Animation 5"]');
  const animationFivePaths = animationFive.querySelectorAll('path');

  // TODO: Remove markers
  const treeAnimationTimeline = gsap.timeline({
    defaults: { duration: 1, ease: 'power3.inOut' },
    scrollTrigger: {
      trigger: '#homepage-tree-animation-one',
      id: 'Tree Animation',
      start: 'bottom bottom',
      end: 'top 5%',
      // markers: true,
      scrub: 0.5,
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

function homepageTreeAnimationTwo() {
  const animationOne = document.querySelector('#homepage-tree-animation-two [data-name="Animation 1"]');
  const animationOnePaths = animationOne.querySelectorAll('path');

  const animationTwo = document.querySelector('#homepage-tree-animation-two [data-name="Animation 2"]');
  const animationTwoPaths = animationTwo.querySelectorAll('path');

  const animationThree = document.querySelector('#homepage-tree-animation-two [data-name="Animation 3"]');
  const animationThreePaths = animationThree.querySelectorAll('path');

  const animationFour = document.querySelector('#homepage-tree-animation-two [data-name="Animation 4"]');
  const animationFourPaths = animationFour.querySelectorAll('path');

  const animationFive = document.querySelector('#homepage-tree-animation-two [data-name="Animation 5"]');
  const animationFivePaths = animationFive.querySelectorAll('path');

  // TODO: Remove markers
  const treeAnimationTimeline = gsap.timeline({
    defaults: { duration: 1, ease: 'power3.inOut' },
    scrollTrigger: {
      trigger: '#homepage-tree-animation-two',
      id: 'Tree Animation',
      start: 'bottom bottom',
      end: 'top 5%',
      // markers: true,
      scrub: 0.5,
    },
  });

  treeAnimationTimeline
    .fromTo(animationOnePaths, { drawSVG: 0 }, { drawSVG: '100%' })
    .fromTo(animationTwoPaths, { drawSVG: 0 }, { drawSVG: '100%' })
    .fromTo(animationThreePaths, { drawSVG: 0 }, { drawSVG: '100%' })
    .fromTo(animationFourPaths, { drawSVG: 0 }, { drawSVG: '100%' })
    .fromTo(animationFivePaths, { drawSVG: 0 }, { drawSVG: '100%' });
}

function homepageTreeAnimationThree() {
  const animationOne = document.querySelector('#homepage-tree-animation-three [data-name="Animation 1"]');
  const animationOnePaths = animationOne.querySelectorAll('path');

  const animationTwo = document.querySelector('#homepage-tree-animation-three [data-name="Animation 2"]');
  const animationTwoPaths = animationTwo.querySelectorAll('path');

  const animationThree = document.querySelector('#homepage-tree-animation-three [data-name="Animation 3"]');
  const animationThreePaths = animationThree.querySelectorAll('path');

  const animationFour = document.querySelector('#homepage-tree-animation-three [data-name="Animation 4"]');
  const animationFourPaths = animationFour.querySelectorAll('path');

  const animationFive = document.querySelector('#homepage-tree-animation-three [data-name="Animation 5"]');
  const animationFivePaths = animationFive.querySelectorAll('path');

  // TODO: Remove markers
  const treeAnimationTimeline = gsap.timeline({
    defaults: { duration: 1, ease: 'power3.inOut' },
    scrollTrigger: {
      trigger: '#homepage-tree-animation-three',
      id: 'Tree Animation',
      start: 'bottom bottom',
      end: 'top 5%',
      // markers: true,
      scrub: 0.5,
    },
  });

  treeAnimationTimeline
    .fromTo(animationOnePaths, { drawSVG: 0 }, { drawSVG: '100%' })
    .fromTo(animationTwoPaths, { drawSVG: 0 }, { drawSVG: '100%' })
    .fromTo(animationThreePaths, { drawSVG: 0 }, { drawSVG: '100%' })
    .fromTo(animationFourPaths, { drawSVG: 0 }, { drawSVG: '100%' })
    .fromTo(animationFivePaths, { drawSVG: 0 }, { drawSVG: '100%' });
}

function homepageTreeAnimationFour() {
  const animationOne = document.querySelector('#homepage-tree-animation-four [data-name="Animation 1"]');
  const animationOnePaths = animationOne.querySelectorAll('path');

  const animationTwo = document.querySelector('#homepage-tree-animation-four [data-name="Animation 2"]');
  const animationTwoPaths = animationTwo.querySelectorAll('path');

  const animationThree = document.querySelector('#homepage-tree-animation-four [data-name="Animation 3"]');
  const animationThreePaths = animationThree.querySelectorAll('path');

  const animationFour = document.querySelector('#homepage-tree-animation-four [data-name="Animation 4"]');
  const animationFourPaths = animationFour.querySelectorAll('path');

  const animationFive = document.querySelector('#homepage-tree-animation-four [data-name="Animation 5"]');
  const animationFivePaths = animationFive.querySelectorAll('path');

  // TODO: Remove markers
  const treeAnimationTimeline = gsap.timeline({
    defaults: { duration: 1, ease: 'power3.inOut' },
    scrollTrigger: {
      trigger: '#homepage-tree-animation-four',
      id: 'Tree Animation',
      start: 'bottom bottom',
      end: 'top 5%',
      // markers: true,
      scrub: 0.5,
    },
  });

  treeAnimationTimeline
    .fromTo(animationOnePaths, { drawSVG: 0 }, { drawSVG: '100%' })
    .fromTo(animationTwoPaths, { drawSVG: 0 }, { drawSVG: '100%' })
    .fromTo(animationThreePaths, { drawSVG: 0 }, { drawSVG: '100%' })
    .fromTo(animationFourPaths, { drawSVG: 0 }, { drawSVG: '100%' })
    .fromTo(animationFivePaths, { drawSVG: 0 }, { drawSVG: '100%' });
}

// *==============================================================================
// ** Utilities  **
// *==============================================================================
// * ScrollTrigger Refresh Initial
function scrollTriggerRefresh(time = 1000) {
  const scrollTriggerRefreshTarget = document.querySelectorAll('.scrolltrigger-refresh-target');
  window.addEventListener('load', () => {
    setTimeout(() => {
      console.log(`✨ ScrollTrigger refresh created after ${time}ms ✨`);
      scrollTriggerRefreshTarget.forEach((triggerElem) => {
        ScrollTrigger.create({
          trigger: triggerElem,
          start: 'top bottom',
          once: true,
          id: 'ScrollTrigger Refresh',
          onEnter: () => {
            ScrollTrigger.refresh();
            console.log('⚡ ScrollTrigger Refresh Triggered ⚡');
          },
        });
      });
    }, time);
  });
}

// *=========================================
// ** Exports **
// *=========================================

export {
  mainLogoAnimation,
  homepageTreeAnimationOne,
  homepageTreeAnimationTwo,
  homepageTreeAnimationThree,
  homepageTreeAnimationFour,
  scrollTriggerRefresh,
  pyramidDividerFunction,
  addMenuListener,
};

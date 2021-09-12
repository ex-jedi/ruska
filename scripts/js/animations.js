// *==============================================================================
// ** Imports  **
// *==============================================================================

import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { SplitText } from 'gsap/SplitText';

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

// match media for nav animation timing
const mediaSevenFifty = window.matchMedia('(max-width: 750px)');

// Change trigger points on screen size
let navAnimDuration = 0.8;
if (mediaSevenFifty.matches) {
  navAnimDuration = 0.5;
}

// Nav elements
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
    defaults: { ease: 'power2.in', duration: navAnimDuration, delay: 0 },
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
    defaults: { ease: 'power2.out', duration: navAnimDuration, delay: 0 },
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

// *=========================================
// ** Three image Wiper and Swapper **
// *=========================================

// ********** Three Image Swap **********

// * Image swapping GSAP Function
function swapThreeFunction(swapperImages) {
  // Create timeline
  const swapperThree = gsap.timeline({
    defaults: { duration: 0, ease: 'none' },
    paused: true,
    repeat: -1,
  });
  const delay = '+=0.8';

  // Populate timeline
  swapperThree
    .to(swapperImages[0], { autoAlpha: 0 }, delay)
    .to(swapperImages[1], { autoAlpha: 1 })
    .to(swapperImages[1], { autoAlpha: 0 }, delay)
    .to(swapperImages[2], { autoAlpha: 1 })
    .to(swapperImages[2], { autoAlpha: 0 }, delay)
    .to(swapperImages[0], { autoAlpha: 1 });

  return swapperThree;
}

// Swap on hover function
function threeSwapCallback(elem, images) {
  const swappingThree = swapThreeFunction(images);
  elem.addEventListener('mouseover', () => {
    swappingThree.resume();
  });
  elem.addEventListener('mouseleave', () => {
    swappingThree.pause();
  });
}

// Get elements to fade and swap
function getFadeSwapThreeImages() {
  const fadeAndSwapThreeElement = gsap.utils.toArray(document.querySelectorAll('.fade-and-swap-three'));
  return fadeAndSwapThreeElement;
}

// * Initial Image fade and swap Function
function fadeAndSwapThreeFunction(elem, swapperImages) {
  const faderSwapperThree = gsap.timeline({
    defaults: { duration: 0, ease: 'none' },
    onComplete: () => {
      threeSwapCallback(elem, swapperImages);
    },
  });
  const delay = '+=1';

  faderSwapperThree
    .set(elem, { opacity: 1 })
    .fromTo(
      elem,
      { clipPath: 'inset(0% 100% 0% 0%)' },
      { duration: 0.75, delay: 2, ease: 'circ.inOut', clipPath: 'inset(0% 0% 0% 0%)' }
    )
    .to(swapperImages[0], { autoAlpha: 0 }, delay)
    .to(swapperImages[1], { autoAlpha: 1 })
    .to(swapperImages[1], { autoAlpha: 0 }, delay)
    .to(swapperImages[2], { autoAlpha: 1 })
    .to(swapperImages[2], { autoAlpha: 0 }, delay)
    .to(swapperImages[0], { autoAlpha: 1 });

  return faderSwapperThree;
}

// Fade and swap three export function
function fadeAndSwapThreeExport() {
  // Get images
  const fadeAndSwapThreeElement = getFadeSwapThreeImages();
  fadeAndSwapThreeElement.forEach((images) => {
    gsap.set(images, { clipPath: 'inset(0% 100% 0% 0%)' });

    // Get sub images
    const gsapImages = gsap.utils.toArray(images.querySelectorAll('img'));
    ScrollTrigger.create({
      trigger: images,
      start: 'top 60%',
      end: 'bottom bottom',
      id: 'Three F & S Image',
      once: true,
      onEnter: () => fadeAndSwapThreeFunction(images, gsapImages).play(),
    });
  });
}

// *=========================================
// ** Split Text Fade Up  **
// *=========================================

// Cleaning up animation text
function cleanText(e) {
  if (typeof e === 'string') {
    return cleanText(document.querySelectorAll(e));
  }
  if (e[0] && e[0].innerHTML) {
    for (let i = 0; i < e.length; i++) {
      cleanText(e[i]);
    }
    return;
  }
  e.innerHTML = e.innerHTML
    .replace(/\-/g, '‑')
    .replace(/V/g, '‌V‌')
    .replace(/\./g, '‌.‌')
    .replace(/,/g, '‌,‌')
    .replace(/A/g, '‌A‌')
    .replace(/fi/g, 'f‌i');
}

const cleanTextCheck = document.querySelector('.split-text-fade-up');
if (cleanTextCheck) {
  console.log('Clean text cleanup!');
  cleanText('.split-text-fade-up');
}

function splitTextTlFunction(targetOne, targetTwo, splitRevert) {
  const splitTextFadeUpTl = gsap.timeline({
    defaults: { duration: 1, ease: 'power4.out' },
    onComplete: () => {
      console.log(splitRevert);
      splitRevert.revert();
    },
  });

  splitTextFadeUpTl
    .set(targetOne, { opacity: 1 })
    .set(targetTwo, { opacity: 0, y: 100 })
    .to(targetTwo, { opacity: 1, y: 0, stagger: 0.15, delay: 1 });
}

function splitTextFadeUpExport() {
  const splitTextFadeUpTargets = gsap.utils.toArray('.split-text-fade-up');

  splitTextFadeUpTargets.forEach((elem) => {
    const splitFadeUpElements = new SplitText(elem, { type: 'lines' });

    const splitTextLines = splitFadeUpElements.lines;

    gsap.set(splitTextLines, { opacity: 0, y: 20 });

    ScrollTrigger.create({
      trigger: elem,
      start: 'top center',
      end: 'bottom top',
      id: 'Split Text Animaton',
      once: true,
      markers: true,
      onEnter: () => splitTextTlFunction(elem, splitTextLines, splitFadeUpElements),
    });
  });
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
function scrollTriggerRefresh() {
  const scrollTriggerRefreshTarget = document.querySelectorAll('.scrolltrigger-refresh-target');
  window.addEventListener('load', () => {
    ScrollTrigger.refresh();
    console.log(`✨ ScrollTrigger refresh created ✨`);
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
  fadeAndSwapThreeExport,
  splitTextFadeUpExport,
};

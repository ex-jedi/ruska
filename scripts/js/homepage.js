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

  return { mainNav, mainNavLinks, mainNavTriggerWrapper, mainNavTrigger };
}

// * Open Menu

function menuOpenAnimation() {
  const { mainNav, mainNavLinks, mainNavTriggerWrapper, mainNavTrigger } = getNavElements();
  const openMenuTl = gsap.timeline({
    paused: true,
    // onComplete: navTextPointerEvents,
    defaults: { ease: 'power3.out', duration: 0.75, delay: 0 },
  });

  return openMenuTl.to(mainNav, { x: '0%' });
}

function navTriggerHandler() {
  const { mainNav, mainNavTrigger } = getNavElements();
  if (mainNav.dataset.state === 'closed') {
    mainNavTrigger.style.pointerEvents = 'none';
    menuOpenAnimation().restart();
    mainNav.dataset.state = 'open';
  }
  // else {
  //   mainNavTrigger.style.pointerEvents = 'none';
  //   closeMenuAnimation().restart();
  //   mainNav.dataset.state = 'closed';
  // }
}

function addMenuListener() {
  const { mainNavTrigger } = getNavElements();
  mainNavTrigger.addEventListener('click', navTriggerHandler);
}

addMenuListener();

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

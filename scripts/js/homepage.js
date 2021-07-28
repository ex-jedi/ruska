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
  const mainNavTrigger = document.querySelector('.main-nav-trigger');
  const mainNavCloser = document.querySelector('.main-nav-closer');

  return { mainNav, mainNavLinks, mainNavTrigger, mainNavCloser };
}

// * Open Menu

function menuOpenAnimation() {
  const { mainNav, mainNavLinks, mainNavCloser } = getNavElements();
  const openMenuTl = gsap.timeline({
    paused: true,
    // onComplete: navTextPointerEvents,
    defaults: { ease: 'power2.in', duration: 0.8, delay: 0 },
  });

  return openMenuTl
    .addLabel('start')
    .to(mainNav, { x: '0%' }, 'start')
    .to(mainNavCloser, { rotate: 180 }, 'start')
    .to(mainNavLinks, { y: '0%', opacity: 1, stagger: 0.1 }, '-=25%');
}

function closeMenuAnimation() {
  const { mainNav, mainNavLinks, mainNavCloser } = getNavElements();
  const closeMenuTl = gsap.timeline({
    paused: true,
    defaults: { ease: 'power2.out', duration: 0.8, delay: 0 },
  });

  return closeMenuTl
  .to(mainNavLinks, { y: 50, opacity: 0, stagger: { each: 0.15, from: 'end' } })
  .addLabel('end')
  .to(mainNav, { x: '-100%' }, 'end-=60%')
  .to(mainNavCloser, { rotate: -180 }, 'end-=60%');
}

// TODO: Make inline if this is all you need
function navOpenerHandler() {
  menuOpenAnimation().play();
}

function navCloserHandler() {
  closeMenuAnimation().play();
}

function addMenuListener() {
  const { mainNavTrigger, mainNavCloser } = getNavElements();
  mainNavTrigger.addEventListener('click', navOpenerHandler);
  mainNavCloser.addEventListener('click', navCloserHandler);
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

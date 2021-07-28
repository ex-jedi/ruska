// TODO: Remove GSAP Imports
import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

// *=========================================
// ** GSAP  **
// *=========================================
gsap.registerPlugin(CSSRulePlugin, ScrollTrigger, DrawSVGPlugin);

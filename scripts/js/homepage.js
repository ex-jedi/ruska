// *==============================================================================
// ** Imports  **
// *==============================================================================

import * as Flickity from 'flickity';
import 'flickity-imagesloaded';
import { homepageParallax } from './animations';
import { displayInstagramFeed } from './utils';

// *==============================================================================
// ** Page JS  **
// *==============================================================================

// *==============================================================================
// ** Imported  **
// *==============================================================================

// ********** Homepage Parallax **********

homepageParallax();

// ********** Instagram Feed **********

displayInstagramFeed();

// ********** Flickity **********
const carousel = document.querySelector('.main-carousel');
const flkty = new Flickity(carousel, {
  imagesLoaded: true,
  autoPlay: 10000,
  prevNextButtons: false,
  wrapAround: true,
  selectedAttraction: 0.006,
  friction: 0.15,
});

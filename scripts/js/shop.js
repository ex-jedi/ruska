// *==============================================================================
// ** Shop  **
// *==============================================================================

// *=========================================
// ** Imports  **
// *=========================================

import {
  pyramidDividerFunction,
  mainLogoAnimation,
  scrollTriggerRefresh,
  addMenuListener,
  splitTextFadeUpExport,
  simpleFadeIn,
} from './animations';

import { displayInstagramFeed, cookieWarning } from './utils';

// *=========================================
// ** Import Functions  **
// *=========================================

// ********** Animation **********

mainLogoAnimation();

pyramidDividerFunction();

scrollTriggerRefresh();

addMenuListener();

splitTextFadeUpExport();

simpleFadeIn();

// ********** Lib **********
displayInstagramFeed();

cookieWarning();
const dropdownPanels = document.querySelectorAll('.dropdown-panel');
console.log(dropdownPanels);
const dropdownTrigger = document.querySelectorAll('.shop-dropdown-trigger');
dropdownTrigger.forEach((trigger) => {
  trigger.addEventListener('click', (e) => {
    const clickedPanel = e.currentTarget.dataset.name;
    trigger.classList.toggle('shop-dropdown-trigger-reveal');
    console.log(`${clickedPanel} clicked!`);

    dropdownPanels.forEach((panel) => {
      if (panel.id === clickedPanel) {
        panel.classList.toggle('dropdown-panel-reveal');
      }
    });
  });
});

import {items} from "./items.js";
import {getTabs, toFavorite} from "./tabs.js";
import {accordionFilter, showFilter} from "./filter.js";
import {modalSwitcher, getDetails} from "./modal.js";
import {showSlides, slideIndex} from "./slider.js";
import {searchInput} from "./search.js";
import {selectId, clickCart} from "./cart.js";

function init() {
  toFavorite();
  showFilter();
  modalSwitcher();
  getDetails(items);
  showSlides(slideIndex);
  searchInput();
  clickCart();
  selectId();
}

document.addEventListener('DOMContentLoaded', function () {
  getTabs(items, toFavorite);
  setTimeout(init, 1000);

  accordionFilter();
});


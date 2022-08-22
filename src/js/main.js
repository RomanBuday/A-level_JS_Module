import {items} from "./items.js";
import {getTabs, toFavorite} from "./tabs.js";
import {accordionFilter, showFilter} from "./filter.js";
import {modalSwitcher, getDetails} from "./modal.js";
import {showSlides, slideIndex} from "./slider.js";
import {searchInput} from "./search.js";
import {selectId, getCart, clickCart} from "./cart.js";

document.addEventListener('DOMContentLoaded', function () {
  getTabs(items, toFavorite);
  setTimeout(toFavorite, showFilter, modalSwitcher, getDetails,
    showSlides, searchInput, getCart, clickCart, selectId, 1000);

  accordionFilter();
  showFilter();
  modalSwitcher();

  showSlides(slideIndex);

  getDetails(items);

  searchInput();

  getCart(items);
});

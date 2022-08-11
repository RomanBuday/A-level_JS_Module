import {items} from "./items.js";
import {getTabs, toFavorite} from "./tabs.js";
import {accordionFilter, showFilter, priceFilter} from "./filter.js";
import {modalSwitcher, getDetails} from "./modal.js";
import {showSlides, slideIndex} from "./slider.js";
import {searchInput} from "./search.js";

// let tabItems = [...items];
// let filterState = {
//   minPrice(),
//   render(),
// };

document.addEventListener('DOMContentLoaded', function () {
  getTabs(items, toFavorite);
  setTimeout(toFavorite, showFilter, modalSwitcher, getDetails, showSlides, searchInput, priceFilter, 1000);

  accordionFilter();
  showFilter();
  priceFilter();
  modalSwitcher();

  showSlides(slideIndex);

  getDetails(items);

  searchInput();
});

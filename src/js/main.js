import {items} from "./items.js";
import {getTabs, toFavorite} from "./tabs.js";

document.addEventListener('DOMContentLoaded', function () {
  getTabs(items, toFavorite);
  setTimeout(toFavorite, 1000);
});


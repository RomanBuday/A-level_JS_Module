import {items} from "./items.js";
import {getTabs} from "./tabs.js";
import {toFavorite} from "./tabs.js";

document.addEventListener('DOMContentLoaded', function () {
  getTabs(items, toFavorite);

});


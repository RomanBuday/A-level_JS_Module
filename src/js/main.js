import {items} from "./items.js";
import {getTabs} from "./tabs.js";
import {likeSwitcher} from "./tabs.js";

document.addEventListener('DOMContentLoaded', function () {
  getTabs(items, likeSwitcher);

});


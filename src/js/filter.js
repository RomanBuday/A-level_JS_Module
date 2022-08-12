import {items} from "./items.js";

export function accordionFilter() {
  const accordionBtns = document.querySelectorAll(".filter-title");

  accordionBtns.forEach((accordion) => {
    accordion.onclick = function () {
      this.classList.toggle("is-open");
      let content = this.nextElementSibling;

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    };
  });
}

export function showFilter() {
  const filterBtn = document.querySelector(".goods-search_filter");
  const filterAside = document.querySelector(".goods-filter");
  const showItems = document.querySelectorAll(".goods-item");

  filterBtn.addEventListener('click', e => {
    if (filterBtn.classList.contains("filter-hide")) {
      filterBtn.classList.remove("filter-hide");
      filterAside.classList.remove("hide");
      filterAside.classList.add("show");
      for(let i = 0, length = showItems.length; i < length; i ++) {
        showItems[i].style.width =  "48%";
      }
    } else {
      filterBtn.classList.add("filter-hide");
      filterAside.classList.add("hide");
      filterAside.classList.remove("show");
      for(let i = 0, length = showItems.length; i < length; i ++) {
        showItems[i].style.width =  "30%";
      }
    }
  });
}

//-----------------------------------------------

// function priceRange() {
//   let maxPrice = 0;
//   let minPrice = 0;

//   let items = document.querySelectorAll('.goods-item');

//   let arrPrice = [];

//   items.forEach(item => {
//     let priceStr = item.querySelector('.price-sum').textContent;
//     arrPrice.push(parseInt(priceStr.match(/\d+/)));
//     maxPrice = Math.max(...arrPrice);
//     minPrice = Math.min(...arrPrice);
//   });

//   document.querySelector(`.price-inner_input[data-price = 'minPrice']`).placeholder = minPrice;
//   document.querySelector(`.price-inner_input[data-price = 'maxPrice']`).placeholder = maxPrice;

// }

export function priceRange() {
  let maxPrice = 0;
  let minPrice = 0;

  let items = document.querySelectorAll('.goods-item');

  let arrPrice = [];

  items.forEach(item => {
    let priceStr = item.querySelector('.price-sum').textContent;
    arrPrice.push(parseInt(priceStr.match(/\d+/)));
    maxPrice = Math.max(...arrPrice);
    minPrice = Math.min(...arrPrice);
  });

  document.querySelector(`.price-inner_input[data-price = 'minPrice']`).placeholder=minPrice;
  document.querySelector(`.price-inner_input[data-price = 'maxPrice']`).placeholder=maxPrice;
}

function getFiltersDataForBlock(contentClassName) {
  const nodeList = document.querySelectorAll(`.filter-content ${contentClassName} input[type="checkbox"]`);
  const nodesArray = Array.from(nodeList);
  const checked = nodesArray.filter(input => input.checked);
  const values = checked.map(el => el.value);

  return values;
}

function getAllFiltersSelected() {
  const result = {
    color: getFiltersDataForBlock('.content-color'),
    storage: getFiltersDataForBlock('.content-memory'),
    os: getFiltersDataForBlock('.content-os'),
    display: getFiltersDataForBlock('.content-display'),
  };

  return result;
}

export function priceFilter() {

  priceRange();
}


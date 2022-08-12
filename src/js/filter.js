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

  document.querySelectorAll('.filter-content input[type="checkbox"]')
  .forEach(checkbox => checkbox.addEventListener('change', onFilterChange));
  document.querySelectorAll('.filter-content > .content-price input')
  .forEach(input => input.addEventListener('input', onPriceFilterChange));
}

//-----------------------------------------------

function priceRange() {
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


const filterFunctions = {
  color: (filtersValue, item) => {
    for (const filter of filtersValue) {
      for (const itemColor of item.color) {
        if (itemColor.toLocaleLowerCase().includes(filter.toLowerCase())) {
          return true;
        }
      }
    }
    return false;
  },
  storage: (filtersValue, item) => {
    return item.storage && filtersValue.includes(String(item.storage));
  },
  os: (filtersValue, item) => {
    return item.os && filtersValue.map(x => x.toLowerCase()).includes(item.os.toLowerCase());
  },
  display: (filtersValue, item) => {
    if (!item.display) {
      return false;
    }
    for (const displayRange of filtersValue) {
      const [min, max] = displayRange.split('|');
      if (item.display > min && item.display < max) {
        return true;
      }
    }
    return false;
  }
};

export function onFilterChange() {
  const currentFilteresSelected = getAllFiltersSelected();
  console.log('-- filteres selected', currentFilteresSelected);

  const minSelected = document.querySelector(`.filter-content > .content-price input[data-price="minPrice"]`).value;
  const maxSelected = document.querySelector(`.filter-content > .content-price input[data-price="maxPrice"]`).value;

  const domItems = document.querySelectorAll('.goods-item');

  domItems.forEach(domItem => {
    const id = domItem.querySelector('.top-item_img').getAttribute('data-id');
    const item = getItemById(id);
    if (!item) {
      console.error(`!!missing item ${id}`);
    }

    domItem.style.display = '';

    Object.keys(currentFilteresSelected).forEach(filterName => {
      const filtersValue = currentFilteresSelected[filterName];
      if (filtersValue.length > 0) {
        const filterCallback = filterFunctions[filterName];
        const showFlag = filterCallback(filtersValue, item);
        if (!showFlag) {
          domItem.style.display = 'none';
        }
      }
    });

    if ((minSelected !== '' && item.price < Number(minSelected)) || (maxSelected !== '' && item.price > Number(maxSelected))) {
      domItem.style.display = 'none';
    }

  });
}

function onPriceFilterChange(e) {
  // const min = document.querySelector(`.filter-content > .content-price input[data-price="minPrice"]`);
  // const max = document.querySelector(`.filter-content > .content-price input[data-price="maxPrice"]`);
  // if (!min.value || Number(min.value) < minPrice) {
  //   min.value = minPrice;
  // }
  // if (!max.value || Number(max.value) > maxPrice) {
  //   max.value = maxPrice;
  // }

  // if (min.value > max.value) {
  //   max.value = min.value;
  // }

  onFilterChange(e);
}




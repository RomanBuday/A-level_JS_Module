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

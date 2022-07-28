export function getTabs(url, fn) {
  let data = url;
  data.forEach((el, index) => {
    generateTabs(
      data[index].imgUrl,
      data[index].name,
      data[index].orderInfo.inStock,
      data[index].price,
      data[index].orderInfo.reviews,
      data[index].orderInfo.orders);
  });
  // fn();
}

export function createTab(imgUrl, name, inStock, price, reviews, orders) {
  return `
    <div class="goods-item">
      <div class="top-item">
        <img class="top-item_like double" loading="lazy" src="img/svg/like_empty.svg" alt="like icon">
        <img class="top-item_img" loading="lazy" src="./img/${imgUrl}" alt="item image">
        <h2 class="top-item_title title title_fz24">${name}</h2>
        <div class="top-item_status">
          <img class="status-img" src=${inStockSwitcher(inStock)} loading="lazy" alt="in stock icon">
          <span class="status-quantity">${inStock}</span>left in stock
        </div>
        <div class="top-item_price">
          <span class ="price-text">Price:</span>
          <span class="price-sum">${price} $</span>
        </div>
        <button class="btn top-item_btn">Add to cart</button>
      </div>
      <div class="bottom-item">
        <img class="bottom-item_filledlike" loading="lazy" src="img/svg/like_filled_red.svg" alt="icon like filled">
        <div class="bottom-item_reviews">
          <span class="reviews-percent"><span>${reviews}%</span>Positive reviews</span>
          <span class="reviews-above">Above avarage</span>
        </div>
        <div class="bottom-item_order">
          <span class="order-quantity">${orders}</span>orders
        </div>
      </div>
    </div>`;
}

export function generateTabs(imgUrl, name, inStock, price, reviews, orders) {
  const store = document.querySelector('.goods-store');
  store.insertAdjacentHTML('beforeend', createTab(imgUrl, name, inStock, price, reviews, orders));
}

export function toFavorite() {
  document.querySelectorAll('.top-item_like').forEach(el => {
    el.addEventListener('click', e => {
      if(el.classList.contains('double')){
        el.src = "img/svg/like_filled.svg";
        el.classList.remove('double');
      }
      else {
        el.src = "img/svg/like_empty.svg";
        el.classList.add('double');
      }
    });
  });
}


function inStockSwitcher(inStock) {
  if(inStock > 0) {
    return "img/svg/check.svg";
  } else {
    return "img/svg/check_zero.svg";
  }
}

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
  fn();
}

export function createTab(imgUrl, name, inStock, price, reviews, orders) {
  return `
    <div class="goods-items">
      <div class="goods-items-top">
        <img class="goods-items-top_like" loading="lazy" src="img/svg/like_empty.svg" alt="">
        <img class="goods-items-top_img" loading="lazy" src="./img/${imgUrl}" alt="">
        <h2 class="goods-items-top_title title title_fz24">${name}</h2>
        <span class="goods-items-top_status title_fz14">
          <img class="goods-items-top_status__img" loading="lazy" src="img/svg/check.svg" alt="">
          <span class="goods-items-top_status__quantity">${inStock}</span>left in stock
        </span>
        <span class="goods-items-top_price title_fz14">Price:
          <span class="goods-items-top_price__sum">${price} $</span>
        </span>
        <button class="btn goods-items-top_btn">Add to cart</button>
      </div>

      <div class="goods-items-bottom">
        <img class="goods-items-bottom_filledlike" loading="lazy" src="img/svg/like_filled_red.svg" alt="">
        <div class="goods-items-bottom_reviews title_fz14">
          <span class="goods-items-bottom_reviews__percent"><span>${reviews}%</span>Positive reviews</span>
          <span class="goods-items-bottom_reviews__above">Above avarage</span>
        </div>
        <span class="goods-items-bottom_order title_fz14">
          <span class="goods-items-bottom_order__quantity">${orders}</span>orders
        </span>
      </div>
    </div>`;
}

export function generateTabs(imgUrl, name, inStock, price, reviews, orders) {
  const store = document.querySelector('.goods-store');
  store.insertAdjacentHTML('beforeend', createTab(imgUrl, name, inStock, price, reviews, orders));

  checkInStock(inStock);
}

export function likeSwitcher() {
  document.querySelectorAll('.goods-items-top_like').forEach(el => {
    el.addEventListener('click', e => {
      el.src = "img/svg/like_filled_red.svg";
    });
  });
}

function checkInStock(item) {
  document.querySelectorAll('.goods-items-top_status__img').forEach(el => {
    console.log(item);
    if (item == 0) {
      el.src = "img/svg/check_zero.svg";
    } else {
      el.src = "img/svg/check.svg";
    }
  });
}

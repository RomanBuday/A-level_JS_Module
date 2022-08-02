export function modalSwitcher() {
  const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal');

  modalTrigger.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.classList.add('show');
      modal.classList.remove('hide');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }

  document.addEventListener('keydown', (e) => {
    if(e.code === "Escape") {
      closeModal();
    }
  });

  modal.addEventListener('click', (e) => {
    if(e.target === modal && modal.classList.contains('show')) {
      closeModal();
    }
  });
}

export function showDetails(imgUrl, name, reviews, orders, color, os, chip, height,
width, depth, weight, price, inStock) {
  return `
    <div class="modal-content fade">
      <div class="modal-content_left">
        <div class="modal-content_img">
          <img src="./img/${imgUrl}" alt="item img">
        </div>
      </div>

      <div class="modal-content_center">
        <div class="modal-content_descr">
          <h2 class="descr-title title_fz24">${name}</h2>
          <div class="descr-item bottom-item">
            <img class="descr-item_filledlike bottom-item_filledlike" loading="lazy"
              src="img/svg/like_filled_red.svg" alt="icon like filled">
            <div class="descr-item_reviews bottom-item_reviews">
              <span class="descr-item_percent reviews-percent"><span>${reviews}%</span>Positive reviews</span>
              <span class="descr-item_above reviews-above">Above avarage</span>
            </div>
            <div class="descr-item_order bottom-item_order">
              <span class="descr-item_quantity order-quantity">${orders}</span>orders
            </div>
          </div>

          <ul class="descr-list">
            <li class="descr-list_item">Color: <span>${color.join(', ')}</span></li>
            <li class="descr-list_item">Operating System: <span>${os}</span></li>
            <li class="descr-list_item">Chip: <span>${chip}</span></li>
            <li class="descr-list_item">Height: <span>${height}</span> cm</li>
            <li class="descr-list_item">Width: <span>${width}</span> cm</li>
            <li class="descr-list_item">Depth: <span>${depth}</span> cm</li>
            <li class="descr-list_item">Weight: <span>${weight * 1000}</span> g</li>
          </ul>
        </div>
      </div>

      <div class="modal-content_right">
        <span class="modal-content_price price-sum">$ ${price}</span>
        <span class="modal-content_quantity status-quantity">Stock: <span>${inStock}</span> pcs.</span>
        <button class="modal-content_btn btn">Add to cart</button>
      </div>
    </div>`;
}

export function generateModal(imgUrl, name, reviews, orders, color, os, chip, height,
  width, depth, weight, price, inStock) {
  const modal = document.querySelector('.modal-container');
  modal.insertAdjacentHTML('beforeend', showDetails(imgUrl, name, reviews, orders, color, os, chip, height,
    width, depth, weight, price, inStock));
}

export function getDetails(url, fn) {

  let data = url;

  data.forEach((el, index) => {
    generateModal(
      data[index].imgUrl,
      data[index].name,
      data[index].orderInfo.reviews,
      data[index].orderInfo.orders,
      data[index].color,
      data[index].os,
      data[index].chip.name,
      data[index].size.height,
      data[index].size.width,
      data[index].size.depth,
      data[index].size.weight,
      data[index].price,
      data[index].orderInfo.inStock);
  });
  // fn();
}

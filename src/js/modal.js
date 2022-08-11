export function modalSwitcher() {
  const modalTrigger = document.querySelectorAll('.top-item_img'),
               modal = document.querySelector('.modal');

  modalTrigger.forEach(btn => {
    btn.addEventListener('click', e  => {
      modal.classList.add('show');
      modal.classList.remove('hide');

      const id = e.target.getAttribute('data-id');
      const modalToShow = document.querySelectorAll(`.modal-content[data-id="${id}"]`)[0];
      const allModals = modal.querySelectorAll('.modal-content');

      allModals.forEach(m => {
        m.classList.add('hide');
        m.classList.remove('showFlex');
      });

      modalToShow.classList.remove('hide');
      modalToShow.classList.add('showFlex');
      document.body.style.overflow = 'hidden';
    });
  });

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

function closeModal() {
  const modal = document.querySelector('.modal');
  modal.classList.add('hide');
  modal.classList.remove('show');
  document.body.style.overflow = '';
}


function showDetails(imgUrl, name, reviews, orders, color, os, chip, height,
width, depth, weight, price, inStock, id) {
  return `
    <div class="modal-content fade" data-id="${id}">
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
        <button class="modal-content_btn btn ${inStockCheckModal(inStock)}">Add to cart</button>
      </div>
    </div>`;
}

function generateModal(imgUrl, name, reviews, orders, color, os, chip, height,
  width, depth, weight, price, inStock, id) {
  const modal = document.querySelector('.modal-container');

  modal.insertAdjacentHTML('beforeend', showDetails(imgUrl, name, reviews, orders, color, os, chip, height,
    width, depth, weight, price, inStock, id));
}

export function getDetails(items) {
  items.forEach((el => {
      generateModal(
        el.imgUrl,
        el.name,
        el.orderInfo.reviews,
        el.orderInfo.orders,
        el.color,
        el.os,
        el.chip.name,
        el.size.height,
        el.size.width,
        el.size.depth,
        el.size.weight,
        el.price,
        el.orderInfo.inStock,
        el.id);
  }));
}

function inStockCheckModal(inStock) {
  if(inStock == 0) {
    return "btn-unset";
  }
}

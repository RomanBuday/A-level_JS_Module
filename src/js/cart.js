const store = document.querySelector('.cart');
const item = document.querySelector('.cart-item');
const arr = [];

export function showCart() {
  const cartBtn = document.querySelector('.header-top_cart');
  cartBtn.addEventListener('click', () => {
    store.classList.add('show');
    store.classList.remove('hide');


    document.addEventListener('keydown', function(e) {
      if(e.code === 'Escape' ){
        store.classList.add('hide');
        store.classList.remove('show');
      }
    });
  });
}

export function selectId() {
  document.querySelectorAll('.top-item_btn').forEach(el => {
      el.addEventListener('click', () => {
      console.log(el.parentElement.id);
      addStorage(el.parentElement.id);
      });
  });
}

export function createCart(id, imgUrl, name, price) {
  const addHtml = `
    <div class="item-img data-id="${id}">
      <img src="/img/${imgUrl}" alt="item img">
    </div>
    <div class="item-descr">
      <h3 class="descr-title title_fz12">${name}</h3>
      <div class="descr-price">
        <span class="descr-price_sum">${price}</span>
      </div>
    </div>
    <div class="item-counter">
      <button class="item-counter_minus">V</button>
      <span class="item-counter_quantity">1</span>
      <button class="item-counter_plus">V</button>
      <button class="item-counter_remove">X</button>
    </div>
  `;
  item.insertAdjacentHTML('beforeend', addHtml);
}

function addStorage(id) {
  arr.push(id);
  localStorage.setItem('ID', arr);
  getStorageData();
}

function getStorageData() {
  if(localStorage.getItem('ID')) {
      document.querySelector('.top-item_title').textContent = localStorage.getItem('ID');
  } else {
      //document.querySelector('.top-item_title').textContent = 0;
  }
  //clearStorage();
}

getStorageData();

// function clearStorage() {
//   document.querySelector('.item-counter_remove').addEventListener('click', () => {
//       localStorage.removeItem('ID');
//       getStorageData();
//   });
// }

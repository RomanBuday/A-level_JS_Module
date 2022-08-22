const store = document.querySelector('.cart');
const item = document.querySelector('.cart-item');
const arr = [];

export function clickCart() {
  const cartBtn = document.querySelector('.header-top_cart');
  cartBtn.addEventListener('click', (e) => {
    store.classList.add('show');
    store.classList.remove('hide');

    const id = e.target.getAttribute('data-id');
    const itemToShow = document.querySelectorAll(`.modal-content[data-id="${id}"]`)[0];

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
      //addStorage(el.parentElement.id);
      });
  });
}

function showCart(id, imgUrl, name, price) {
  return `
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
}

function generateCart(id, imgUrl, name, price) {
  item.insertAdjacentHTML('beforeend', showCart(id, imgUrl, name, price));
}

export function getCart(items) {
  items.forEach((el => {
      generateCart(
        el.id,
        el.imgUrl,
        el.name,
        el.price,);
  }));
}

// function addStorage(id) {
//   arr.push(id);
//   localStorage.setItem('ID', arr);
//   getStorageData();
// }

//function getStorageData() {
 // if(localStorage.getItem('ID')) {
      // document.querySelector('.top-item_title').textContent = localStorage.getItem('ID');
 // } else {
      //document.querySelector('.top-item_title').textContent = 0;
 // }
  //clearStorage();
//}

// getStorageData();

// function clearStorage() {
//   document.querySelector('.item-counter_remove').addEventListener('click', () => {
//       localStorage.removeItem('ID');
//       getStorageData();
//   });
// }

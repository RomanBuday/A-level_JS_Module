import {getItemById} from "./items.js";
const store = document.querySelector('.cart');
const uiCart = document.querySelector('.cart-item');

function renderItem(id, imgUrl, name, price, count) {
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
    <div class="item-counter" data-id="${id}">
      <button class="item-counter_minus">V</button>
      <span class="item-counter_quantity">${count}</span>
      <button class="item-counter_plus">V</button>
      <button class="item-counter_remove">X</button>
    </div>
  `;
}

function generateCartItem(item, count) {
  const {id, imgUrl, name, price} = item;
  uiCart.insertAdjacentHTML('beforeend', renderItem(id, imgUrl, name, price, count));
}

export function addItemToCart(itemId) {
  const cart = getFromLocalStorage();
  const {count} = cart?.items?.find(i => i.id == itemId) || {count: 0};

  const otherItems = cart?.items?.filter(i => i.id !== itemId) || [];
  const newCart = {
    ...cart,
    items: [
      ...otherItems,
      {
        id: itemId,
        count: count + 1
      }
    ]
  };
  saveToLocalStorage(newCart);
  showCart();
}

function decItemFromCart(itemId) {
  const cart = getFromLocalStorage();
  const {count} = cart.items.find(i => i.id == itemId) || {count: 0};

  const otherItems = cart.items.filter(i => i.id !== itemId);
  const newCart = {
    ...cart,
    items: [
      ...otherItems,
      {
        id: itemId,
        count: count - 1,
      }
    ].filter(i => i.count > 0)
  };
  saveToLocalStorage(newCart);
  showCart();
}

function removeItemFromCart(itemId) {
  const cart = getFromLocalStorage();
  const otherItems = cart.items.filter(i => i.id !== itemId);
  const newCart = {
    ...cart,
    items: otherItems,
  };
  saveToLocalStorage(newCart);
  showCart();
}

function getFromLocalStorage() {
  const str = localStorage.getItem('cart');
  const result = JSON.parse(str);
  console.log('getting cart from localStorage', result);
  return result;
}

function saveToLocalStorage(data) {
  const storageData = JSON.stringify(data);
  return localStorage.setItem('cart', storageData);
}

function renderCart() {
  const cart = getFromLocalStorage();
  uiCart.innerHTML = '';
  if (cart && cart.items && cart.items.length > 0) {
  //if (cart?.items?.length) {
    cart.items.forEach((el => {
      const item = getItemById(el.id);
      generateCartItem(item, el.count);
    }));
  }
  const removeButtons = document.querySelectorAll('.item-counter_remove');
  removeButtons.forEach(button => button.addEventListener('click', e => {
    const idToDelete = e.target.parentElement.getAttribute('data-id');
    removeItemFromCart(Number(idToDelete));
  }));
  const minusButtons = document.querySelectorAll('.item-counter_minus');
  minusButtons.forEach(button => button.addEventListener('click', e => {
    const idToDelete = e.target.parentElement.getAttribute('data-id');
    decItemFromCart(Number(idToDelete));
  }));
  const plusButtons = document.querySelectorAll('.item-counter_plus');
  plusButtons.forEach(button => button.addEventListener('click', e => {
    const idToDelete = e.target.parentElement.getAttribute('data-id');
    addItemToCart(Number(idToDelete));
  }));
}

function showCart() {
  renderCart();
  store.classList.add('show');
  store.classList.remove('hide');
}

export function clickCart() {
  const sliderBtn = document.querySelectorAll(".header-bottom_btn");
  sliderBtn.forEach(b => b.addEventListener('click', e => {
    const id = e.target.getAttribute('data-id');
    addItemToCart(Number(id));
  }));


  const cartBtn = document.querySelector('.header-top_cart');
  cartBtn.addEventListener('click', (e) => {
    showCart();

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
        const id = el.parentElement.getAttribute('data-id');
        addItemToCart(Number(id));
      });
  });
}

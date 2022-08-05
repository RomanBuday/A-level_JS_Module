let input = document.querySelector('.goods-search_input'),
    searchBtn = document.querySelector('.goods-search_icon'),
    searchItems = document.querySelectorAll('.goods-item');

function searchFunc() {
  let searchValue = input.target.value.trim();
  let search = new RegExp(searchValue, '/'+input+'/g');

  if (searchValue.length < 3) {
    searchItems.forEach((el) => {
      el.classList.remove('hide');
    });
    return;
  }

  searchItems.forEach((el) => {
    const searchCard = el.querySelector('.top_item');
    const cardText = searchCard.textContent;
    const isContainSearch = search.test(cardText);

    if(!isContainSearch) {
      el.classList.add('hide');
    } else {
      el.classList.remove('hide');
    }
  });
}

export function startSearch() {
  searchBtn.addEventListener('click', (e) => {
    searchFunc();
  });
}

export function searchInput() {
  input.addEventListener('input', (ev) => {
    searchFunc();
  });
}

let input = document.querySelector('.goods-search_input');

function searchFunc(filter) {
  let items = document.querySelectorAll('.goods-item');

  items.forEach(item => {
    const title = item.querySelector('.top-item_title').innerHTML;
    if (title.toLowerCase().indexOf(filter) !== -1) {
      item.style.display = '';
    }
    else {
      item.style.display = 'none';
    }
  });
}

export function searchInput() {
  input.addEventListener('input', (ev) => {
    const filterStr = ev.target.value.toLowerCase().trim();
    if(filterStr.length >= 3 || filterStr.length == 0) {
      searchFunc(filterStr);
    }
  });
}


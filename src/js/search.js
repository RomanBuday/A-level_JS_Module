let input = document.querySelector('.goods-search_input');
    // searchBtn = document.querySelector('.goods-search_icon'),
    // searchItems = document.querySelectorAll('.goods-item');

// function searchFunc() {
//   let searchValue = input.target.value.trim();
//   let search = new RegExp(searchValue, '/'+input+'/g');

//   console.log(search);
//   if (searchValue.length < 3) {
//     searchItems.forEach((el) => {
//       el.classList.remove('hide');
//     });
//     return;
//   }

//   searchItems.forEach((el) => {
//     const searchCard = el.querySelector('.top_item');
//     const cardText = searchCard.textContent;
//     const isContainSearch = search.test(cardText);

//     if(!isContainSearch) {
//       el.classList.add('hide');
//     } else {
//       el.classList.remove('hide');
//     }
//   });
// }s

function searchFunc(filter) {
  //let filter = input.value.trim();
  let items = document.querySelectorAll('.goods-item');
  //console.log(itemTitle);

  items.forEach(item => {
    const title = item.querySelector('.top-item_title').innerHTML;
    if (title.toLowerCase().indexOf(filter) !== -1) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
}

// export function startSearch() {
//   searchBtn.addEventListener('click', (e) => {
//     searchFunc();
//   });
// }

export function searchInput() {
  input.addEventListener('input', (ev) => {
    const filterStr = ev.target.value.trim();
    if(filterStr.length >= 3) {
      searchFunc(filterStr);
    }
  });
}

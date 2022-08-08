let input = document.querySelector('.goods-search_input'),
    searchBtn = document.querySelector('.goods-search_icon'),
    searchItems = document.querySelectorAll('.goods-item');

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
// }

function searchFunc() {
  let filter = input.value.trim();
  let itemTitle = document.querySelectorAll('.top-item_title');
  //console.log(itemTitle);

  itemTitle.forEach(item => {
    if (item.innerHTML.toLowerCase().indexOf(filter) > -1) {
      item.style.display = '';

      //console.log(searchItems);

      searchItems.forEach(item => {
        console.log(searchItems);
        item.classList.add('show');
        // searchItems.style.display = '';
      });
    } else {
      item.style.display = 'none';

      searchItems.forEach(item => {
        item.classList.add('hide');
        // searchItems.style.display = 'none';
      });
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

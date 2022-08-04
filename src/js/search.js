let input = document.querySelector('.goods-search_input'),
    searchBtn = document.querySelector('.goods-search_icon'),
    searchItems = document.querySelectorAll('.goods-item');

function searchFunc() {
  input.addEventListener('input', (ev) => {
    let value = ev.target.value.trim();
    let search = new RegExp(value, 'gi');

    if (value.length < 3) {
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
  });
}

export function startSearch() {
  searchBtn.addEventListener('click', (e) => {
    searchFunc();
  });
}

// let localeHTML;

// export function saveBody() {
//   const localeHtml = document.body.innerHTML;
// }

// function FindOnPageBack() {
//   document.body.innerHTML = localeHTML;
// }

// function findOnPageGo() {
//   let search = '/'+input+'/g';
//   let pr = document.body.innerHTML;
//   let result = pr.match(/>(.*?)</g);
//   let resultArr = [];

//   let warning = true;
//   for(let i = 0; i < result.length; i++) {
//     if(result[i].match(eval(search))!=null) {
//       warning = false;
//     }
//   }

//   if(warning == true) {
//     alert('Не найдено ни одного совпадения');
//   }

//   for(let i=0; i<result.length; i++) {
//     resultArr[i] = result[i].replace(eval(search), console.log(input));
//   }

//   for(let i=0; i<result.length;i++) {
//     pr = pr.replace(result[i],resultArr[i]);
//     console.log(pr);
//   }

//   document.body.innerHTML = pr;
// }

// function searchItems(name, status) {

//   if(input.length < 3 && status == true) {
// 		alert('Для поиска вы должны ввести три или более символов');
// 		FindOnPageBack ();
// 	}

//   if(input.lenght >= 3) {
//     findOnPageGo();
//   }

//   //FindOnPageBack();

//   if(status) {
//     //FindOnPageBack();
//     FindOnPageGo();
//   }

// 	if(!status) {
//     //FindOnPageBack();
//   }
// }

// export function startSearch() {
//   searchBtn.addEventListener('click', (e) => {
//     e.preventDefault();
//     searchItems(input);
//   });
// }

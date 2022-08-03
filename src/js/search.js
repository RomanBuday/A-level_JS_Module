let input = document.querySelector('.goods-search_input').value,
    searchBtn = document.querySelector('.goods-search_icon'),
    searchItem = document.querySelectorAll('goods-item');

console.log(input);

function saveBody() {
  const localeHtml = document.body.innerHTML;
}

function searchItems(name, status) {

  if(input.length < 3 && status == true) {
		alert('Для поиска вы должны ввести три или более символов');
		function FindOnPageBack() {
      document.body.innerHTML = localeHTML;
    }
	}

  if(input.lenght >= 3) {
    function findOnPageGo() {
      let search = '/'+input+'/g';
      let pr = document.body.innerHTML;
      let result = pr.match(/>(.*?)</g);
      let resultArr = [];

      let warning = true;
			for(let i = 0; i < result.length; i++) {
				if(result[i].match(eval(search))!=null) {
					warning = false;
				}
			}

			if(warning == true) {
				alert('Не найдено ни одного совпадения');
			}

      for(let i=0; i<result.length; i++) {
        resultArr[i] = result[i].replace(eval(search), console.log(input));
      }

      for(let i=0; i<result.length;i++) {
        pr = pr.replace(result[i],resultArr[i]);
      }

      document.body.innerHTML = pr;

    }
  }

  function FindOnPageBack() {
    document.body.innerHTML = localeHTML;
  }

  if(status) {
    FindOnPageBack();
    FindOnPageGo();
  }

	if(!status) {
    FindOnPageBack();
  }
}

export function startSearch() {
  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    searchItems(input);
   });
}

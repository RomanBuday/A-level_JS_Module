const slides = document.querySelectorAll(".offer_slide"),
 sliderTitle = document.querySelectorAll(".header-bottom_title"),
   sliderBtn = document.querySelectorAll(".header-bottom_btn");

        // prev = document.querySelector(".offer-slider_prev"),
        // next = document.querySelector(".offer-slider_next");

export let slideIndex = 1;

export function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  slides.forEach(item => item.style.display = 'none');
  slides[slideIndex - 1].style.display = 'block';
  slides[slideIndex - 1].classList.add('fade');

  slideIndex++;

  if (slideIndex == 2 || slideIndex == 3 || slideIndex == 5) {
    sliderTitle[slideIndex - 1].classList.add('title-modify');
  }

  if (slideIndex == 3) {
    sliderTitle[slideIndex - 1].style.top = "25%";
    sliderTitle[slideIndex - 1].style.left = "18%";
    sliderBtn[slideIndex - 1].style.top = "40%";
    sliderBtn[slideIndex - 1].style.left = "18%";
  }

  if (slideIndex == 5) {
    sliderTitle[slideIndex - 1].style.top = "17%";
    sliderBtn[slideIndex - 1].style.top = "45%";
  }

  if (slideIndex == 7) {
    sliderTitle[slideIndex - 1].style.top = "40%";
    sliderTitle[slideIndex - 1].style.left = "30%";
    sliderBtn[slideIndex - 1].style.top = "50%";
    sliderBtn[slideIndex - 1].style.left = "30%";
  }

  if(slideIndex > slides.length) {
    slideIndex = 1;
  }

  setTimeout(showSlides, 6000);
}

// export function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// prev.addEventListener('click', () => {
//   plusSlides(-1);
// });

// next.addEventListener('click', () => {
//   plusSlides(+1);
// });

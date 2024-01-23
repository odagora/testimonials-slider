const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');
const previousButton = document.querySelector('.previous');
const nextButton = document.querySelector('.next');

let currentSlide = 0;
const numberOfSlides = slides.length;

function disableButton() {
  if (currentSlide === 0) {
    previousButton.classList.add('disabled');
    nextButton.classList.remove('disabled');
  } else if (currentSlide === numberOfSlides - 1) {
    nextButton.classList.add('disabled');
    previousButton.classList.remove('disabled');
  }
}

window.addEventListener('load', () => {
  disableButton();
})

previousButton.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 < 0 ? numberOfSlides - 1 : currentSlide - 1);
  disableButton();
})

nextButton.addEventListener('click', () => {
  currentSlide = (currentSlide + 1 === numberOfSlides ? 0 : currentSlide + 1);
  disableButton();
})
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
  } else {
    nextButton.classList.remove('disabled');
    previousButton.classList.remove('disabled');
  }
}

function transitionSlide() {
  sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

window.addEventListener('load', () => {
  disableButton();
})

previousButton.addEventListener('click', () => {
  currentSlide = currentSlide - 1;
  transitionSlide();
  disableButton();
})

nextButton.addEventListener('click', () => {
  currentSlide = currentSlide + 1;
  transitionSlide();
  disableButton();
})
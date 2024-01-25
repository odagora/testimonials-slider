const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');
const previousButton = document.querySelector('.previous');
const nextButton = document.querySelector('.next');

let currentSlide = 0;
const numberOfSlides = slides.length;

function disableButton() {
  const isAtFirstSlide = currentSlide === 0;
  const isAtLastSlide = currentSlide === numberOfSlides - 1;

  previousButton.classList.toggle('disabled', isAtFirstSlide);
  nextButton.classList.toggle('disabled', isAtLastSlide);
}

function transitionSlide() {
  sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

window.addEventListener('load', () => {
  disableButton();
})

previousButton.addEventListener('click', () => {
  currentSlide--;
  transitionSlide();
  disableButton();
})

nextButton.addEventListener('click', () => {
  currentSlide++;
  transitionSlide();
  disableButton();
})
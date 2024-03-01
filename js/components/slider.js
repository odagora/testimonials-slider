
import { SlideItem } from "./slideItem.js";
export class Slider {
  constructor({ sliderContainer, slides, previousButton, nextButton }) {
    this.sliderContainer = sliderContainer;
    this.previousButton = previousButton;
    this.nextButton = nextButton;
    this.currentSlide = 0;
    this.slides = slides;
    this.numberOfSlides = this.slides.length;
  }

  init() {
    this.render();
    this.addEventListeners();
    this.disableButton(this.currentSlide);
  }

  disableButton(currentSlide) {
    const isAtFirstSlide = currentSlide === 0;
    const isAtLastSlide = currentSlide === this.numberOfSlides - 1;

    if (this.previousButton && this.nextButton) {
      this.previousButton.classList.toggle('disabled', isAtFirstSlide);
      this.nextButton.classList.toggle('disabled', isAtLastSlide);
    }
  }

  transitionSlide() {
    if (this.sliderContainer) {
      this.sliderContainer.style.transform = `translateX(-${this.currentSlide * 100}%)`;
    }
  }

  addEventListeners() {
    const handleButtonClick = (direction) => {
      if (direction === 'previous') {
        this.currentSlide--;
      }
      if (direction === 'next') {
        this.currentSlide++;
      }
      this.transitionSlide();
      this.disableButton(this.currentSlide);
    }

    if (this.previousButton) {
      this.previousButton.addEventListener('click', () => {
        handleButtonClick('previous');
      });
    }
    if (this.nextButton) {
      this.nextButton.addEventListener('click', () => {
        handleButtonClick('next');
      });
    }
  }

  render() {
    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.innerHTML = '';
    this.slides.forEach((slide) => {
      const slideItem = new SlideItem({ ...slide });
      sliderContainer.appendChild(slideItem);
    })
  }
}
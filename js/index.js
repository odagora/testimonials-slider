export class Slider {
  constructor(containerSelector, slideSelector, previousButtonSelector, nextButtonSelector) {
    this.sliderContainer = document.querySelector(containerSelector);
    this.slides = document.querySelectorAll(slideSelector);
    this.previousButton = document.querySelector(previousButtonSelector);
    this.nextButton = document.querySelector(nextButtonSelector);
    this.currentSlide = 0;
    this.numberOfSlides = this.slides.length;
  }

  init() {
    this.disableButton(this.currentSlide);
    this.addEventListeners();
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
    function handleButtonClick(direction) {
      if (direction === 'previous') {
        this.currentSlide--;
      }
      if (direction === 'next') {
        this.currentSlide++;
      }
      this.transitionSlide();
      this.disableButton(this.currentSlide);
    }

    // Bind the handleButtonClick function to the current instance of Slider
    const boundHandleButtonClick = handleButtonClick.bind(this);

    if (this.previousButton) {
      this.previousButton.addEventListener('click', () => {
        boundHandleButtonClick('previous');
      });
    }
    if (this.nextButton) {
      this.nextButton.addEventListener('click', () => {
        boundHandleButtonClick('next');
      });
    }
  }
}

const slider = new Slider('.slider-container', '.slide', '.previous', '.next')
slider.init();
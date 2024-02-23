class Slider {
  constructor(containerSelector, slideSelector, previousButtonSelector, nextButtonSelector) {
    this.sliderContainer = document.querySelector(containerSelector);
    this.slides = document.querySelectorAll(slideSelector);
    this.previousButton = document.querySelector(previousButtonSelector);
    this.nextButton = document.querySelector(nextButtonSelector);
    this.currentSlide = 0;
    this.numberOfSlides = this.slides.length;
    this.init();
  }

  init() {
    this.disableButton();
    this.addEventListeners();
  }

  disableButton() {
    const isAtFirstSlide = this.currentSlide === 0;
    const isAtLastSlide = this.currentSlide === this.numberOfSlides - 1;

    this.previousButton.classList.toggle('disabled', isAtFirstSlide);
    this.nextButton.classList.toggle('disabled', isAtLastSlide);
  }

  transitionSlide() {
    this.sliderContainer.style.transform = `translateX(-${this.currentSlide * 100}%)`;
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
      this.disableButton();
    }

    this.previousButton.addEventListener('click', () => {
      handleButtonClick.call(this, 'previous');
    })
    this.nextButton.addEventListener('click', () => {
      handleButtonClick.call(this, 'next');
    })
  }
}

const slider = new Slider('.slider-container', '.slide', '.previous', '.next')
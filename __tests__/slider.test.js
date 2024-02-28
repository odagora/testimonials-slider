import { Slider } from '../js/index'

describe('Slider', () => {
  let slider
  let dom

  beforeEach(() => {
    // Arrange
    const html = `
      <div class="slider-container">
        <article class="slide" id="slide-1"></article>
        <article class="slide" id="slide-2"></article>
      </div>
      <div class="slider-controls">
        <button class="previous" aria-label="Previous"></button>
        <button class="next" aria-label="Next"></button>
      </div>
    `;
    const parser = new DOMParser();
    dom = parser.parseFromString(html, 'text/html');

    // Act
    jest.spyOn(document, 'querySelector').mockImplementation((selector) => {
      if (selector === '.slider-container') {
        return dom.querySelector('.slider-container');
      } else if (selector === '.previous') {
        return dom.querySelector('.previous');
      } else if (selector === '.next') {
        return dom.querySelector('.next');
      }
      return null;
    })

    jest.spyOn(document, 'querySelectorAll').mockImplementation((selector) => {
      if (selector === '.slide') {
        return dom.querySelectorAll('.slide');
      }
      return [];
    })

    slider = new Slider('.slider-container', '.slide', '.previous', '.next')
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  test('should initialize slider with the correct selectors', () => {
    // Assert
    expect(slider.sliderContainer).toBeDefined();
    expect(slider.slides).toBeDefined();
    expect(slider.previousButton).toBeDefined();
    expect(slider.nextButton).toBeDefined();
  })

  test('should initialize slider with disabled previous button', () => {
    slider.init();
    expect(slider.previousButton.classList.contains('disabled')).toBe(true);
  })

  test('should set the \'current slide\' to zero and the number of slides correctly on first load', () => {
    // Assert
    expect(slider.currentSlide).toBe(0);
    expect(slider.numberOfSlides).toBe(2);
    expect(slider.slides[0].id).toBe('slide-1');
    expect(slider.slides[1].id).toBe('slide-2');
  })

  test('should transition to the next slide and disable the next button when on the last slide', () => {
    // Arrange
    const nextButton = dom.querySelector('.next');
    const sliderContainer = dom.querySelector('.slider-container');

    // Act
    slider.init();
    nextButton.click();

    // Assert
    expect(slider.currentSlide).toBe(1);
    expect(sliderContainer.style.transform).toBe('translateX(-100%)');
    expect(nextButton.classList.contains('disabled')).toBe(true);
  });

  test('should transition to the previous slide and disable the previous button when on the first slide', () => {
    //Arrange
    const nextButton = dom.querySelector('.next');
    const previousButton = dom.querySelector('.previous');
    const sliderContainer = dom.querySelector('.slider-container');

    // Act
    slider.init();
    nextButton.click();
    previousButton.click();

    // Assert
    expect(slider.currentSlide).toBe(0);
    expect(sliderContainer.style.transform).toBe('translateX(-0%)');
    expect(previousButton.classList.contains('disabled')).toBe(true);
  })
});

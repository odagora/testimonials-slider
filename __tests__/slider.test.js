import { Slider } from '../js/components/slider'
import { mockSlidesData as slides } from "../__mocks__/slidesData";

describe('Slider', () => {
  let slider, dom, sliderContainer, previousButton, nextButton

  beforeEach(() => {
    // Arrange
    const html = `
      <div class="slider-container"></div>
      <div class="slider-controls">
        <button class="previous" aria-label="Previous"></button>
        <button class="next" aria-label="Next"></button>
      </div>
    `;
    const parser = new DOMParser();
    dom = parser.parseFromString(html, 'text/html');

    sliderContainer = dom.querySelector('.slider-container');
    previousButton = dom.querySelector('.previous');
    nextButton = dom.querySelector('.next');

    slider = new Slider({ sliderContainer, previousButton, nextButton, slides})

    jest.spyOn(document, 'querySelector').mockImplementation((selector) => {
      if (selector === '.slider-container') {
        return sliderContainer;
      }
    })
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  test('should initialize slider with all elements', () => {
    // Act
    slider.init();

    // Assert
    expect(slider.sliderContainer).toBe(sliderContainer);
    expect(slider.previousButton).toBe(previousButton);
    expect(slider.nextButton).toBe(nextButton);
    expect(slider.currentSlide).toBe(0);
    expect(slider.slides).toBe(slides);
    expect(slider.numberOfSlides).toBe(slides.length);
  })

  test('should initialize slider with disabled previous button', () => {
    // Act
    slider.init();

    // Assert
    expect(slider.previousButton.classList.contains('disabled')).toBe(true);
  })

  test('should add event listeners to previous and next buttons', () => {
    // Arrange
    // Spy on addEventListener function
    const previousButtonEventListenerSpy = jest.spyOn(slider.previousButton, 'addEventListener')
    const nextButtonEventListenerSpy = jest.spyOn(slider.nextButton, 'addEventListener')

    // Act
    slider.addEventListeners();

    // Assert
    expect(previousButtonEventListenerSpy).toHaveBeenCalledWith('click', expect.any(Function));
    expect(nextButtonEventListenerSpy).toHaveBeenCalledWith('click', expect.any(Function));
  })

  test('should transition to the next slide and disable the next button when on the last slide', () => {
    // Act
    slider.init();
    nextButton.click();

    // Assert
    expect(slider.currentSlide).toBe(1);
    expect(sliderContainer.style.transform).toBe('translateX(-100%)');
    expect(nextButton.classList.contains('disabled')).toBe(true);
  });

  test('should transition to the previous slide and disable the previous button when on the first slide', () => {
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

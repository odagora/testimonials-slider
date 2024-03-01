import { SlideItem } from "../js/components/slideItem";

describe('SlideItem', () => {
  let slide, slideItem;

  beforeEach(() => {
    // Arrange
    slide = {
      name: 'John Doe',
      jobTitle: 'Developer',
      imageSrc: 'image.jpg',
      imageAlt: 'Image',
      quoteText: 'lorem ipsum'
    }
    slideItem = new SlideItem({ ...slide });
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  test('should create a slide item with correct elements', () => {
    // Act and Assert
    expect(slideItem.name).toBe('John Doe');
    expect(slideItem.jobTitle).toBe('Developer');
    expect(slideItem.imageSrc).toBe('image.jpg');
    expect(slideItem.imageAlt).toBe('Image');
    expect(slideItem.quoteText).toBe('lorem ipsum');
  });

  test('should call connectedCallback and render method', () => {
    // Arrange
    const renderSpy = jest.spyOn(slideItem, 'render');
    const connectedCallbackSpy = jest.spyOn(slideItem, 'connectedCallback');

    // Act
    slideItem.connectedCallback();

    // Assert
    expect(connectedCallbackSpy).toHaveBeenCalled();
    expect(renderSpy).toHaveBeenCalled();

    // Clean up
    renderSpy.mockRestore();
    connectedCallbackSpy.mockRestore();
  });

  test('should generate HTML with correct values for imageSrc, imageAlt, quoteText, name, and jobTitle', () => {
    // Arrange
    const sliderContainer = document.createElement('div');

    // Act
    slideItem.render();
    sliderContainer.innerHTML = slideItem.innerHTML;

    // Assert
    const slideElement = sliderContainer.querySelector('.slide');
    const name = slideElement.querySelector('.name').textContent;
    const jobTitle = slideElement.querySelector('.job-title').textContent;
    const imageSrc = slideElement.querySelector('img').src;
    const imageAlt = slideElement.querySelector('img').alt;
    const quoteText = slideElement.querySelector('.quote').textContent;

    expect(name).toBe('John Doe');
    expect(jobTitle).toBe('Developer');
    expect(imageSrc).toContain('/images/image.jpg')
    expect(imageAlt).toBe('Image');
    expect(quoteText).toBe('“lorem ipsum”');
  });

  test('should return valid CSS styles when called', () => {
    // Arrange
    const expectedStyles = /*css*/`
      <style>
        slide-item {
          flex: 1 0 100%;
        }
      </style>
      `;

    // Act and Assert
    expect(slideItem.getStyles()).toBe(expectedStyles);

  })
})
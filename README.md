# Frontend Mentor - Coding bootcamp testimonials slider solution

This is a solution to the [Coding bootcamp testimonials slider challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/coding-bootcamp-testimonials-slider-4FNyLA8JL). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot
Mobile version
![Mobile version](https://bit.ly/3OgJCu4)

Desktop version
![Desktop version](https://bit.ly/3uamTsL)

### Links

- Solution URL: [click here](https://www.frontendmentor.io/solutions/testimonials-slider-solution-qOKOgJQaWf)
- Live Site URL: [click here](https://odagora.github.io/testimonials-slider/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- CSS transformations and transitions
- Vanilla JavaScript

### What I learned

1. Use of `::before` and `::after` pseudoelements to add background images:
    ```css
    & .previous::before {
      content: url('../images/icon-prev.svg');
    }
    & .next::before {
        content: url('../images/icon-next.svg');
    }
    ``````
2. Use of the `flex` shorthand to adjust an element to the full width of its parent container (See [Useful resources](#useful-resources)):
    ```css
    .slide {
      display: flex;
      flex-direction: column;
      /* flex-grow: 1; flex-shrink: 0; flex-basis: 100%*/
      flex: 1 0 100%;
      height: 665px;
    }
    ``````
3. Use of the `toggle()` JavaScript method with the `force` parameter to switch a CSS class between two values based on the truthiness of a condition (See [Useful resources](#useful-resources)):
    ```js
    function disableButton() {
      const isAtFirstSlide = currentSlide === 0;
      const isAtLastSlide = currentSlide === numberOfSlides - 1;

      previousButton.classList.toggle('disabled', isAtFirstSlide);
      nextButton.classList.toggle('disabled', isAtLastSlide);
    }
    ``````
### Continued development

- Use of new CSS features like container queries
- Use of CSS Grid in complex layouts
- Use of animations with CSS
- Implementation of UI testing
- Use of accessibility principles
- Cross-browser support
- Use of web components for reusability

### Useful resources

- [toggle() JavaScript method](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle) - This helped me for toggling an HTMLElement class. I liked to use the `force`` argument because it gives me a more simple logic without using too much conditionals.
- [MDN multiple backgrounds](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds) - This is an amazing resource showing how can multiple backgrounds been applied with ease.
- [Flexbox: flex-grow, flex-shrink y flex-basis](https://dev.to/duxtech/flexbox-flex-grow-flex-shrink-y-flex-basis-o96) - This is an amazing article describing in detail the use of these three flexbox properties.

## Author

- Website - [Daniel González](https://odagora.com)
- Frontend Mentor - [@odagora](https://www.frontendmentor.io/profile/odagora)
- Twitter - [@odagora](https://www.twitter.com/odagora)

## Acknowledgments

- MDN documentation
- ChatGPT for code refactoring

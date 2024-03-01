import { Slider } from "./components/slider.js";
import { slides } from "./data.js";

const sliderContainer = document.querySelector('.slider-container');
const previousButton = document.querySelector('.previous');
const nextButton = document.querySelector('.next');

const slider = new Slider({ sliderContainer, slides, previousButton, nextButton })
slider.init();
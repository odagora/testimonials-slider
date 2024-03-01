export class SlideItem extends HTMLElement {
  constructor({ imageSrc, imageAlt, quoteText, name, jobTitle }) {
    super();
    this.name = name;
    this.jobTitle = jobTitle;
    this.imageSrc = imageSrc;
    this.imageAlt = imageAlt;
    this.quoteText = quoteText;
  }

  connectedCallback() {
    this.render();
  }

  getStyles() {
    return /*css*/`
      <style>
        slide-item {
          flex: 1 0 100%;
        }
      </style>
      `
  }

  render() {
    this.innerHTML = /*html*/`
      ${this.getStyles()}
      <article class="slide" id="slide-2">
        <section class="slide-image">
            <figure>
              <img src="./images/${this.imageSrc}" alt=${this.imageAlt}>
            </figure>
        </section>
        <section class="slide-content">
          <div class="container">
            <p class="quote">“${this.quoteText}”</p>
            <div class="author">
              <p class="name">${this.name}</p>
              <p class="job-title">${this.jobTitle}</p>
            </div>
          </div>
        </section>
      </article>
    `;
  }
}

window.customElements.define('slide-item', SlideItem);
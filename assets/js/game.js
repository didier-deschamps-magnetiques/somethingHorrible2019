const Game = class Game {
  constructor(container) {
    this.container = container;
    this.dom = document.createElement('div');
    this.events = {
      start: new CustomEvent('start', {...this})
    }
  }

  // stream height must be computed from its dynamic width
  findHeight() {
    const width = this.dom.getBoundingClientRect().width;

    return width * 9 / 16;
  }

  init() {
    // apply styles
    this.dom.style.backgroundColor = "black";
    this.dom.style.width = "calc(100% - 40px)";
    // get stream input height programmatically
    //this.dom.style.height = `${this.dom.getBoundingClientRect().width * 9 / 16}px`;
    this.dom.style.height = `${this.findHeight()}px`;

    this.container.appendChild(this.dom);
  }
}

const Game = class Game {
  constructor(container) {
    this.container = container;
    this.dom = document.createElement('div');
    this.events = {
      start: new CustomEvent('start', {...this})
    }
  }

  init() {
    const width = Math.floor(this.container.getBoundingClientRect().width) - 40;
    const height = Math.floor(width * 9 / 16);

    // apply styles
    this.dom.style.backgroundColor = "black";

    this.dom.style.width = `${width}px`;
    this.dom.style.height = `${height}px`;

    this.dom.id = `game`;
    this.container.appendChild(this.dom);
  }
}

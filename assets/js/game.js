const Game = class Game {
  constructor(container) {
    this.container = container;
    this.dom = document.createElement('div');
    this.events = {
      start: new CustomEvent('start', {...this})
    }
  }

  init() {
    // apply styles
    this.dom.style.backgroundColor = "black";
    this.dom.style.width = "calc(100% - 40px)";
    this.dom.style.height = "calc(100vw - 40% - 40px)";

    this.container.appendChild(this.dom);
  }
}

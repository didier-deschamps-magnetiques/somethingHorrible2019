const Game = class Game {
  constructor(container) {
    this.container = container;
    this.dom = document.createElement("div");
    this.ratings = [];
  }

  init() {
    // apply styles
    this.dom.style.backgroundColor = "black";

    this.dom.id = `game`;
    this.container.appendChild(this.dom);
  }
};

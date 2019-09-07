const Game = class Game {
  constructor(container) {
    this.container = container;
    this.dom = document.createElement("div");
    this.events = {
      start: new CustomEvent("start", { ...this })
    };
    this.ratings = [];
  }

  init() {
    // apply styles
    this.dom.style.backgroundColor = "black";

    this.dom.id = `game`;
    this.container.appendChild(this.dom);
  }
};

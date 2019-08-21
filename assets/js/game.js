const Game = class Game {
  constructor(container) {
    this.container = container;
    this.dom = document.createElement("div");
    this.events = {
      start: new CustomEvent("start", { ...this })
    };
  }

  init() {
    // apply styles
    this.dom.style.backgroundColor = "black";

    this.dom.id = `game`;
    this.dom.innerHTML = '<!--temp--><div id="streamers" class="big"></div><!--temp-->';
    this.container.appendChild(this.dom);
  }
};

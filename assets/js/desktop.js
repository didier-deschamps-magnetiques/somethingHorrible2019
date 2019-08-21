const Desktop = class Desktop {
  constructor(container) {
    this.container = container;
    this.dom = document.createElement("div");
    this.events = {
      start: new CustomEvent("start", { ...this })
    };
  }

  init() {
    // apply styles
    this.dom.id = `desktop`;
    this.container.appendChild(this.dom);
    this.dom.addEventListener("click", ev => {
      console.debug(ev.target);
      if (!ev.target.classList.contains("big")) {
        ev.target.classList.add("big");
        const sibling = ev.target.parentElement.getElementById("streamers");
        console.debug(sibling);
      }
    });
  }
};

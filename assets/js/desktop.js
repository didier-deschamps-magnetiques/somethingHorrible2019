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
      if (!ev.target.classList.contains("big")) {
        const sibling = ev.target.parentElement.querySelector(".big");

        ev.target.classList.add("big");
        sibling.classList.remove("big");
      }
    });

    // add games icons to the desktop…
    Data.submissions.forEach(submission => {
      const game = document.createElement("div");
      const icon = document.createElement("img");
      const name = document.createElement("span");

      const videoGame = new VideoGame(submission.name);
      const container = this.container;

      game.classList.add('game');
      game.addEventListener('click', () => {
        videoGame.start(submission, container);
      });

      icon.src = `./assets/icons/${submission.icon}`;
      icon.classList.add('icon');

      name.innerText = submission.name;
      name.classList.add('label');

      game.appendChild(icon);
      game.appendChild(name);



      desktop.appendChild(game);
    });
  }
};

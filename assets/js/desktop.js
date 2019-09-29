const Desktop = class Desktop {
  constructor(container) {
    this.container = container;
    this.dom = document.createElement("div");
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

      if(submission.name === Data.submissions[0].name) {
        game.classList.add('hide');
      }

      const { container } = this;
      const videoGame = new VideoGame(submission, container);

      game.classList.add('game');
      if(!game.classList.contains('hide')) {
        game.addEventListener('dblclick', () => {
          videoGame.start();
          game.remove();
        });
      }
      else {
        game.addEventListener('dblclick', () => {
          const frameCount = parseInt(document.location.search.split('&frameCount=')[1] || 0);

          document.body.classList.add('happy');
          App.testingWinner = true;
          const recursiveFrame = document.createElement('iframe');
          recursiveFrame.src = `${document.location.href}?framed=true&frameCount=${frameCount + 1}`;
          recursiveFrame.id = 'recursive-frame';
          if(frameCount < 10) {
            document.getElementById('desktop').appendChild(recursiveFrame);
            if (document.location.search.length === 0) {
              window.setTimeout(videoGame.rateGame, 8000);
            }
          }
        });
      }

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

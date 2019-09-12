class LeaderBoard {
  constructor(container) {
    this.container = container;
    this.dom = document.createElement("div");
    this.resultsTable = document.createElement("table");
  }

  buildResultsTable() {
    const ratings = App.ratings;
    let table = '';
    ratings.forEach((rating) => {
      table = `${table}<tr><td>${rating.name}</td><td>${rating.jury}</td><td><strong></strong>${rating.rating}</strong></td></tr>`;
    });

    return table;
  }

  hide() {
    App.leaderBoard.dom.classList.add('hide');
  }

  show() {
    App.leaderBoard.dom.classList.remove('hide');
  }

  updateLeaderBoard() {
    App.leaderBoard.resultsTable.innerHTML = App.leaderBoard.buildResultsTable();
    App.leaderBoard.show();
  }

  init() {
    this.dom.id = "leader-board";

    const title = document.createElement('h3');
    title.classList.add("title");
    title.innerText = "Leader Board";

    const howTo = document.createElement('p');
    howTo.classList.add('how-to');
    howTo.innerText = 'Cliquez pour fermer. Utilisez la touche Tabulation pour afficher le score quand que vous le voulez.'

    this.dom.appendChild(title);
    this.resultsTable.innerHTML = this.buildResultsTable();
    this.resultsTable.classList.add('results');
    this.dom.appendChild(this.resultsTable);
    this.dom.appendChild(howTo);
    this.container.appendChild(App.leaderBoard.dom);

    this.hide();
    this.dom.addEventListener('click', () => {
      this.hide();
    });

    document.addEventListener('keydown', (e) => {
      if(e.key === "Tab") {
        this.show();
        e.preventDefault();
      }
    });

    document.addEventListener('keyup', (e) => {
      if(e.key === "Tab") {
        this.hide();
        e.preventDefault();
      }
    });
    document.addEventListener('gameHaveBeenRated', App.leaderBoard.updateLeaderBoard);
  }
}

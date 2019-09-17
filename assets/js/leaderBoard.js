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

  showWinner() {
    const winnerModal = document.getElementById('winner-modal');
    winnerModal.innerHTML = `<p>Fécilitations ! Vous avez parfaitement streamé suffisamment de jeux pour que vos idiots de lecteurs pensent que vous les avez tous testés !</p>`;
    winnerModal.innerHTML += `<p>Votre équipe de choc a décidé que le gagnant était…</p>`;
    winnerModal.innerHTML += `<h1>${App.ratings[0].name}</h1>`;
    winnerModal.innerHTML += `<p>Bravo à eux pour les 6 ans d'abonnement à CanardPC (et ne nous faites pas comme chaque année le coup de <em>Nan mais en fait on avait dit 6 mois… On les connais ces techniques de radin… À ça… Quand Ivan le Fou défend les pauvres sur Twitter, on a des belles paroles, mais quand il faut mettre la main à la poche, il y a plus personne…).</em></p>`;
    winnerModal.innerHTML += `<p><strong>Pour quitter le jeu, appuyez sur le bouton Power de votre ordinateur pendant 10 secondes.</strong></p>`;
    winnerModal.parentElement.classList.remove('hide');
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
    document.addEventListener('gameWasTheLastOne', App.leaderBoard.showWinner);
  }
}

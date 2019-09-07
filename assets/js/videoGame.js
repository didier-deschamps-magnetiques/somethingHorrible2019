const VideoGame = class VideoGame {
  constructor(submission, container) {
    this.submission = submission;
    this.container = container;
    this.name = submission.name;
    this.player = document.createElement('video');
    this.rating = null;
  }

  rateGame() {
    const gameData = this.submission;
    const container = document.createElement('ul');
    container.id = 'juries';

    const title = document.createElement('li');
    title.id = 'jury-choice-title';
    title.innerText = 'Choisissez votre juge :';
    container.appendChild(title);

    gameData.juries.forEach((jury) => {
      const element = document.createElement('li');
      element.innerHTML = jury.name;

      element.addEventListener('click', () => {
        container.id = 'ratings';
        container.innerHTML = '';
        title.innerHTML = `Qu'est ce que <strong style="color: teal;">${jury.name}</strong> a pensé de <strong style="color: pink;">${this.name}</strong> ?`;
        title.id = 'rating-choice-title';

        container.appendChild(title);

        jury.ratings.forEach((rating) => {
          const choice = document.createElement('li');
          choice.innerText = rating.label;
          choice.addEventListener('click', () => {
            this.rating = rating.value;
            alert(`la note de ${this.rating} a été attribuée.`);
            container.remove();
          });

          container.appendChild(choice);
        });
      })
      container.appendChild(element);
    });

    this.container.appendChild(container);
  }

  start(gameData, container) {
    this.player.src = `./assets/videos/${this.submission.video}`;
    this.player.type = `${this.submission.video.split('.')[1]}`;
    this.player.autoplay = true;
    this.player.id = "video-player";
    this.player.addEventListener('ended', () => {
      this.player.remove();
      document.getElementById('stream').click();
      this.rateGame();
    });

    this.container.parentElement.appendChild(this.player);
  }
};

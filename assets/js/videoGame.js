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
    const title = document.createElement('h3');
    title.innerText = 'Choisissez votre juge :';
    const container = document.createElement('ul');
    container.id = 'juries';

    gameData.juries.forEach((jury) => {
      const element = document.createElement('li');
      element.innerHTML = jury.name;

      element.addEventListener('click', (e) => {
        this.container.id = 'ratings';
        this.container.innerHTML = '';
        this.jury.ratings.forEach((rating) => {
          const choice = document.createElement('li');
          choice.innerText = rating.label;

          container.appendChild(choice);
        });
      })
      container.appendChild(element);
    });

    this.container.appendChild(container);
  }

  start(gameData, container) {
    const data = this.getVideoGameData(this.name);

    this.player.src = `./assets/videos/${data.video}`;
    this.player.type = `${data.video.split('.')[1]}`;
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

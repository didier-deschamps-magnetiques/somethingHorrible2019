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
    const wrapper = document.createElement('ul');
    wrapper.id = 'juries';

    const title = document.createElement('li');
    title.id = 'jury-choice-title';
    title.innerText = 'Choisissez votre juge :';
    wrapper.appendChild(title);

    gameData.juries.forEach((jury) => {
      const element = document.createElement('li');
      element.innerHTML = jury.name;

      element.addEventListener('click', () => {
        wrapper.id = 'ratings';
        wrapper.innerHTML = '';
        title.innerHTML = `Qu'est ce que <strong style="color: teal;">${jury.name}</strong> a pensé de <strong style="color: pink;">${this.name}</strong> ?`;
        title.id = 'rating-choice-title';

        wrapper.appendChild(title);

        jury.ratings.forEach((rating) => {
          const choice = document.createElement('li');
          choice.innerText = rating.label;
          choice.addEventListener('click', () => {
            this.rating = rating.value;
            alert(`la note de ${this.rating} a été attribuée.`);
            App.ratings.push({name: this.name, rating: this.rating, jury: jury.name});
            App.ratings.sort((a, b) => {
              if(a.rating > b.rating) {
                return -1;
              }
              if(b.rating > a.rating) {
                return 1;
              }
              return 0;
            });

            const domRatings = document.getElementById('ratings');
            const domJuries = document.getElementById('juries');
            if(domRatings) {
              domRatings.remove();
            }
            if(domJuries) {
              domJuries.remove();
            }

            document.dispatchEvent(Events.Game.have.been.rated);
          });

          wrapper.appendChild(choice);
        });
      })
      wrapper.appendChild(element);
    });

    this.container.appendChild(wrapper);
  }

  start(gameData) {
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

const VideoGame = class VideoGame {
  constructor(name) {
    this.name = name;
    this.player = document.createElement('video');
  }

  getVideoGameData(name) {
    let vgData = null;

    Data.submissions.forEach(vg => {
      if(vg.name === name) {
        vgData = vg;
      }
    });

    return vgData;
  }

  start(gameData) {
    const data = this.getVideoGameData(this.name);
    this.player.src = `./assets/videos/${data.video}`;
    this.player.type = `${data.video.split('.')[1]}`;
    document.body.innerHTML = this.player;
  }
};

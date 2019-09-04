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

  start(gameData, container) {
    const data = this.getVideoGameData(this.name);
    this.player.src = `./assets/videos/${data.video}`;
    this.player.type = `${data.video.split('.')[1]}`;
    this.player.autoplay = true;
    this.player.id = "video-player";
    this.player.addEventListener('ended', () => {
      this.player.remove();
      document.getElementById('stream').click();
    });

    container.parentElement.appendChild(this.player);
  }
};

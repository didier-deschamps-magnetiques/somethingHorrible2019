document.addEventListener("DOMContentLoaded", () => {
  const config = {
    game: true,
    stream: true,
    desktop: true,
    chat: true,
    streams: true,
  };
  const gameContainer = document.getElementById("main-column");
  const chatContainer = document.getElementById("right-column");
  const streamsContainer = document.getElementById("left-column");

  const game = new Game(gameContainer);
  const stream = new Stream(game.dom);
  const chat = new Chat(chatContainer);
  const streams = new Streams(streamsContainer);
  const desktop = new Desktop(game.dom);

  if(config.game) {
    game.init();
  }
  if(config.stream) {
    stream.init();
  }
  if(config.desktop) {
    desktop.init();
  }
  if(config.chat) {
    chat.init();
  }
  if(config.streams) {
    streams.init();
  }
});

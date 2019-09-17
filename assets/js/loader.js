document.addEventListener("DOMContentLoaded", () => {
  const config = {
    game: true,
    stream: true,
    desktop: true,
    chat: true,
    streams: true
  };
  const gameContainer = document.getElementById("main-column");
  const chatContainer = document.getElementById("right-column");
  const streamsContainer = document.getElementById("left-column");
  const body = document.querySelector('body');

  App.game = new Game(gameContainer);
  App.stream = new Stream(App.game.dom);
  App.chat = new Chat(chatContainer);
  App.desktop = new Desktop(App.game.dom);
  App.leaderBoard = new LeaderBoard(body);
  App.streams = new Streams(streamsContainer);

  App.leaderBoard.init();

  if(config.game) {
    App.game.init();
  }
  if(config.stream) {
    App.stream.init();
  }
  if(config.desktop) {
    App.desktop.init();
  }
  if(config.chat) {
    App.chat.init();
  }
  if(config.streams) {
    App.streams.init();
  }
  if(document.location.search.length > 0) {
    App.nav = new Nav();
    App.nav.init();
  }
});

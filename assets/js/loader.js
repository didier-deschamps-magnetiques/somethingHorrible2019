document.addEventListener("DOMContentLoaded", () => {
  const gameContainer = document.getElementById("main-column");
  const chatContainer = document.getElementById("right-column");
  const streamsContainer = document.getElementById("left-column");

  const game = new Game(gameContainer);
  const chat = new Chat(chatContainer);
  const streams = new Streams(streamsContainer);
  const desktop = new Desktop(game.dom);

  game.init();
  desktop.init();
  chat.init();
  streams.init();
});

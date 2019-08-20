document.addEventListener("DOMContentLoaded", () => {
  const gameContainer = document.getElementById("main-column");
  const chatContainer = document.getElementById("right-column");
  const streamsContainer = document.getElementById("left-column");

  const game = new Game(gameContainer);
  const chat = new Chat(chatContainer);
  const streams = new Streams(streamsContainer);

  game.init();
  chat.init();
  streams.init();
});

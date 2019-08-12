document.addEventListener('DOMContentLoaded', () => {
  const gameContainer = document.getElementById('main-column');
  const chatContainer = document.getElementById('right-column');
  const game = new Game(gameContainer);
  const chat = new Chat(chatContainer);
  game.init();
});

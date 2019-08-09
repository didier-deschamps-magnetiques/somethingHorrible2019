document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('main-column');
  const game = new Game(container);
  game.init();
});

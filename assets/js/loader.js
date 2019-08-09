console.debug(Game)

document.addEventListener('DOMContentLoaded', () => {
  const game = new Game();
  game.init(document.getElementById('main-column'));
});

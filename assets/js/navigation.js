class Nav {
  constructor() {
  }

  init() {
    const desktop = document.getElementById('desktop');
    const somethingHorribleIcon = desktop.querySelector('.game');

    desktop.click();
    somethingHorribleIcon.dispatchEvent(new MouseEvent('dblclick'));
  }
}
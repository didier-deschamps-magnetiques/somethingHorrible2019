const Chat = class Chat {
  constructor(container) {
    this.container = container;
    this.dom = document.createElement('ul');
    this.events = {
      start: new CustomEvent('start', {...this})
    }
    this.nicks = [
      'LapinCompris',
      'Rabbitoku',
      'StarCitizen2012',
      'Lapinte',
      'HareAkiri',
      'XmasRansomware',
      'IvanGuedin',
      'CouenneLust',
      'Ackbooyave',
      'EllenPlayAgain',
      'VazyFrankySébum',
      'IzualCapone',
      'TaMaman',
      'anonyme',
    ];

    this.sentences = [
      `Je crois pas.`,
      `lol`,
      `Ça a l'air bien nul`,
      `Moi je joue sur Mac.`,
      `Il sort quand Mount&Blade2 ?`,
      `Ça aurait été mieux avec Naruto en personnage principal`,
      `DTC`,
      `WTF!!!?!`,
      `C'est une adaptation de quoi ?`,
      `T'en penses quoi, toi, <em>${this.getRandomNick()}</em> ?`,
      `Je vous proute…`,
      `Des mamans en manque de bits dans ta région`,
      `Mon jeu est mieux…`,
      `Ce jeu est prévu sur Stadia`,
      `Quand je pense que les studios d'Amazon n'ont même pas réussi à sortir un jeu comme ça…`,
      `C'est compatible ray tracer ?`,
      `Y a des lootboxes ?`,
      `J'ai trouvé un jeu fait par <em>${this.getRandomNick()}</em> dans les poubelles de Steam !`,
    ];
  }

  getRandomNick() {
    return this.nicks[Math.floor(Math.random()*this.nicks.length)];
  }
  getRandomSentence() {
    return this.sentences[Math.floor(Math.random()*this.sentences.length)];
  }

  addSentence(text) {
    const nick = text ? `<span style="color: pink">Vous` : this.getRandomNick();
    const innerText = text ? `text</span>` : this.getRandomSentence();
    const markup = document.createElement('li');

    markup.innerHTML = `<strong>${nick}</strong> : ${innerText}`;

    this.dom.appendChild(markup);
  }

  init() {
    this.dom.id = `chat`;
    this.container.appendChild(this.dom);
    setInterval(this.addSentence.bind(this), 2500);
  }
}

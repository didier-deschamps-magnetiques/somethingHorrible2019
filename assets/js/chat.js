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
      'HareAkiri'
    ];

    this.sentences = [
      `Je crois pas.`,
      `lol`,
      `Ça a l'air bien nul`,
      `Moi je joue sur Mac.`,
      `Je voulais faire un goat simulator avec des lapins, mais je sais pas dire lapin en anglais, j'étais bloqué à la création du titre`,
      `Ça aurait été mieux avec Naruto en personnage principal`,
      `DTC`
    ];
  }

  getRandomNick() {
    return this.nicks[Math.floor(Math.random()*this.nicks.length)];
  }
  getRandomSentence() {
    return this.sentences[Math.floor(Math.random()*this.sentences.length)];
  }

  addSentence(text) {
    const nick = text ? `<strong>vous</strong>` : this.getRandomNick();
    const innerText = text ? text : this.getRandomSentence();
    const markup = document.createElement('li');
    console.log(markup);
    markup.innerText = `${nick} : ${innerText}`;
    this.dom.appendChild(markup);
  }

  init() {
    this.dom.id = `chat`;
    this.container.appendChild(this.dom);
    setInterval(this.addSentence, 1000);
  }
}

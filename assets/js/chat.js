const Chat = class Chat {
  constructor(container) {
    this.container = container;
    this.dom = document.createElement('div');
    this.events = {
      start: new CustomEvent('start', {...this})
    }
  }

  init() {
    const nicks = [
      'LapinCompris',
      'Rabbitoku',
      'StarCitizen2012',
      'Lapinte',
      'HareAkiri'
    ];

    const sentences = [
      `Je crois pas.`,
      `lol`,
      `Ça a l'air bien nul`,
      `Moi je joue sur Mac.`,
      `Je voulais faire un goat simulator avec des lapins, mais je sais pas dire lapin en anglais, j'étais bloqué à la création du titre`,
      `Ça aurait été mieux avec Naruto en personnage principal`,
    ];

    const getRandomNick = () => {
      return nicks[Math.floor(Math.random()*nicks.length];
    }

    const getRandomSentence = () => {
      return sentences[Math.floor(Math.random()*sentences.length];
    }

    const addEntry = () => {

    }
  }
}

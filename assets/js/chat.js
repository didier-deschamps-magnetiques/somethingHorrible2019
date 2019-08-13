const Chat = class Chat {
  constructor(container) {
    this.container = container;
    this.dom = document.createElement('div');
    this.list = document.createElement('ul');
    this.head = document.createElement('h2');
    this.submit = document.createElement('input');

    this.events = {
      start: new CustomEvent('start', {...this})
    }
  }

  getRandomNick() {
    return Data.nicks[Math.floor(Math.random()*Data.nicks.length)];
  }
  getRandomSentence() {
    return Data.sentences[Math.floor(Math.random()*Data.sentences.length)];
  }

  addSentence(text) {
    const nick = text ? `<span style="color: pink">Vous` : this.getRandomNick();
    const innerText = text ? `${text}</span>` : this.getRandomSentence().replace('::name::', this.getRandomNick());
    const markup = document.createElement('li');

    markup.innerHTML = `<strong>${nick}</strong> : ${innerText}`;

    this.list.appendChild(markup);
  }

  init() {
    this.dom.id = `chat`;
    this.container.appendChild(this.dom);

    this.head.innerText = "fufu"
    this.dom.appendChild(this.head);

    this.dom.appendChild(this.list);
    this.dom.appendChild(this.submit);
    this.addSentence('test');
    setInterval(this.addSentence.bind(this), 2500);
  }
}

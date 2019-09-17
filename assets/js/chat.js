const Chat = class Chat {
  constructor(container) {
    this.container = container;
    this.dom = document.createElement("div");
    this.list = document.createElement("ul");
    this.head = document.createElement("h2");
    this.submit = document.createElement("input");
    this.chatMaxLength = 15;
    this.nicks = [
      "IvanLeFou",
      "KahnLust",
      "Izual",
      "NoëlMalware",
      "EllenReplay",
      "Ackboo",
      "LouisFerdinandSebum",
      "Alt236",
      "TotoLaDéglingue",
      "Fishbone",
      "DocTeraboule",
      "DidierDeschampsMagnétiques",
      "Polynette",
    ];
  }

  getRandomNick() {
    return this.nicks[Math.floor(Math.random() * this.nicks.length)];
  }

  getRandomSentence() {
    return Data.sentences[Math.floor(Math.random() * Data.sentences.length)];
  }

  addSentence(text) {
    const nick = text ? `<span style="color: pink">Vous` : this.getRandomNick();
    const innerText = text
      ? `${text}</span>`
      : this.getRandomSentence().replace("::name::", this.getRandomNick());
    const markup = document.createElement("li");

    markup.innerHTML = `<strong>${nick}</strong> : ${innerText}`;

    this.list.appendChild(markup);

    // only keep ${this.chatMaxLength} comments
    if (this.list.childElementCount > this.chatMaxLength) {
      this.list.removeChild(this.list.children[0]);
    }
  }

  generateUsersList(total) {
    const loopLength = total - this.nicks.length;

    for (let i = 0; i < loopLength; i++) {
      let pickedAnimal =
        Data.animals[Math.floor(Math.random() * Data.animals.length)];
      let left = pickedAnimal.name;
      let right =
        Data.adjectives[Math.floor(Math.random() * Data.adjectives.length)][
          pickedAnimal.gender
        ];
      this.nicks.push(left + right.charAt(0).toUpperCase() + right.slice(1));
    }
  }

  init() {
    this.generateUsersList(25);

    this.dom.id = `chat`;
    this.container.appendChild(this.dom);

    this.head.innerText = "Chat du stream";
    this.dom.appendChild(this.head);

    this.dom.appendChild(this.list);
    this.dom.appendChild(this.submit);
    this.submit.addEventListener("keyup", ev => {
      if (ev.key === "Enter") {
        this.addSentence(this.submit.value);
        this.submit.value = "";
      }

      return null;
    });

    setInterval(this.addSentence.bind(this), 2500);
  }
};

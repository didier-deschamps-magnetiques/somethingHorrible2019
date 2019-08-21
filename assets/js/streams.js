const Streams = class Streams {
  constructor(container) {
    this.container = container;
    this.dom = document.createElement("div");
    this.list = document.createElement("ul");
    this.head = document.createElement("h2");
    this.streamsMaxLength = 8;
  }

  generateRandomStreamName() {
    const prefix =
      Data.videogames.prefix[
        Math.floor(Math.random() * Data.videogames.prefix.length)
      ];
    const licence =
      Data.videogames.licence[
        Math.floor(Math.random() * Data.videogames.licence.length)
      ];
    const suffix =
      Data.videogames.suffix[
        Math.floor(Math.random() * Data.videogames.suffix.length)
      ];

    return `${prefix} ${licence} ${suffix}`;
  }

  generateRandomStreamerTag() {
    return Data.gamerTags[Math.floor(Math.random() * Data.gamerTags.length)];
  }

  init() {
    this.dom.id = `streams`;
    this.container.appendChild(this.dom);

    this.head.innerText = "Chaînes populaires";
    this.dom.appendChild(this.head);

    const threshold = 167;
    const baseViewerCount = Math.floor(1 + Math.random() * 5000) + threshold * this.streamsMaxLength + 1000;

    for (let i = 0; i < this.streamsMaxLength; i++) {
      this.list.innerHTML += `<li><img class="streamerPhoto" src="https://lorempixel.com/50/50/sports/${i}" /><h3 class="streamerTag">${this.generateRandomStreamerTag()}${this.generateRandomStreamerTag()}${this.generateRandomStreamerTag()}</h3><h4 class="gameName">${this.generateRandomStreamName()}<span class="viewersCount">${baseViewerCount - Math.floor(threshold * i)}</span></h4></li>`;
    }
    this.dom.appendChild(this.list);
  }
};

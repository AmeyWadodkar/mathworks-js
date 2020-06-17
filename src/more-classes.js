class Media {
  #mediaId

  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.#mediaId = new Date().getTime();
  }

  toString() {
    return `${this.title} by ${this.author}`;
  }

  getMediaId() {
    return this.#mediaId;
  }
}

class Movie extends Media {
  constructor(title, director, year) {
    super(title, director);
    this.year = year;
  }

  get director() {
    return this.author;
  }

  set director(name) {
    this.author = name;
  }

  toString() {
    return `${this.title} (${this.year}) directed by ${this.author}`
  }
}
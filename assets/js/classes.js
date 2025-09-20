class Post {
  constructor(id, title, author, text, date) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.text = text;
    this.date = date;
  }

  set text(value) {
    this._text = value;
  }

  get text() {
    return this._text;
  }
}
const post2 = new Post(
  "id post",
  "test",
  "Testowich",
  "this post about the test",
  "12.07.2023"
);
console.log("post2", post2);

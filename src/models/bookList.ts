import { db } from "../db.ts";

interface BookSchema {
  _id: { $oid: string };
  title: string;
  author: string;
  price: number;
}

const booksCollection = db.collection<BookSchema>("books");

type Payload = Pick<BookSchema, "title" | "author" | "price">;

export class Book {
  private constructor(
    public title: string,
    public author: string,
    public price: number,
    public _id: object | undefined = undefined
  ) {}

  static findAll() {}

  static async findById(id: string) {}

  static create({ title, author, price }: Payload) {
    return new this(title, author, price);
  }

  async save() {
    const _id = await booksCollection.insertOne({
      title: this.title,
      author: this.author,
      price: this.price,
    });

    this._id = _id;
  }

  async update() {}

  static async delete() {}
}

const DB = require("../models/book-model");
let createBooksStop = false;

class BookService {
  async getBooks() {
    return DB.find();
  }

  async getBookById(id) {
    return DB.findById(id);
  }

  async getBooksByThousand(num) {
    return DB.find({
      number: { $gte: +num + 1, $lt: +num + 1001 },
    }).populate("author");
  }

  async createBooksAll(booksLength) {
    async function createBook(i) {
      if (i < +booksLength + 1 && !createBooksStop) {
        let candidate = await DB.findOne({ number: i });
        if (!candidate) {
          let newBook = await DB.create({
            number: i,
            more_info_url: `https://www.gutenberg.org/ebooks/${i}`,
            author: [],
          });
          console.log("New book - ", i, newBook.more_info_url);
        } else {
          console.log("Has book - ", i);
        }
        return await createBook(i + 1);
      }
    }
    await createBook(1);
    createBooksStop = false;
    return { done: true };
  }

  async createBooksStop() {
    createBooksStop = true;
    return { done: true };
  }

  async createBooksByThousand(num) {
    async function createBook(i) {
      if (i < +num + 1001 && !createBooksStop) {
        let candidate = await DB.findOne({ number: i });
        if (!candidate) {
          let newBook = await DB.create({
            number: i,
            more_info_url: `https://www.gutenberg.org/ebooks/${i}`,
            author: [],
          });
          console.log("New book - ", i, newBook.more_info_url);
        } else {
          console.log("Has book - ", i);
        }
        return await createBook(i + 1);
      }
    }
    await createBook(+num + 1);
    createBooksStop = false;
    return { done: true };
  }

  async getBooksLengthCreated() {
    return DB.countDocuments();
  }

  async getById(id) {
    return DB.findById(id);
  }

  async deleteAll() {
    return DB.deleteMany();
  }

  async deleteByThousand(num) {
    async function deleteBook(i) {
      if (i < +num + 1001) {
        let candidate = await DB.findOne({ number: i });
        if (candidate) {
          await DB.findByIdAndRemove(candidate._id);
          console.log("Deleted book - ", i);
        } else {
          console.log("Not found book - ", i);
        }
        return await deleteBook(i + 1);
      }
    }
    await deleteBook(+num + 1);
    return { done: true };
  }

  async deleteById(id) {
    return DB.findByIdAndRemove(id);
  }
}

module.exports = new BookService();

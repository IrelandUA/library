const DB = require("../models/books-length-model");
const parsBooksLengthCheerioService = require("./parsers/pars-books-length-cheerio");
const parsBooksLengthPlaywrightService = require("./parsers/pars-books-length-playwright");

class BooksLengthService {
  async getBooksLength() {
    const books = await DB.find().sort({ date: -1 }).limit(1);
    return books[0] ? books[0] : { number: 0, date: new Date() };
  }

  async parsBooksLength() {
    console.log("start pars books length!");
    let booksLength = 0;
    booksLength = await parsBooksLengthCheerioService.pars();
    if (booksLength === 0) {
      booksLength = await parsBooksLengthPlaywrightService.pars();
    }
    if (booksLength && booksLength > 0) {
      await DB.deleteMany({});
      return await DB.create({
        number: booksLength,
        date: new Date(),
      });
    }
    return await this.getBooksLength();
  }
}

module.exports = new BooksLengthService();

const DBBook = require("../models/book-model");
const DBAuthor = require("../models/author-model");
const parsBookByNumberPlaywright = require("./parsers/pars-book-by-id-playwright");
const parsBookByNumberCheerio = require("./parsers/pars-book-by-id-cheerio");
const ApiError = require("../exceptions/api-error");

class BookParsByIdService {
  async pars(id) {
    let candidate = await DBBook.findById(id);
    if (!candidate) {
      throw ApiError.BadRequest("There is no book with such a ID!");
    }
    let newBook = {
      parsed: false,
    };
    newBook = await parsBookByNumberCheerio.pars(candidate);
    console.log("newBook cheerio", newBook);
    if (newBook.parsed === false) {
      newBook = await parsBookByNumberPlaywright.pars(candidate);
      console.log("newBook playwright", newBook);
    }
    if (newBook.author.length > 0) {
      candidate.author = [];
      async function checkAuthor(i) {
        if (i < newBook.author.length) {
          const { author, number, link } = newBook.author[i];
          let candidateAuthor = await DBAuthor.findOne({ number });
          if (!candidateAuthor) {
            let newAuthor = await DBAuthor.create({
              author,
              number,
              link,
            });
            if (newAuthor) {
              candidate.author.push(newAuthor._id);
            }
          } else {
            candidate.author.push(candidateAuthor._id);
          }
          return await checkAuthor(i + 1);
        }
      }
      await checkAuthor(0);
    }
    candidate.title =
      newBook?.title && newBook.title.length > 0 ? newBook.title : "";
    candidate.read_now_url =
      newBook?.read_now_url && newBook.read_now_url.length > 0
        ? newBook.read_now_url
        : "";
    candidate.image =
      newBook?.image && newBook.image.length > 0 ? newBook.image : "";
    return candidate.save();
  }
}

module.exports = new BookParsByIdService();

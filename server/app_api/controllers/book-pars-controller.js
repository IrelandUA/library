const bookParseByIdService = require("../services/book-pars-by-id-service");
const ApiError = require("../exceptions/api-error");
const bookService = require("../services/book-service");
let shouldStop = false;

class BookParsController {
  async parseBooksStop(req, res, next) {
    try {
      shouldStop = true;
      return res.status(200).json({ done: true });
    } catch (e) {
      console.log(e);
      next(e);
    }
  }

  async parsAll(req, res, next) {
    try {
      let booksLength = await bookService.getBooksLengthCreated();
      console.log("Start pars All books = ", booksLength);
      if (booksLength && booksLength > 0) {
        async function parsBook(i) {
          if (i < booksLength + 1 && shouldStop === false) {
            let book = await bookService.getByNumber(i + "");
            if (book && book.title === "") {
              let newBook = await bookParseByIdService.pars(book._id);
              console.log(
                `new book with id ${i + 1} is parsed!!!`,
                newBook.title,
              );
            }
            return await parsBook(i + 1);
          }
        }
        await parsBook(1);
      }
      shouldStop = false;
      return res.status(200).json({ done: true });
    } catch (e) {
      console.log(e);
      next(e);
    }
  }

  async parsByThousand(req, res, next) {
    try {
      let number = req.params.number;
      console.log(`parsByThousand = ${number}`);
      if (!number) {
        return next(
          ApiError.BadRequest(
            "Missing Thousand params in the query parameters!",
          ),
        );
      }
      let books = await bookService.getBooksByThousand(number);
      console.log("books = ", books.length);
      if (books && books.length > 0) {
        async function parsBook(i) {
          if (i < books.length && !shouldStop) {
            if (books[i].title === "") {
              let newBook = await bookParseByIdService.pars(books[i]._id);
              console.log(`Book with id ${i + 1} is parsed!!!`, newBook.title);
            } else {
              console.log(`Book with id ${i + 1} was parsed!!!`, newBook.title);
            }
            return await parsBook(i + 1);
          }
        }
        await parsBook(0);
      }
      shouldStop = false;
      return res.status(200).json({ done: true });
    } catch (e) {
      console.log(e);
      next(e);
    }
  }

  async parsById(req, res, next) {
    try {
      if (!req.params.id) {
        return next(ApiError.BadRequest("Missing ID in the query parameters!"));
      }
      return res
        .status(200)
        .json(await bookParseByIdService.pars(req.params.id));
    } catch (e) {
      console.log(e);
      next(e);
    }
  }
}

module.exports = new BookParsController();

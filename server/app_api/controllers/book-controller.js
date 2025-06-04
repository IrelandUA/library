const bookService = require("../services/book-service");
const booksLengthService = require("../services/books-length-service");
const ApiError = require("../exceptions/api-error");

class BookController {
  async getBooks(req, res, next) {
    try {
      return res.status(200).json(await bookService.getBooks());
    } catch (e) {
      console.log(e);
      next(e);
    }
  }

  async getBooksByThousand(req, res, next) {
    try {
      console.log("get", req.params.thousand);
      if (!req.params.thousand) {
        return next(
          ApiError.BadRequest("Missing Thousand in the query parameters!"),
        );
      }
      return res
        .status(200)
        .json(await bookService.getBooksByThousand(req.params.thousand));
    } catch (e) {
      console.log(e);
      next(e);
    }
  }

  async createBooksAll(req, res, next) {
    try {
      console.log("Start create books All!");
      let booksLength = await booksLengthService.getBooksLength();
      if (booksLength.number && booksLength.number > 0) {
        console.log("Start create books All! -> ", booksLength.number);
        await bookService.createBooksAll(booksLength.number);
      }
      return res.status(200).json({ done: true });
    } catch (e) {
      console.log(e);
      next(e);
    }
  }

  async createBooksStop(req, res, next) {
    try {
      await bookService.createBooksStop();
      return res.status(200).json({ done: true });
    } catch (e) {
      console.log(e);
      next(e);
    }
  }

  async createBooksByThousand(req, res, next) {
    try {
      console.log("create", req.params.thousand);
      if (!req.params.thousand) {
        return next(
          ApiError.BadRequest("Missing Thousand in the query parameters!"),
        );
      }
      await bookService.createBooksByThousand(req.params.thousand);
      return res
        .status(200)
        .json(await bookService.getBooksByThousand(req.params.thousand));
    } catch (e) {
      console.log(e);
      next(e);
    }
  }

  async getBooksLengthCreated(req, res, next) {
    try {
      return res.status(200).json(await bookService.getBooksLengthCreated());
    } catch (e) {
      console.log(e);
      next(e);
    }
  }

  async getById(req, res, next) {
    try {
      if (!req.params.id) {
        return next(ApiError.BadRequest("Missing ID in the query parameters!"));
      }
      return res.status(200).json(await bookService.getById());
    } catch (e) {
      console.log(e);
      next(e);
    }
  }

  async deleteAll(req, res, next) {
    try {
      return res.status(200).json(await bookService.deleteAll());
    } catch (e) {
      console.log(e);
      next(e);
    }
  }

  async deleteByThousand(req, res, next) {
    try {
      if (!req.params.thousand) {
        return next(
          ApiError.BadRequest("Missing Thousand in the query parameters!"),
        );
      }
      return res
        .status(200)
        .json(await bookService.deleteByThousand(req.params.thousand));
    } catch (e) {
      console.log(e);
      next(e);
    }
  }

  async deleteById(req, res, next) {
    try {
      let id = req.params.id;
      if (!id) {
        return next(ApiError.BadRequest("Missing ID in the query parameters!"));
      }
      let candidate = await bookService.getById(id);
      if (!candidate) {
        console.log("Not found Book with ID " + id);
        return next(ApiError.BadRequest("Not found Book with ID " + id + "!"));
      }
      return res.status(200).json(await bookService.deleteById(id));
    } catch (e) {
      console.log(e);
      next(e);
    }
  }
}

module.exports = new BookController();

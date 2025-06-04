const booksLengthService = require("../services/books-length-service");

class BookLengthController {
  async getBooksLength(req, res, next) {
    try {
      return res.status(200).json(await booksLengthService.getBooksLength());
    } catch (e) {
      console.log(e);
      next(e);
    }
  }

  async parsBooksLength(req, res, next) {
    try {
      return res.status(200).json(await booksLengthService.parsBooksLength());
    } catch (e) {
      console.log(e);
      next(e);
    }
  }
}

module.exports = new BookLengthController();

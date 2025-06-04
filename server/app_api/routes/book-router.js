const express = require("express");
const router = express.Router();

const controllerBook = require("../controllers/book-controller");
router.get("/get-books-list", controllerBook.getBooks);
router.get(
  "/get-books-by-thousand/:thousand",
  controllerBook.getBooksByThousand,
);
router.post("/create-books-all", controllerBook.createBooksAll);
router.post(
  "/create-books-by-thousand/:thousand",
  controllerBook.createBooksByThousand,
);
router.post("/create-books-stop", controllerBook.createBooksStop);
router.get("/get-books-length-created", controllerBook.getBooksLengthCreated);
router.get("/get-by-id", controllerBook.getById);
router.delete("/delete-books-all", controllerBook.deleteAll);
router.delete(
  "/delete-books-by-thousand/:thousand",
  controllerBook.deleteByThousand,
);
router.delete("/delete-by-id/:id", controllerBook.deleteById);

const controllerBooksLength = require("../controllers/book-length-controller");
router.get("/get-books-length", controllerBooksLength.getBooksLength);
router.post("/pars-books-length", controllerBooksLength.parsBooksLength);

const controllerBookPars = require("../controllers/book-pars-controller");
router.post("/pars-books-stop", controllerBookPars.parseBooksStop);
router.post("/pars-books-all", controllerBookPars.parsAll);
router.post("/pars-by-thousand/:number", controllerBookPars.parsByThousand);
router.post("/pars-by-id/:id", controllerBookPars.parsById);

module.exports = router;

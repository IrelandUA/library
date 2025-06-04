import { combineReducers } from "redux";
import books from "../features/books/booksSlice.ts";
import booksByThousandGet from "../features/books/getBooksByThousandSlice.ts";
import booksByThousandCreate from "../features/books/createBooksByThousand/createBooksByThousandSlice.ts";
import booksAllCreate from "../features/books/createBooksAll/createBooksAllSlice.ts";
import booksCreateStop from "../features/books/createBooksStop/createBooksStopSlice.ts";
import booksLengthParser from "../features/booksLength/checkBooksLength/checkBooksLengthSlice.ts";
import booksLength from "../features/booksLength/getBooksLength/booksLengthSlice.ts";
import booksLengthGet from "../features/booksLength/getBooksLength/getBooksLengthSlice.ts";
import booksLengthCreated from "../features/booksLength/booksLengthCreatedSlice.ts";
import booksLengthCreatedGet from "../features/booksLength/getBooksLengthCreatedSlice.ts";
import thousandNumber from "../features/buttonListByThousand/setThousandNumberSlice.ts";
import bookByIdParse from "../features/parsers/parsBookById/parsBookByIdSlice.ts";
import booksByThousandParser from "../features/parsers/parsBooksByThousand/parsBooksByThousandSlice.ts";
import booksAllParser from "../features/parsers/parsBooksAll/parsBooksAllSlice.ts";
import bookParseStop from "../features/parsers/parsBooksStop/parsBooksStopSlice.ts";
import booksByThousandDelete from "../features/books/deleteBooksByThousand/deleteBooksByThousandSlice.ts";
import booksAllDelete from "../features/books/deleteBooksAll/deleteBooksAllSlice.ts";

const rootReducer = combineReducers({
  books,
  booksByThousandGet,
  booksByThousandCreate,
  booksAllCreate,
  booksCreateStop,
  booksLength,
  booksLengthGet,
  booksLengthCreated,
  booksLengthCreatedGet,
  booksLengthParser,
  thousandNumber,
  booksByThousandParser,
  booksAllParser,
  bookParseStop,
  bookByIdParse,
  booksByThousandDelete,
  booksAllDelete,
});

export default rootReducer;

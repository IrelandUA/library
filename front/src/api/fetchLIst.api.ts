import { fetchToServer } from "./books.api.ts";
const url = "http://localhost:2800/api";

export const getBooksByThousandFetch = fetchToServer(
  "getBooksByThousand",
  `${url}/book/get-books-by-thousand`,
  "GET",
);

export const parsBookByIdFetch = fetchToServer(
  "parsBookById",
  `${url}/book/pars-by-id`,
  "POST",
);

export const parsBooksByThousandFetch = fetchToServer(
  "parsBooksByThousand",
  `${url}/book/pars-by-thousand`,
  "POST",
);

export const parsBooksAllFetch = fetchToServer(
  "parsBooksAll",
  `${url}/book/pars-books-all`,
  "POST",
);

export const parsBooksStopFetch = fetchToServer(
  "parsBooksStop",
  `${url}/book/pars-books-stop`,
  "POST",
);

export const createBooksByThousandFetch = fetchToServer(
  "createBooksByThousand",
  `${url}/book/create-books-by-thousand`,
  "POST",
);

export const createBooksAllFetch = fetchToServer(
  "createBooksAll",
  `${url}/book/create-books-all`,
  "POST",
);

export const createBooksStopFetch = fetchToServer(
  "createBooksStop",
  `${url}/book/create-books-stop`,
  "POST",
);

export const checkBooksLengthFetch = fetchToServer(
  "checkBooksLength",
  `${url}/book/pars-books-length`,
  "POST",
);

export const getBooksLengthFetch = fetchToServer(
  "getBooksLength",
  `${url}/book/get-books-length`,
  "GET",
);

export const getBooksLengthCreatedFetch = fetchToServer(
  "getBooksLengthCreated",
  `${url}/book/get-books-length-created`,
  "GET",
);

export const deleteBooksByThousandFetch = fetchToServer(
  "deleteBooksByThousand",
  `${url}/book/delete-books-by-thousand`,
  "DELETE",
);

export const deleteBooksAllFetch = fetchToServer(
  "deleteBooksAll",
  `${url}/book/delete-books-all`,
  "DELETE",
);

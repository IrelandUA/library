import type { FetchStateInterface } from "./fetchState.interface.ts";
import type { BookInterface } from "./book.interface.ts";

export interface BooksCreatedLengthStateInterface {
  data: number;
}

export interface BooksLengthStateInterface {
  data: {
    number: number;
    date: string;
  };
}

export interface BooksStateInterface {
  data: BookInterface[];
}

export interface BooksFetchStateInterface {
  [bookId: string]: FetchStateInterface;
}

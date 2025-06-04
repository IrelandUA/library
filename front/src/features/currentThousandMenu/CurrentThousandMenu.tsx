import { FetchStateIndicator } from "../../components/FetchStateIndicator.tsx";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store.ts";
import type { BookInterface } from "../../types/book.interface.ts";
import { ParsBooksByThousand } from "../parsers/parsBooksByThousand/ParsBooksByThousand.tsx";
import { CreateBooksByThousand } from "../books/createBooksByThousand/CreateBooksByThousand.tsx";
import type { FetchStateInterface } from "../../types/fetchState.interface.ts";
import type { BooksStateInterface } from "../../types/dataState.interface.ts";
import { DeleteBooksByThousand } from "../books/deleteBooksByThousand/DeleteBooksByThousand.tsx";

export function CurrentThousandMenu() {
  const booksState: BooksStateInterface = useSelector(
    (state: RootState) => state.books,
  );
  const booksByThousandGetState: FetchStateInterface = useSelector(
    (state: RootState) => state.booksByThousandGet,
  );
  const booksLengthGetState: FetchStateInterface = useSelector(
    (state: RootState) => state.booksLengthGet,
  );
  const thousandNumberState: { number: number } = useSelector(
    (state: RootState) => state.thousandNumber,
  );

  function parsedBooks() {
    return booksState.data.reduce(
      (acc: number, book: BookInterface) =>
        book.title.length > 0 ? acc + 1 : acc,
      0,
    );
  }

  return (
    <>
      <div className="ms-1 p-box flex flex-align-items">
        <p className="ps-1 pe-1">
          Books
          <span className="text-success ps-1">
            {thousandNumberState.number * 1000 + 1}-
            {thousandNumberState.number * 1000 + 1000}
          </span>
        </p>
        <p className="ps-1 pe-1">
          GET -
          <span className="text-success ps-1">{booksState.data.length}</span>
          <span className="ps-1">
            <FetchStateIndicator
              fetchState={booksByThousandGetState}
            ></FetchStateIndicator>
          </span>
        </p>
        {booksByThousandGetState.done && booksLengthGetState.done ? (
          <CreateBooksByThousand />
        ) : null}
        <p className="ps-1 pe-1">Parsed - {parsedBooks()}</p>
        <p className="ps-1">
          {booksState.data.length > parsedBooks() ? (
            <ParsBooksByThousand></ParsBooksByThousand>
          ) : null}
        </p>
        <p className="ps-1" style={{ marginLeft: "auto" }}>
          {booksState.data.length > 0 ? <DeleteBooksByThousand /> : null}
        </p>
      </div>
    </>
  );
}

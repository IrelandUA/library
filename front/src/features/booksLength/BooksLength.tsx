import { useDispatch, useSelector } from "react-redux";
import type {
  BooksCreatedLengthStateInterface,
  BooksLengthStateInterface,
} from "../../types/dataState.interface.ts";
import type { AppDispatch, RootState } from "../../app/store.ts";
import { formatDate } from "../../utils/formatDate.ts";
import { useEffect } from "react";
import type { FetchStateInterface } from "../../types/fetchState.interface.ts";
import {
  getBooksLengthCreatedFetch,
  getBooksLengthFetch,
} from "../../api/fetchLIst.api.ts";

export function BooksLength() {
  const booksLengthState: BooksLengthStateInterface = useSelector(
    (state: RootState) => state.booksLength,
  );

  const booksLengthCreatedState: BooksCreatedLengthStateInterface = useSelector(
    (state: RootState) => state.booksLengthCreated,
  );

  const booksLengthParserState: FetchStateInterface = useSelector(
    (state: RootState) => state.booksLengthParser,
  );

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getBooksLengthFetch(""));
    dispatch(getBooksLengthCreatedFetch(""));
  }, [dispatch, booksLengthParserState.done]);

  return (
    <>
      <div className="flex p-box flex-align-items">
        <p>
          <span className="ms-2">
            Total number of books:{" "}
            <span className="text-primary">{booksLengthState.data.number}</span>
          </span>
          <span className="ms-2">
            Created:{" "}
            <span className="text-success">{booksLengthCreatedState.data}</span>
          </span>
          <span className="ms-2">
            Parsed:{" "}
            <span className="text-warning">
              {formatDate(booksLengthState.data.date)}
            </span>
          </span>
        </p>
      </div>
    </>
  );
}

import {
  createBooksByThousandFetch,
  getBooksByThousandFetch,
} from "../../../api/fetchLIst.api.ts";

import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../app/store.ts";
import type { FetchStateInterface } from "../../../types/fetchState.interface.ts";
import { useEffect } from "react";
import type { ThousandNumber } from "../../buttonListByThousand/setThousandNumberSlice.ts";
import type {
  BooksLengthStateInterface,
  BooksStateInterface,
} from "../../../types/dataState.interface.ts";
import { FetchStateIndicator } from "../../../components/FetchStateIndicator.tsx";
import { resetCreateBooksByThousandState } from "./createBooksByThousandSlice.ts";

export function CreateBooksByThousand() {
  const dispatch = useDispatch<AppDispatch>();

  const booksState: BooksStateInterface = useSelector(
    (state: RootState) => state.books,
  );
  const booksByThousandCreateState: FetchStateInterface = useSelector(
    (state: RootState) => state.booksByThousandCreate,
  );
  const booksLengthState: BooksLengthStateInterface = useSelector(
    (state: RootState) => state.booksLength,
  );
  const thousandNumberState: ThousandNumber = useSelector(
    (state: RootState) => state.thousandNumber,
  );

  useEffect(() => {
    if (booksByThousandCreateState.done) {
      dispatch(getBooksByThousandFetch(thousandNumberState.number * 1000 + ""));
      dispatch(resetCreateBooksByThousandState());
    }
  }, [dispatch, booksByThousandCreateState.done, thousandNumberState.number]);

  function checkButtonShow() {
    return (
      (booksLengthState.data.number <
        thousandNumberState.number * 1000 + 1000 &&
        booksState.data.length <
          booksLengthState.data.number - thousandNumberState.number * 1000) ||
      booksState.data.length < 1000
    );
  }

  if (checkButtonShow()) {
    const number: string = thousandNumberState.number * 1000 + "";
    return (
      <>
        <button
          className="btn btn-success"
          onClick={() => dispatch(createBooksByThousandFetch(number))}
        >
          Create Books by Thousand
        </button>
        <FetchStateIndicator fetchState={booksByThousandCreateState} />
      </>
    );
  }
  return null;
}

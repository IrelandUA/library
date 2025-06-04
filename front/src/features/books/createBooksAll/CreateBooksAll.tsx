import {
  createBooksAllFetch,
  getBooksByThousandFetch,
} from "../../../api/fetchLIst.api.ts";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../app/store.ts";
import type { FetchStateInterface } from "../../../types/fetchState.interface.ts";
import type {
  BooksCreatedLengthStateInterface,
  BooksLengthStateInterface,
} from "../../../types/dataState.interface.ts";
import { FetchStateIndicator } from "../../../components/FetchStateIndicator.tsx";
import { resetCreateBooksAllState } from "./createBooksAllSlice.ts";
import { useEffect } from "react";
import type { ThousandNumber } from "../../buttonListByThousand/setThousandNumberSlice.ts";

export function CreateBooksAll() {
  const dispatch = useDispatch<AppDispatch>();
  const booksAllCreateState: FetchStateInterface = useSelector(
    (state: RootState) => state.booksAllCreate,
  );
  const booksLengthState: BooksLengthStateInterface = useSelector(
    (state: RootState) => state.booksLength,
  );
  const booksLengthCreatedState: BooksCreatedLengthStateInterface = useSelector(
    (state: RootState) => state.booksLengthCreated,
  );

  const thousandNumberState: ThousandNumber = useSelector(
    (state: RootState) => state.thousandNumber,
  );

  function checkButtonShow() {
    return booksLengthCreatedState.data < booksLengthState.data.number;
  }

  useEffect(() => {
    if (booksAllCreateState.done) {
      dispatch(getBooksByThousandFetch(thousandNumberState.number * 1000 + ""));
      dispatch(resetCreateBooksAllState());
    }
  }, [dispatch, booksAllCreateState.done, thousandNumberState.number]);

  if (checkButtonShow()) {
    return (
      <>
        <button
          className="btn btn-success"
          onClick={() => dispatch(createBooksAllFetch(""))}
        >
          Create Books All
        </button>
        <FetchStateIndicator fetchState={booksAllCreateState} />
      </>
    );
  }
  return null;
}

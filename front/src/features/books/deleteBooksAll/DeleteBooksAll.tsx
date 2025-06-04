import {
  deleteBooksAllFetch,
  getBooksByThousandFetch,
} from "../../../api/fetchLIst.api.ts";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../app/store.ts";
import type { FetchStateInterface } from "../../../types/fetchState.interface.ts";
import { FetchStateIndicator } from "../../../components/FetchStateIndicator.tsx";
import { useEffect } from "react";
import { resetParsBooksByThousandState } from "../../parsers/parsBooksByThousand/parsBooksByThousandSlice.ts";

export function DeleteBooksAll() {
  const dispatch = useDispatch<AppDispatch>();
  const booksAllDeleteState: FetchStateInterface = useSelector(
    (state: RootState) => state.booksAllDelete,
  );

  const thousandNumberState = useSelector(
    (state: RootState) => state.thousandNumber,
  );
  useEffect(() => {
    if (booksAllDeleteState.done) {
      dispatch(getBooksByThousandFetch(thousandNumberState.number + ""));
      dispatch(resetParsBooksByThousandState());
    }
  }, [dispatch, booksAllDeleteState.done, thousandNumberState.number]);

  return (
    <>
      <button
        className="btn btn-danger"
        onClick={() => {
          if (confirm("Are you sure you want to delete ALL BOOKS?")) {
            dispatch(deleteBooksAllFetch(""));
          }
        }}
      >
        Delete Books All
      </button>
      <FetchStateIndicator fetchState={booksAllDeleteState} />
    </>
  );
}

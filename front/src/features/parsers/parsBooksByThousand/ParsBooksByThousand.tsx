import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../app/store.ts";
import { FetchStateIndicator } from "../../../components/FetchStateIndicator.tsx";
import {
  getBooksByThousandFetch,
  parsBooksByThousandFetch,
} from "../../../api/fetchLIst.api.ts";
import { useEffect } from "react";
import { resetParsBooksStopState } from "../parsBooksStop/parsBooksStopSlice.ts";
import { resetDeleteBooksAllState } from "../../books/deleteBooksAll/deleteBooksAllSlice.ts";

export function ParsBooksByThousand() {
  const dispatch = useDispatch<AppDispatch>();
  const booksByThousandParserState = useSelector(
    (state: RootState) => state.booksByThousandParser,
  );
  const thousandNumberState = useSelector(
    (state: RootState) => state.thousandNumber,
  );
  useEffect(() => {
    if (booksByThousandParserState.done) {
      dispatch(getBooksByThousandFetch(thousandNumberState.number + ""));
      dispatch(resetDeleteBooksAllState());
    }
  }, [dispatch, booksByThousandParserState.done, thousandNumberState.number]);

  return (
    <>
      <button
        className="btn btn-success"
        onClick={() => {
          dispatch(resetParsBooksStopState());
          dispatch(parsBooksByThousandFetch(thousandNumberState.number + ""));
        }}
      >
        Pars Books By Thousand
      </button>
      <FetchStateIndicator
        fetchState={booksByThousandParserState}
      ></FetchStateIndicator>
    </>
  );
}

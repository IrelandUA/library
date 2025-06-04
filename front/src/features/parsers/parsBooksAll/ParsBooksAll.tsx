import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../app/store.ts";
import { FetchStateIndicator } from "../../../components/FetchStateIndicator.tsx";
import {
  getBooksByThousandFetch,
  parsBooksAllFetch,
} from "../../../api/fetchLIst.api.ts";
import { useEffect } from "react";
import { resetParsBooksAllState } from "./parsBooksAllSlice.ts";
import { resetParsBooksStopState } from "../parsBooksStop/parsBooksStopSlice.ts";

export function ParsBooksAll() {
  const dispatch = useDispatch<AppDispatch>();
  const booksAllParserState = useSelector(
    (state: RootState) => state.booksAllParser,
  );
  const thousandNumberState = useSelector(
    (state: RootState) => state.thousandNumber,
  );
  useEffect(() => {
    if (booksAllParserState.done) {
      dispatch(getBooksByThousandFetch(thousandNumberState.number + ""));
      dispatch(resetParsBooksAllState());
    }
  }, [dispatch, booksAllParserState.done, thousandNumberState.number]);

  return (
    <>
      <button
        className="btn btn-success"
        onClick={() => {
          dispatch(resetParsBooksStopState());
          dispatch(parsBooksAllFetch(""));
        }}
      >
        Pars Books All
      </button>
      <FetchStateIndicator
        fetchState={booksAllParserState}
      ></FetchStateIndicator>
    </>
  );
}

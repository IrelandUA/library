import {
  deleteBooksByThousandFetch,
  getBooksByThousandFetch,
} from "../../../api/fetchLIst.api.ts";

import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../app/store.ts";
import type { FetchStateInterface } from "../../../types/fetchState.interface.ts";
import { useEffect } from "react";
import type { ThousandNumber } from "../../buttonListByThousand/setThousandNumberSlice.ts";
import { FetchStateIndicator } from "../../../components/FetchStateIndicator.tsx";
import { resetDeleteBooksByThousandState } from "./deleteBooksByThousandSlice.ts";

export function DeleteBooksByThousand() {
  const dispatch = useDispatch<AppDispatch>();
  const booksByThousandDeleteState: FetchStateInterface = useSelector(
    (state: RootState) => state.booksByThousandDelete,
  );
  const thousandNumberState: ThousandNumber = useSelector(
    (state: RootState) => state.thousandNumber,
  );

  useEffect(() => {
    if (booksByThousandDeleteState.done) {
      dispatch(getBooksByThousandFetch(thousandNumberState.number * 1000 + ""));
      dispatch(resetDeleteBooksByThousandState());
    }
  }, [dispatch, booksByThousandDeleteState.done, thousandNumberState.number]);

  const number: string = thousandNumberState.number * 1000 + "";
  return (
    <>
      <button
        className="btn btn-danger"
        onClick={() => {
          if (confirm("Are you sure you want to delete this books?")) {
            dispatch(deleteBooksByThousandFetch(number));
          }
        }}
      >
        Delete Books by Thousand
      </button>
      <FetchStateIndicator fetchState={booksByThousandDeleteState} />
    </>
  );
}

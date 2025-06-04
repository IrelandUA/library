import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../app/store.ts";
import { FetchStateIndicator } from "../../../components/FetchStateIndicator.tsx";
import {
  getBooksByThousandFetch,
  parsBookByIdFetch,
} from "../../../api/fetchLIst.api.ts";
import { useEffect } from "react";

interface ParsBookByIdProps {
  id: string;
}

export function ParsBookById({ id }: ParsBookByIdProps) {
  const dispatch = useDispatch<AppDispatch>();
  const bookByIdParseState = useSelector(
    (state: RootState) => state.bookByIdParse[id],
  );
  const thousandNumberState: { number: number } = useSelector(
    (state: RootState) => state.thousandNumber,
  );
  useEffect(() => {
    if (bookByIdParseState.done) {
      dispatch(getBooksByThousandFetch(thousandNumberState.number * 1000 + ""));
    }
  }, [dispatch, bookByIdParseState.done, thousandNumberState.number]);

  function setStyle() {
    return bookByIdParseState.loading ? "btn btn-secondary" : "btn btn-primary";
  }

  return (
    <>
      <button
        className={setStyle()}
        onClick={() => {
          if (!bookByIdParseState.loading) {
            dispatch(parsBookByIdFetch(id));
          }
        }}
        disabled={bookByIdParseState.loading}
      >
        Pars Book
      </button>
      <p className="text-center">
        <FetchStateIndicator fetchState={bookByIdParseState} />
      </p>
    </>
  );
}

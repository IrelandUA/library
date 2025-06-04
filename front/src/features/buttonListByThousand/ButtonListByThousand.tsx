import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../app/store";
import type { BooksLengthStateInterface } from "../../types/dataState.interface.ts";
import { getBooksByThousandFetch } from "../../api/fetchLIst.api.ts";
import { setThousand } from "./setThousandNumberSlice.ts";
import type { FetchStateInterface } from "../../types/fetchState.interface.ts";
import { resetGetBooksByThousandDone } from "../books/getBooksByThousandSlice.ts";

export function ButtonListByThousand() {
  const dispatch = useDispatch<AppDispatch>();

  const booksByThousandGetState: FetchStateInterface = useSelector(
    (state: RootState) => state.booksByThousandGet,
  );
  const booksLengthState: BooksLengthStateInterface = useSelector(
    (state: RootState) => state.booksLength,
  );
  const thousandNumberState: { number: number } = useSelector(
    (state: RootState) => state.thousandNumber,
  );

  useEffect(() => {
    dispatch(getBooksByThousandFetch(thousandNumberState.number * 1000 + ""));
  }, [dispatch, thousandNumberState.number]);

  const blockList: string[] = useMemo(() => {
    const total = booksLengthState.data?.number;
    if (total && total > 0) {
      const count = Math.ceil(total / 1000);
      return Array.from({ length: count }, (_, i) => i.toString());
    }
    return [];
  }, [booksLengthState.data?.number]);

  function setClass(value: string) {
    return thousandNumberState.number === +value
      ? "btn btn-selected"
      : "btn btn-list";
  }

  return (
    <>
      <div className="p-box">
        {blockList.map((value) => (
          <button
            onClick={() => {
              dispatch(resetGetBooksByThousandDone());
              dispatch(setThousand(Number(value)));
            }}
            className={setClass(value)}
            key={value}
            disabled={
              thousandNumberState.number === Number(value) ||
              booksByThousandGetState.loading
            }
          >
            {+value * 1000}
          </button>
        ))}
      </div>
    </>
  );
}

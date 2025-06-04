import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../app/store.ts";
import { FetchStateIndicator } from "../../../components/FetchStateIndicator.tsx";
import { checkBooksLengthFetch } from "../../../api/fetchLIst.api.ts";
import type { FetchStateInterface } from "../../../types/fetchState.interface.ts";

export function CheckBooksLength() {
  const dispatch = useDispatch<AppDispatch>();
  const booksLengthParserState: FetchStateInterface = useSelector(
    (state: RootState) => state.booksLengthParser,
  );
  return (
    <>
      <button
        className="btn btn-success"
        onClick={() => dispatch(checkBooksLengthFetch(""))}
      >
        Check Books Length
      </button>
      <FetchStateIndicator
        fetchState={booksLengthParserState}
      ></FetchStateIndicator>
    </>
  );
}

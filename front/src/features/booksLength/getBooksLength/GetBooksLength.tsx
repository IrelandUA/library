import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../app/store.ts";
import { FetchStateIndicator } from "../../../components/FetchStateIndicator.tsx";
import type { FetchStateInterface } from "../../../types/fetchState.interface.ts";
import { getBooksLengthFetch } from "../../../api/fetchLIst.api.ts"; // путь поправь под свой проект

export function GetBooksLength() {
  const dispatch = useDispatch<AppDispatch>();
  const booksLengthGetState: FetchStateInterface = useSelector(
    (state: RootState) => state.booksLengthGet,
  );
  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => dispatch(getBooksLengthFetch(""))}
      >
        Get Books Length
      </button>
      <FetchStateIndicator
        fetchState={booksLengthGetState}
      ></FetchStateIndicator>
    </>
  );
}

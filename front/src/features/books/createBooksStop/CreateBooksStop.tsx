import { createBooksStopFetch } from "../../../api/fetchLIst.api.ts";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../app/store.ts";
import type { FetchStateInterface } from "../../../types/fetchState.interface.ts";
import { FetchStateIndicator } from "../../../components/FetchStateIndicator.tsx";

export function CreateBooksStop() {
  const dispatch = useDispatch<AppDispatch>();
  const booksCreateStopState: FetchStateInterface = useSelector(
    (state: RootState) => state.booksCreateStop,
  );

  return (
    <>
      <button
        className="btn btn-danger"
        onClick={() => dispatch(createBooksStopFetch(""))}
      >
        Stop create Books
      </button>
      <FetchStateIndicator fetchState={booksCreateStopState} />
    </>
  );
}

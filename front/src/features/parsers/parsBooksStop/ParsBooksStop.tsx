import type { AppDispatch, RootState } from "../../../app/store.ts";
import { useDispatch, useSelector } from "react-redux";
import { parsBooksStopFetch } from "../../../api/fetchLIst.api.ts";
import { FetchStateIndicator } from "../../../components/FetchStateIndicator.tsx";

export function ParsBooksStop() {
  const dispatch = useDispatch<AppDispatch>();
  const bookParseStopStatus = useSelector(
    (state: RootState) => state.bookParseStop,
  );
  return (
    <>
      <button
        className="btn btn-danger"
        onClick={() => dispatch(parsBooksStopFetch(""))}
      >
        Stop parsing book
      </button>
      <FetchStateIndicator
        fetchState={bookParseStopStatus}
      ></FetchStateIndicator>
    </>
  );
}

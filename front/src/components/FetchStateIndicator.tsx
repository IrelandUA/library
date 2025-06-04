import { useEffect, useState } from "react";
import type { FetchStateInterface } from "../types/fetchState.interface";

interface FetchStateIndicatorProps {
  fetchState: FetchStateInterface | undefined;
}

export function FetchStateIndicator({ fetchState }: FetchStateIndicatorProps) {
  const [showDone, setShowDone] = useState(false);

  useEffect(() => {
    if (fetchState?.done) {
      setShowDone(true);
      const timer = setTimeout(() => setShowDone(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [fetchState?.done]);

  if (!fetchState) return <span className="text-danger">State not found</span>;

  return (
    <>
      {fetchState.loading ? (
        <span className="text-warning">Loading...</span>
      ) : fetchState.error ? (
        <span className="text-danger">
          Status: {fetchState.error.status} - Error: {fetchState.error.message}
        </span>
      ) : showDone ? (
        <span className="text-success">Done!!!</span>
      ) : null}
    </>
  );
}

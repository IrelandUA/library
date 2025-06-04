import type { ErrorInterface } from "./error.interface.ts";

export interface FetchStateInterface {
  done: boolean;
  loading: boolean;
  error: null | ErrorInterface;
}

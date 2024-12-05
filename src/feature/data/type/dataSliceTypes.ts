import { ICharacter } from "../../../types/dataType";

interface ItemState {
  info: {
    pages: number;
    count: number;
  };
  items: ICharacter[];
  status: "idle" | "loading" | "succeeded" | "failed";
}

interface IFetchResult {
  results: ICharacter[];
  info: { pages: number; count: number };
}

export type { ItemState, IFetchResult };

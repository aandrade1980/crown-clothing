import { ICollections } from "../types";

export const UPDATE_COLLECTIONS = "UPDATE_COLLECTIONS";

interface updateCollections {
  type: typeof UPDATE_COLLECTIONS;
  payload: ICollections;
}

export interface ShopState {
  collections: ICollections;
}

export type ShopActionTypes = updateCollections;

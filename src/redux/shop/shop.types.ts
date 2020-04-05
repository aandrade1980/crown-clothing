import { ICollections } from "../types";

export const FETCH_COLLECTIONS_START = "FETCH_COLLECTIONS_START";
export const FETCH_COLLECTIONS_SUCCESS = "FETCH_COLLECTIONS_SUCCESS";
export const FETCH_COLLECTIONS_FAIL = "FETCH_COLLECTIONS_FAIL";

interface fetchCollectionsStart {
  type: typeof FETCH_COLLECTIONS_START;
  payload: boolean;
}

interface fetchCollectionsSuccess {
  type: typeof FETCH_COLLECTIONS_SUCCESS;
  payload: ICollections;
}

interface fetchCollectionsFail {
  type: typeof FETCH_COLLECTIONS_FAIL;
  payload: string;
}

export type ShopActionTypes =
  | fetchCollectionsStart
  | fetchCollectionsSuccess
  | fetchCollectionsFail;

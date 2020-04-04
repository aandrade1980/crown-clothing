import { ShopActionTypes, UPDATE_COLLECTIONS } from "./shop.types";
import { ICollections } from "../types";

export function updateCollections(
  collectionsMap: ICollections
): ShopActionTypes {
  return {
    type: UPDATE_COLLECTIONS,
    payload: collectionsMap
  };
}

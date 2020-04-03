import { createSelector } from "reselect";

import { IRootState } from "../types";

const selectShop = (state: IRootState) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = (collectionUrlParam: string) =>
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
  );

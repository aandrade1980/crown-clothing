import { createSelector } from "reselect";

import { IRootState } from "../types";

const selectShop = (state: IRootState) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

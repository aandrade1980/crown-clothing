import { UPDATE_COLLECTIONS, ShopActionTypes } from "./shop.types";

const INITIAL_STATE = {
  collections: null
};

export default function shopReducer(
  state = INITIAL_STATE,
  action: ShopActionTypes
) {
  switch (action.type) {
    case UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      };
    default:
      return state;
  }
}

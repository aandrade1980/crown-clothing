import { TOGGLE_CART_HIDDEN, CartActionTypes, ADD_ITEM } from "./types";
import { IItem } from "../../models/collection";

export function toggleCartHidden(): CartActionTypes {
  return {
    type: TOGGLE_CART_HIDDEN
  };
}

export function addItem(item: IItem): CartActionTypes {
  return {
    type: ADD_ITEM,
    payload: item
  };
}

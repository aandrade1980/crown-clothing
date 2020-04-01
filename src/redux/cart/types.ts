import { IItem } from "../../models/collection";

export const TOGGLE_CART_HIDDEN = "TOGGLE_CART_HIDDEN";
export const ADD_ITEM = "ADD_ITEM";

interface toggleCartAction {
  type: typeof TOGGLE_CART_HIDDEN;
}

interface addItemAction {
  type: typeof ADD_ITEM;
  payload: IItem;
}

export interface CartState {
  hidden: boolean;
  cartItems: IItem[];
}

export type CartActionTypes = toggleCartAction | addItemAction;

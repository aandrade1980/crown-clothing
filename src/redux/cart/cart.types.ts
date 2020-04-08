import { IItem } from '../../models/collection';

export const TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN';
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CLEAR_ITEM_FROM_CART = 'CLEAR_ITEM_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';

interface toggleCartAction {
  type: typeof TOGGLE_CART_HIDDEN;
}

interface addItemAction {
  type: typeof ADD_ITEM;
  payload: IItem;
}

interface clearItemFromCartAction {
  type: typeof CLEAR_ITEM_FROM_CART;
  payload: number;
}

interface removeItemAction {
  type: typeof REMOVE_ITEM;
  payload: IItem;
}

interface clearCartAction {
  type: typeof CLEAR_CART;
}

export interface CartState {
  hidden: boolean;
  cartItems: IItem[];
}

export type CartActionTypes =
  | toggleCartAction
  | addItemAction
  | clearItemFromCartAction
  | removeItemAction
  | clearCartAction;

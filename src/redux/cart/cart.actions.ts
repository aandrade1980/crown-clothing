import {
  ADD_ITEM,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM,
  TOGGLE_CART_HIDDEN,
  CartActionTypes,
  CLEAR_CART
} from './cart.types';
import { IItem } from '../../models/collection';

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

export function clearItemFromCart(id: number): CartActionTypes {
  return {
    type: CLEAR_ITEM_FROM_CART,
    payload: id
  };
}

export function removeItem(item: IItem): CartActionTypes {
  return {
    type: REMOVE_ITEM,
    payload: item
  };
}

export function clearCart(): CartActionTypes {
  return {
    type: CLEAR_CART
  };
}

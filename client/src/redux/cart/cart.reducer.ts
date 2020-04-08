import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  REMOVE_ITEM,
  CLEAR_ITEM_FROM_CART,
  CartActionTypes,
  CartState,
  CLEAR_CART
} from './cart.types';

import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE: CartState = {
  hidden: true,
  cartItems: []
};

export default function cartReducer(
  state = INITIAL_STATE,
  action: CartActionTypes
): CartState {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };
    case CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: [
          ...state.cartItems.filter(cartItem => cartItem.id !== action.payload)
        ]
      };
    case CLEAR_CART:
      return {
        ...state,
        cartItems: []
      };
    default:
      return state;
  }
}

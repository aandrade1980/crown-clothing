import { TOGGLE_CART_HIDDEN, CartActionTypes, CartState } from "./types";

const INITIAL_STATE = {
  hidden: true
};

export default function cartReducer(
  state = INITIAL_STATE,
  { type }: CartActionTypes
): CartState {
  switch (type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    default:
      return state;
  }
}

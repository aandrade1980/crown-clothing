export const TOGGLE_CART_HIDDEN = "TOGGLE_CART_HIDDEN";

interface toggleCartAction {
  type: typeof TOGGLE_CART_HIDDEN;
}

export type CartActionTypes = toggleCartAction;

export interface CartState {
  hidden: boolean;
}

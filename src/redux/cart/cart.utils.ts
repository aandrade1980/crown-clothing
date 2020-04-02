import { IItem } from "../../models/collection";

export const addItemToCart = (
  cartItems: IItem[],
  cartItemToAdd: IItem
): IItem[] => {
  const existingCartItem = cartItems.find(item => item.id === cartItemToAdd.id);

  if (existingCartItem) {
    return cartItems.map(
      item =>
        (item.id === cartItemToAdd.id && {
          ...item,
          quantity: item.quantity ? item.quantity + 1 : 0
        }) ||
        item
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (
  cartItems: IItem[],
  cartItemToRemove: IItem
) => {
  const existingCartItem = cartItems.find(
    ({ id }) => id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(({ id }) => id !== cartItemToRemove.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

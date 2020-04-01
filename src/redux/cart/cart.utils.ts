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

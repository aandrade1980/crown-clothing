import { IItem } from "../models/collection";

export interface IRootState {
  user: ICurrentUser;
  cart: ICart;
}

interface ICurrentUser {
  currentUser: firebase.User | null;
}

interface ICart {
  hidden: boolean;
  cartItems: IItem[];
}

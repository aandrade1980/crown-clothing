import { IItem, ICollection } from "../models/collection";
import { ISection } from "../models/section";

export interface IRootState {
  user: ICurrentUser;
  cart: ICart;
  directory: IDirectory;
  shop: ICollections;
}

interface ICurrentUser {
  currentUser: firebase.User | null;
}

interface ICart {
  hidden: boolean;
  cartItems: IItem[];
}

interface IDirectory {
  sections: ISection[];
}

export interface ICollections {
  collections: ICollection[];
}

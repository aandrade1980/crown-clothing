import { IItem, ICollection } from '../models/collection';
import { ISection } from '../models/section';

export interface IRootState {
  user: IUser;
  cart: ICart;
  directory: IDirectory;
  shop: IShop;
}

interface IUser {
  currentUser: ICurrentUser;
  errorMessage: string;
}

export interface ICurrentUser {
  currentUser: firebase.User | null;
}

interface ICart {
  hidden: boolean;
  cartItems: IItem[];
}

interface IDirectory {
  sections: ISection[];
}

interface IShop {
  collections: ICollections;
  isFetching: boolean;
  errorMessage: string;
}

export interface ICollections {
  collections: ICollection[];
}

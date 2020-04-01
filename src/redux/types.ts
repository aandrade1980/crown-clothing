export interface IRootState {
  user: ICurrentUser;
  cart: ICart;
}

interface ICurrentUser {
  currentUser: firebase.User | null;
}

interface ICart {
  hidden: boolean;
}

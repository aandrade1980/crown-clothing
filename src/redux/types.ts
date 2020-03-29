export interface IRootState {
  user: IUser;
}

interface IUser {
  currentUser: firebase.User;
}

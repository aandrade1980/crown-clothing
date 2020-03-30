export interface IRootState {
  user: ICurrentUser;
}

interface ICurrentUser {
  currentUser: firebase.User | null;
}

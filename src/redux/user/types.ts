export const SET_CURRENT_USER = "SET_CURRENT_USER";

interface SetCurrentUserAction {
  type: typeof SET_CURRENT_USER;
  payload: firebase.User | null;
}

export type UserActionTypes = SetCurrentUserAction;

export interface UserState {
  currentUser: firebase.User | null;
}

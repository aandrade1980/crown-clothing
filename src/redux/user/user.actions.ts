import { SET_CURRENT_USER, UserActionTypes } from "./user.types";

export function setCurrentUser(user: firebase.User | null): UserActionTypes {
  return {
    type: SET_CURRENT_USER,
    payload: user
  };
}

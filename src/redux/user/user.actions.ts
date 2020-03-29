import { SET_CURRENT_USER, UserActionTypes } from "./types";

export function setCurrentUser(user: firebase.User): UserActionTypes {
  return {
    type: SET_CURRENT_USER,
    payload: user
  };
}

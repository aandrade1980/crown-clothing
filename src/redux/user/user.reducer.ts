import { SET_CURRENT_USER, UserActionTypes, UserState } from "./user.types";

const INITIAL_STATE: UserState = {
  currentUser: null
};

export default function userReducer(
  state = INITIAL_STATE,
  { type, payload }: UserActionTypes
): UserState {
  switch (type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      };
    default:
      return state;
  }
}

import {
  UserActionTypes,
  UserState,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE
} from './user.types';

const INITIAL_STATE: UserState = {
  currentUser: null,
  errorMessage: undefined
};

export default function userReducer(
  state = INITIAL_STATE,
  action: UserActionTypes
) {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        errorMessage: undefined
      };
    case SIGN_IN_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      };
    default:
      return state;
  }
}

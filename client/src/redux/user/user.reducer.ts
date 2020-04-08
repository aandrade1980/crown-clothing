import {
  UserActionTypes,
  UserState,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT_FAILURE,
  SIGN_OUT_SUCCESS,
  SIGN_UP_FAILURE
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
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        errorMessage: undefined
      };
    case SIGN_IN_FAILURE:
    case SIGN_OUT_FAILURE:
    case SIGN_UP_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      };
    default:
      return state;
  }
}

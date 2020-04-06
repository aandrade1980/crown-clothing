import {
  UserActionTypes,
  UserState,
  GOOGLE_SIGN_IN_SUCCESS,
  EMAIL_SIGN_IN_SUCCESS,
  GOOGLE_SIGN_IN_FAILURE,
  EMAIL_SIGN_IN_FAILURE
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
    case GOOGLE_SIGN_IN_SUCCESS:
    case EMAIL_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        errorMessage: undefined
      };
    case GOOGLE_SIGN_IN_FAILURE:
    case EMAIL_SIGN_IN_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      };
    default:
      return state;
  }
}

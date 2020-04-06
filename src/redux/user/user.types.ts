export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const GOOGLE_SIGN_IN_START = 'GOOGLE_SIGN_IN_START';
export const GOOGLE_SIGN_IN_SUCCESS = 'GOOGLE_SIGN_IN_SUCCESS';
export const GOOGLE_SIGN_IN_FAILURE = 'GOOGLE_SIGN_IN_FAILURE';
export const EMAIL_SIGN_IN_START = 'EMAIL_SIGN_IN_START';
export const EMAIL_SIGN_IN_SUCCESS = 'EMAIL_SIGN_IN_SUCCESS';
export const EMAIL_SIGN_IN_FAILURE = 'EMAIL_SIGN_IN_FAILURE';

interface GoogleSignInStart {
  type: typeof GOOGLE_SIGN_IN_START;
}

interface GoogleSignInSuccess {
  type: typeof GOOGLE_SIGN_IN_SUCCESS;
  payload: firebase.User;
}

interface GoogleSignInFailure {
  type: typeof GOOGLE_SIGN_IN_FAILURE;
  payload: string;
}

interface EmailSignInStart {
  type: typeof EMAIL_SIGN_IN_START;
}

interface EmailSignInSuccess {
  type: typeof EMAIL_SIGN_IN_SUCCESS;
  payload: IFirebaseUser;
}

interface EmailSignInFailure {
  type: typeof EMAIL_SIGN_IN_FAILURE;
  payload: string;
}

export type UserActionTypes =
  | GoogleSignInStart
  | GoogleSignInSuccess
  | GoogleSignInFailure
  | EmailSignInStart
  | EmailSignInSuccess
  | EmailSignInFailure;

export interface UserState {
  currentUser: firebase.User | null;
  errorMessage: string;
}

export interface IFirebaseUser {
  user: firebase.User | null;
}

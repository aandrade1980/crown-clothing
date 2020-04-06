import { IUSer } from '../../models/user';

export const EMAIL_SIGN_IN_START = 'EMAIL_SIGN_IN_START';
export const GOOGLE_SIGN_IN_START = 'GOOGLE_SIGN_IN_START';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';
export const CHECK_USER_SESSION = 'CHECK_USER_SESSION';
export const SIGN_OUT_START = 'SIGN_OUT_START';
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';
export const SIGN_OUT_FAILURE = 'SIGN_OUT_FAILURE';

interface SingOutStart {
  type: typeof SIGN_OUT_START;
}

interface SingOutSuccess {
  type: typeof SIGN_OUT_SUCCESS;
}

interface SingOutFailure {
  type: typeof SIGN_OUT_FAILURE;
  payload: string;
}

interface GoogleSignInStart {
  type: typeof GOOGLE_SIGN_IN_START;
}

interface SignInSuccess {
  type: typeof SIGN_IN_SUCCESS;
  payload: firebase.User;
}

interface SignInFailure {
  type: typeof SIGN_IN_FAILURE;
  payload: string;
}

interface EmailSignInStart {
  type: typeof EMAIL_SIGN_IN_START;
  payload: IUSer;
}

export type UserActionTypes =
  | GoogleSignInStart
  | EmailSignInStart
  | SignInSuccess
  | SignInFailure
  | SingOutStart
  | SingOutSuccess
  | SingOutFailure;

export interface UserState {
  currentUser: firebase.User | null;
  errorMessage: string;
}

export interface IFirebaseUser {
  user: firebase.User | null;
}

import { IUSer } from '../../models/user';

export const GOOGLE_SIGN_IN_START = 'GOOGLE_SIGN_IN_START';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';
export const EMAIL_SIGN_IN_START = 'EMAIL_SIGN_IN_START';

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
  | SignInFailure;

export interface UserState {
  currentUser: firebase.User | null;
  errorMessage: string;
}

export interface IFirebaseUser {
  user: firebase.User | null;
}

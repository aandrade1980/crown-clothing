import {
  GOOGLE_SIGN_IN_START,
  GOOGLE_SIGN_IN_SUCCESS,
  IFirebaseUser,
  GOOGLE_SIGN_IN_FAILURE,
  EMAIL_SIGN_IN_START,
  EMAIL_SIGN_IN_SUCCESS,
  EMAIL_SIGN_IN_FAILURE
} from './user.types';

export const googleSignInStart = () => ({
  type: GOOGLE_SIGN_IN_START
});

export const googleSignInSuccess = (user: IFirebaseUser) => ({
  type: GOOGLE_SIGN_IN_SUCCESS,
  payload: user
});

export const googleSignInFailure = (error: string) => ({
  type: GOOGLE_SIGN_IN_FAILURE,
  payload: error
});

export const emailSignInStart = () => ({
  type: EMAIL_SIGN_IN_START
});

export const emailSignInSuccess = (user: IFirebaseUser) => ({
  type: EMAIL_SIGN_IN_SUCCESS,
  payload: user
});

export const emailSignInFailure = (error: string) => ({
  type: EMAIL_SIGN_IN_FAILURE,
  payload: error
});

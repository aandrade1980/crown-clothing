import {
  IFirebaseUser,
  GOOGLE_SIGN_IN_START,
  EMAIL_SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  CHECK_USER_SESSION,
  SIGN_OUT_START,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE
} from './user.types';

export const googleSignInStart = () => ({
  type: GOOGLE_SIGN_IN_START
});

export const signInSuccess = (user: IFirebaseUser) => ({
  type: SIGN_IN_SUCCESS,
  payload: user
});

export const signInFailure = (error: string) => ({
  type: SIGN_IN_FAILURE,
  payload: error
});

export const emailSignInStart = (email: string, password: string) => ({
  type: EMAIL_SIGN_IN_START,
  payload: { email, password }
});

export const checkUserSession = () => ({
  type: CHECK_USER_SESSION
});

export const signOutStart = () => ({
  type: SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: SIGN_OUT_SUCCESS
});

export const signOutFailure = (error: string) => ({
  type: SIGN_OUT_FAILURE,
  payload: error
});

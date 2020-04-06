import {
  IFirebaseUser,
  GOOGLE_SIGN_IN_START,
  EMAIL_SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE
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

import {
  IFirebaseUser,
  GOOGLE_SIGN_IN_START,
  EMAIL_SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  CHECK_USER_SESSION,
  SIGN_OUT_START,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  SIGN_UP_START,
  SIGN_UP_FAILURE,
  SIGN_UP_SUCCESS
} from './user.types';

import { IUSer } from '../../models/user';

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

export const signUpStart = (userCredentials: IUSer) => ({
  type: SIGN_UP_START,
  payload: userCredentials
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: SIGN_UP_SUCCESS,
  payload: { user, additionalData }
});

export const signUpFailure = (error: string) => ({
  type: SIGN_UP_FAILURE,
  payload: error
});

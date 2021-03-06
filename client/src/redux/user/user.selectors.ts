import { createSelector } from 'reselect';

import { IRootState } from '../types';

const selectUser = (state: IRootState) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);

export const selectSignInErrorMessage = createSelector(
  [selectUser],
  user => user.errorMessage
);

import { createSelector } from "reselect";

import { IRootState } from "../types";

const selectDirectory = (state: IRootState) => state.directory;

export const selectSections = createSelector(
  [selectDirectory],
  directory => directory.sections
);

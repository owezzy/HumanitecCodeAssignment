import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PROGRAMS_FEATURE_KEY, ProgramsState } from './programs.reducer';

// Lookup the 'Programs' feature state managed by NgRx
const getProgramsState = createFeatureSelector<ProgramsState>(
  PROGRAMS_FEATURE_KEY
);

const getLoaded = createSelector(
  getProgramsState,
  (state: ProgramsState) => state.loaded
);
const getError = createSelector(
  getProgramsState,
  (state: ProgramsState) => state.error
);

const getAllPrograms = createSelector(
  getProgramsState,
  getLoaded,
  (state: ProgramsState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getProgramsState,
  (state: ProgramsState) => state.selectedId
);
const getSelectedPrograms = createSelector(
  getAllPrograms,
  getSelectedId,
  (programs, id) => {
    const result = programs.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const programsQuery = {
  getLoaded,
  getError,
  getAllPrograms,
  getSelectedPrograms
};

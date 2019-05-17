import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPrograms from './programs.reducer'
import { ProgramModel } from '@humanitec/programs';

// update shape of state
export interface AppState {
  programs: fromPrograms.ProgramsState
}
// add feature reducer to combined reducer
export  const reducer: ActionReducerMap<AppState> = {
  programs: fromPrograms.programsReducer
};

// selectors, Lookup the 'Programs' feature state managed by NgRx
export const getProgramsState = createFeatureSelector<fromPrograms.ProgramsState>(
  'programs'
);

export const selectProgramId = createSelector(
  getProgramsState,
  fromPrograms.selectedProgramIds
);

const selectProgramsEntities = createSelector(
  getProgramsState,
  fromPrograms.selectedProgramEntities
);

export const selectAllPrograms = createSelector(
  getProgramsState,
  fromPrograms.selectAllPrograms
);

const selectCurrentProgramId = createSelector(
  getProgramsState,
  fromPrograms.getSelectedProgramId
);

const emptyProgram: ProgramModel = {
  id: null,
  title: '',
  detail: '',
  activityId: null
};

export const selectCurrentProgram = createSelector(
  selectProgramsEntities,
  selectCurrentProgramId,
  (programEntities, programId) => {
    console.log('SELECTOR', programId);
    return programId? programEntities[programId]: emptyProgram
  }
);

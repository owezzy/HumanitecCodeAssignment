import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { PROGRAMS_FEATURE_KEY, ProgramsState } from './programs.reducer';
import * as fromPrograms from './programs.reducer'
import { from } from 'rxjs';
import { ProgramModel } from '@humanitec/programs';

export interface AppState {
  programs: fromPrograms.ProgramsState
}

export  const reducer: ActionReducerMap<AppState> = {
  programs: fromPrograms.programsReducer
};

// selectors, Lookup the 'Programs' feature state managed by NgRx
export const getProgramsState = createFeatureSelector<fromPrograms.ProgramsState>(
  PROGRAMS_FEATURE_KEY
);

const selectProgramId = createSelector(
  getProgramsState,
  fromPrograms.selectedProgramIds
);

const selectProgramsEntities = createSelector(
  getProgramsState,
  fromPrograms.selectedProgramEntities
);

const selectAllPrograms = createSelector(
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
}

const selectCurrentProgram = createSelector(
  selectProgramsEntities,
  selectCurrentProgramId,
  (programEntities, programId) => {
    console.log('SELECTOR', programId)
    return programId? programEntities[programId]: emptyProgram
  }
)

export const programsQuery = {
  selectProgramId,
  selectProgramsEntities,
  selectAllPrograms,
  selectCurrentProgramId,
  selectCurrentProgram
};

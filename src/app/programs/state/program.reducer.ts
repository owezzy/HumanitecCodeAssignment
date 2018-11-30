import { Program } from '../program';

/* NgRx */
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProgramActions, ProgramActionTypes } from './program.actions';
import * as fromRoot from '../../state/app.state';

// Extends the app state to include the program feature.
// This is required because programs are lazy loaded.
// So the reference to ProgramState cannot be added to app.state.ts directly.
export interface State extends fromRoot.State {
  programs: ProgramState;
}

// State for this feature (Program)
export interface ProgramState {
  showProgramCode: boolean;
  currentProgramId: number | null;
  programs: Program[];
  error: string;
}

const initialState: ProgramState = {
  showProgramCode: true,
  currentProgramId: null,
  programs: [],
  error: ''
};

// Selector functions
const getProgramFeatureState = createFeatureSelector<ProgramState>('programs');

export const getShowProgramCode = createSelector(
  getProgramFeatureState,
  state => state.showProgramCode
);

export const getCurrentProgramId = createSelector(
  getProgramFeatureState,
  state => state.currentProgramId
);

export const getCurrentProgram = createSelector(
  getProgramFeatureState,
  getCurrentProgramId,
  (state, currentProgramId) => {
    if (currentProgramId === 0) {
      return {
        id: 0,
        name: '',
        level1_uuid: '',
        programCode: 'New'
      };
    } else {
      return currentProgramId ? state.programs.find(p => p.id === currentProgramId) : null;
    }
  }
);

export const getPrograms = createSelector(
  getProgramFeatureState,
  state => state.programs
);

export const getError = createSelector(
  getProgramFeatureState,
  state => state.error
);

export function reducer(state = initialState, action: ProgramActions): ProgramState {

  switch (action.type) {
    case ProgramActionTypes.ToggleProgramCode:
      return {
        ...state,
        showProgramCode: action.payload
      };

    case ProgramActionTypes.SetCurrentProgram:
      return {
        ...state,
        currentProgramId: action.payload.id
      };

    case ProgramActionTypes.ClearCurrentProgram:
      return {
        ...state,
        currentProgramId: null
      };

    case ProgramActionTypes.InitializeCurrentProgram:
      return {
        ...state,
        currentProgramId: 0
      };

    case ProgramActionTypes.LoadSuccess:
      return {
        ...state,
        programs: action.payload,
        error: ''
      };

    case ProgramActionTypes.LoadFail:
      return {
        ...state,
        programs: [],
        error: action.payload
      };

    case ProgramActionTypes.UpdateProgramSuccess:
      const updatedPrograms = state.programs.map(
        item => action.payload.id === item.id ? action.payload : item);
      return {
        ...state,
        programs: updatedPrograms,
        currentProgramId: action.payload.id,
        error: ''
      };

    case ProgramActionTypes.UpdateProgramFail:
      return {
        ...state,
        error: action.payload
      };

    // After a create, the currentProgram is the new program.
    case ProgramActionTypes.CreateProgramSuccess:
      return {
        ...state,
        programs: [...state.programs, action.payload],
        currentProgramId: action.payload.id,
        error: ''
      };

    case ProgramActionTypes.CreateProgramFail:
      return {
        ...state,
        error: action.payload
      };

    // After a delete, the currentProgram is null.
    case ProgramActionTypes.DeleteProgramSuccess:
      return {
        ...state,
        programs: state.programs.filter(program => program.id !== action.payload),
        currentProgramId: null,
        error: ''
      };

    case ProgramActionTypes.DeleteProgramFail:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
}

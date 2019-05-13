import { ProgramsAction, ProgramsActionTypes } from './programs.actions';

export const PROGRAMS_FEATURE_KEY = 'programs';

/**
 * Interface for the 'Programs' data used in
 *  - ProgramsState, and
 *  - programsReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface ProgramsState {
  list: Entity[]; // list of Programs; analogous to a sql normalized table
  selectedId?: string | number; // which Programs record has been selected
  loaded: boolean; // has the Programs list been loaded
  error?: any; // last none error (if any)
}

export interface ProgramsPartialState {
  readonly [PROGRAMS_FEATURE_KEY]: ProgramsState;
}

export const initialState: ProgramsState = {
  list: [],
  loaded: false
};

export function programsReducer(
  state: ProgramsState = initialState,
  action: ProgramsAction
): ProgramsState {
  switch (action.type) {
    case ProgramsActionTypes.ProgramsLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
  }
  return state;
}

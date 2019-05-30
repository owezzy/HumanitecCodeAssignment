import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import {ProgramsAction, ProgramsActionTypes } from './programs.actions';
import { ProgramModel } from '../program.model';


/**
 * Interface for the 'Programs' data used in
 *  - ProgramsState, and
 *  - programsReducer
 *
 */
// define shape of state
export interface ProgramsState extends EntityState<ProgramModel>{
  selectedProgramId: string | null; // which Programs record has been selected
}
//entity adapter
export const adapter: EntityAdapter<ProgramModel> = createEntityAdapter<ProgramModel>();

// define init state
export const initialState: ProgramsState = adapter.getInitialState({
  selectedProgramId: null,
});

export function programsReducer(
  state = initialState, action: ProgramsAction): ProgramsState {
  switch (action.type) {
    case ProgramsActionTypes.ProgramSelected: {
      return Object.assign({}, state, {getSelectedProgramId: action.payload});
    }

    case ProgramsActionTypes.LoadedPrograms: {
      return adapter.addAll(action.payload, state);
    }

    case ProgramsActionTypes.ProgramAdded:{
      return adapter.addOne(action.payload, state);
    }

    case ProgramsActionTypes.ProgramUpdated: {
      return adapter.upsertOne(action.payload, state);
    }

    case ProgramsActionTypes.ProgramDeleted: {
      return adapter.removeOne(action.payload.id, state);
    }

    default:
      return state;
  }
}



// low level selectors
export const getSelectedProgramId = (state: ProgramsState) => state.selectedProgramId;

const {selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

export const selectProgramIds = selectIds;
export const selectedProgramEntities = selectEntities;
export const selectAllPrograms = selectAll;
export const selectProgramsTotal = selectTotal;

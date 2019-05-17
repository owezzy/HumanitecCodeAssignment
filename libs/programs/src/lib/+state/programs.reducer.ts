import {ProgramsAction, ProgramsActionTypes } from './programs.actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { ProgramModel } from '@humanitec/programs';


/**
 * Interface for the 'Programs' data used in
 *  - ProgramsState, and
 *  - programsReducer
 *
 *  Note: replace if already defined in another module
 */
// define shape of state
export interface ProgramsState extends EntityState<ProgramModel>{
  selectedProgramId: string | null; // which Programs record has been selected
}
//entity adapter
export const adapter: EntityAdapter<ProgramModel> = createEntityAdapter<ProgramModel>();

// define init state
export const initialState: ProgramsState = adapter.getInitialState({
  selectedProgramId: null
});

export function programsReducer(
  state = initialState, action: ProgramsAction): ProgramsState {
  switch (action.type) {
    case ProgramsActionTypes.ProgramSelected:
      return Object.assign({}, state, {selectedProgramId: action.payload});

    case ProgramsActionTypes.ProgramsLoaded:
      return adapter.addMany(action.payload, state);

    case ProgramsActionTypes.ProgramAdded:
      return adapter.addOne(action.payload, state);

    case ProgramsActionTypes.UpdateProgram:
      return adapter.upsertOne(action.payload, state);

    case ProgramsActionTypes.DeleteProgram:
      return adapter.removeOne(action.payload.id, state);

    default:
      return state;
  }
}



// selectors
export const getSelectedProgramId = (state: ProgramsState) => state.selectedProgramId;

const {selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

export const selectedProgramIds = selectIds;
export const selectedProgramEntities = selectEntities;
export const selectAllPrograms = selectAll;
export const selectProgramsTotal = selectTotal;

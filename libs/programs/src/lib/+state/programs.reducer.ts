import { ProgramsActionTypes } from './programs.actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { ProgramModel } from '@humanitec/programs';

export const PROGRAMS_FEATURE_KEY = 'programs';

export const initialPrograms: ProgramModel[] = [
  {
    id: '1',
    title: 'Project One',
    detail: 'This is a sample project',
    activityId: null
  },
  {
    id: '2',
    title: 'Project Two',
    detail: 'This is a sample project',
    activityId: null

  },
  {
    id: '3',
    title: 'Project Three',
    detail: 'This is a sample project',
    activityId: null
  }];
/**
 * Interface for the 'Programs' data used in
 *  - ProgramsState, and
 *  - programsReducer
 *
 *  Note: replace if already defined in another module
 */

const createProgram = (programs, program) => [...programs, program];
const updateProgram = (programs, program) =>
  programs.map(p => {
      return p.id === program.id ? Object.assign({}, program): p;
    }
  );
const deleteProgram = (programs, program) =>
  programs.filter(w => program.id !== w.id);

// define shape of state
export interface ProgramsState extends EntityState<ProgramModel>{
  selectedProgramId?: string | null; // which Programs record has been selected
}

export interface ProgramsPartialState {
  readonly [PROGRAMS_FEATURE_KEY]: ProgramsState;
}

//entity adapter
export const adapter: EntityAdapter<ProgramModel> = createEntityAdapter<ProgramModel>();

// define init state
export const initialState: ProgramsState = adapter.getInitialState({
  selectedProgramId: null
});


export function programsReducer(
  state = initialState, action): ProgramsState {
  switch (action.type) {
    case ProgramsActionTypes.ProgramSelected:
      return Object.assign({}, state, {selectedProgramId: action.payload});

    case ProgramsActionTypes.ProgramsLoaded:
      return adapter.addMany(action.payload, state);

    case ProgramsActionTypes.ProgramAdded:
      return adapter.addOne(action.payload, state);

    case ProgramsActionTypes.UpdateProgram:
      return adapter.updateOne(action.payload, state);

    case ProgramsActionTypes.DeleteProgram:
      return adapter.removeOne(action.payload, state);

    default:
      return state;
  }
}

// selectors
export const getSelectedProgramId = (state: ProgramsState) => state.selectedProgramId;

const {selectIds, selectEntities, selectAll } = adapter.getSelectors();

export const selectedProgramIds = selectIds;
export const selectedProgramEntities = selectEntities;
export const selectAllPrograms = selectAll;


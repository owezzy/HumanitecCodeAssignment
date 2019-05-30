import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { ActivitiesAction, ActivitiesActionTypes } from './activities.actions';
import { ActivityModel } from '../activity-model';


/**
 * Interface for the 'Activities' data used in
 *  - ActivitiesState, and
 *  - activitiesReducer
 *
 */


export interface ActivitiesState extends EntityState<ActivityModel> {
  selectedActivityId: string | null;
}

export const adapter: EntityAdapter<ActivityModel> = createEntityAdapter<ActivityModel>();


export const initialState: ActivitiesState = adapter.getInitialState({
  selectedActivityId: null
});


export function activitiesReducer(
  state = initialState,
  action: ActivitiesAction
): ActivitiesState {
  switch (action.type) {
    case ActivitiesActionTypes.ActivitySelected: {
      return Object.assign({}, state, {selectedActivityId: action.payload})
    }

    case ActivitiesActionTypes.ActivitiesLoaded: {
      return adapter.addAll(action.payload, state);
    }

    case ActivitiesActionTypes.ActivityAdded: {
      return adapter.addOne(action.payload, state)
    }

    case ActivitiesActionTypes.ActivityUpdated: {
      return adapter.upsertOne(action.payload, state)
    }

    case ActivitiesActionTypes.ActivityDeleted: {
      return adapter.removeOne(action.payload.id, state)
    }

    default:
      return state;
  }
}


export const getSelectedActivityId = (state: ActivitiesState) => state.selectedActivityId;

// get the selector
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

// select the array of widget ids
export const selectActivityIds = selectIds;

// select the dictionary of activities entities
export const selectActivityEntities = selectEntities;

// select the array of widgets
export const selectAllActivities = selectAll;

// select total activities count
export const selecActivitiesTotal = selectTotal;

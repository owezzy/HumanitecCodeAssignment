import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { ActivitiesState } from './activities.reducer';
import * as fromActivities from './activities.reducer';
import { ActivityModel } from '../activity-model';
//import { selectAllPrograms } from '@humanitec/programs';

// update shape of state
export interface AppState {
  activities: fromActivities.ActivitiesState
}
// add feature reducer to combined reducer
export  const reducer: ActionReducerMap<AppState> = {
  activities: fromActivities.activitiesReducer
};

// Lookup the 'Activities' feature state managed by NgRx
export const getActivitiesState = createFeatureSelector<ActivitiesState>(
  'activities'
);

export const getLoaded = createSelector(
  getActivitiesState,
  fromActivities.selectActivityIds
);


export const getAllActivityEntities = createSelector(
  getActivitiesState,
  fromActivities.selectActivityEntities
);


export const getSelectedActivityId = createSelector(
  getActivitiesState,
  fromActivities.getSelectedActivityId);


export const selectAllActivities = createSelector(
  getActivitiesState,
  fromActivities.selectAllActivities
);

const emptyActivity: ActivityModel = {
  id: null,
  name: '',
  startDate: '',
  endDate: ''
};

export const selectCurrentActivity = createSelector(
  getAllActivityEntities,
  getSelectedActivityId,
  (activitiesEntities, activityId) => {
    return activityId ? activitiesEntities[activityId]: emptyActivity
  }
);

// export const selectActivitiesPrograms = createSelector(
//   selectAllActivities,
//   selectAllPrograms,
//   (activities, programs) => {
//     return activities.map(activity => {
//       return Object.assign({},
//         {...activity,
//         programs: programs.filter(program => program.activityId === activity.id)})
//     })
//   });


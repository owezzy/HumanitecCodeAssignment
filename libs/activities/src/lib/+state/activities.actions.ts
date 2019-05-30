import { Action } from '@ngrx/store';
import { ActivityModel } from '../activity-model';


export enum ActivitiesActionTypes {
  ActivitySelected = '[Activities] Selected',
  ActivityAction = '[Activities] Action',

  LoadActivities = '[Activities] Load Activities',
  ActivitiesLoaded = '[Activities] Activities Loaded',

  AddActivity = '[Activity] Add Activity',
  ActivityAdded = '[Activity] Added Activity',

  UpdateActivity = '[Activities] Update Activity',
  ActivityUpdated = '[Activities] Updated Activity',

  DeleteActivity = '[Activity] Delete Activity',
  ActivityDeleted = '[Activity] Deleted Activity',
}

export class Activities implements Action {
  readonly type =ActivitiesActionTypes.ActivityAction;
}

export class ActivitySelected implements Action {
  readonly type = ActivitiesActionTypes.ActivitySelected;
  constructor(public payload) {  }
}

export class LoadActivities implements Action {
  readonly type = ActivitiesActionTypes.LoadActivities;
  constructor() {}
}

export class ActivitiesLoaded implements Action {
  readonly type = ActivitiesActionTypes.ActivitiesLoaded;
  constructor(public payload: ActivityModel[]) {}
}

export class AddActivity implements Action {
  readonly type = ActivitiesActionTypes.AddActivity;
  constructor(public payload: ActivityModel) {  }
}

export class ActivityAdded implements Action {
  readonly type = ActivitiesActionTypes.ActivityAdded;
  constructor(public payload: ActivityModel) {  }
}

export class UpdateActivity implements Action {
  readonly type = ActivitiesActionTypes.UpdateActivity;
  constructor(public payload: ActivityModel) {  }
}

export class ActivityUpdated implements Action {
  readonly type = ActivitiesActionTypes.ActivityUpdated;
  constructor(public payload: ActivityModel) {  }
}

export class DeleteActivity implements Action {
  readonly type = ActivitiesActionTypes.DeleteActivity;
  constructor(public payload: ActivityModel) {  }
}

export class ActivityDeleted implements Action {
  readonly type = ActivitiesActionTypes.ActivityDeleted;
  constructor(public payload: ActivityModel) {  }
}

export type ActivitiesAction = Activities
  | ActivitySelected
  | LoadActivities
  | ActivitiesLoaded
  | AddActivity
  | ActivityAdded
  | UpdateActivity
  | ActivityUpdated
  | DeleteActivity
  | ActivityDeleted
  ;

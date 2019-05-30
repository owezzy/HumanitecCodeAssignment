import { Injectable } from '@angular/core';
import { ActionsSubject, select, Store } from '@ngrx/store';

import { filter } from 'rxjs/operators';

import { selectAllActivities, selectCurrentActivity } from './activities.selectors';
import {ActivitiesActionTypes} from './activities.actions';
import * as ActivitiesActions from './activities.actions'
import { ActivitiesState } from './activities.reducer';

@Injectable({
  providedIn: 'root'
})

export class ActivitiesFacade {
  allActivities$ = this.store.pipe(select(selectAllActivities));
  currentActivity$ = this.store.pipe(select(selectCurrentActivity));

  mutation$ = this.actions$
    .pipe(
      filter(action =>
          action.type === ActivitiesActionTypes.AddActivity
        || action.type === ActivitiesActionTypes.UpdateActivity
        || action.type === ActivitiesActionTypes.DeleteActivity
      )
    );

  constructor(
    private store: Store<ActivitiesState>,
    private actions$: ActionsSubject) {}


  selectActivity(itemId) {
    this.store.dispatch(new ActivitiesActions.ActivitySelected(itemId));
  }

  loadActivities() {
    this.store.dispatch(new ActivitiesActions.LoadActivities());
  }

  addActivity(item) {
    this.store.dispatch(new ActivitiesActions.AddActivity(item));
  }

  updateActivity(item) {
    this.store.dispatch(new ActivitiesActions.UpdateActivity(item));
  }

  deleteActivity(item) {
    this.store.dispatch(new ActivitiesActions.DeleteActivity(item));
  }
}

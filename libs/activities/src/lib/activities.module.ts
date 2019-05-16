import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  ACTIVITIES_FEATURE_KEY,
  initialState as activitiesInitialState,
  activitiesReducer
} from './+state/activities.reducer';
import { ActivitiesEffects } from '@humanitec/activities';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),

    StoreModule.forFeature(ACTIVITIES_FEATURE_KEY, activitiesReducer, {
      initialState: activitiesInitialState
    }),

    EffectsModule.forFeature([ActivitiesEffects])
  ]
})
export class ActivitiesModule {}

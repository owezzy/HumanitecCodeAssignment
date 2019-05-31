import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ActivitiesEffects } from './+state/activities.effects';
import { ActivitiesComponent } from './components/activities/activities.component';
import { ActivitiesListComponent } from './components/activities-list/activities-list.component';
import { ActivitiesEditComponent } from './components/activities-edit/activities-edit.component';
import { reducer } from './+state/activities.selectors';
import { ActivityService } from './activity.service';

@NgModule({
  providers: [
    ActivityService
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
       {path: 'activities', pathMatch: 'full', component: ActivitiesComponent}
       ]),
    StoreModule.forFeature('activities',reducer),
    EffectsModule.forFeature([ActivitiesEffects])
  ],
  declarations: [ActivitiesComponent, ActivitiesListComponent, ActivitiesEditComponent]
})
export class ActivitiesStateModule {}

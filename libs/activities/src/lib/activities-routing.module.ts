import { NgModule } from '@angular/core';
import { ActivitiesComponent } from './components/activities/activities.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'activities', component: ActivitiesComponent }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivitiesRoutingModule { }

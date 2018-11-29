import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ProgramShellComponent} from './program-shell/program-shell.component';
import {ProgramListComponent} from './program-list/program-list.component';
import {ProgramActivityEditComponent} from './program-activity-edit/program-activity-edit.component';
import {ProgramActivityComponent} from './program-activity/program-activity.component';
import {AppMaterialModule} from '../app-material.module';
import {SharedComponentsModule} from '../shared-components.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProgramComponent } from './program.component';


const programRoutes: Routes = [
  {
    path: '', component: ProgramShellComponent,
    children: [
      {path: '', redirectTo: '/programs/home', pathMatch: 'full'},
      {path: 'all', component: ProgramListComponent},
      {path: 'home', component: ProgramComponent},
      {path: 'activities', component: ProgramActivityComponent},
      {path: 'edit', component: ProgramActivityEditComponent},
    ],
  },
];

@NgModule({
  declarations: [
    ProgramShellComponent,
    ProgramListComponent,
    ProgramActivityEditComponent,
    ProgramActivityComponent,
    ProgramComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    SharedComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(programRoutes),
  ]
})
export class ProgramModule {
}

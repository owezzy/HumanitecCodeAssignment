import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@humanitec/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProgramsComponent } from './programs.component';
import { ProgramsDetailsComponent } from './programs-details/programs-details.component';
import { ProgramsListComponent } from './programs-list/programs-list.component';
import { ProgramsRoutingModule } from './programs-routing.module';
import { CoreDataModule } from '@humanitec/core-data';

@NgModule({
  imports: [
    CommonModule,
    ProgramsRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CoreDataModule,


  ],
  declarations: [
    ProgramsComponent,
    ProgramsListComponent,
    ProgramsDetailsComponent

  ],
  exports: [

  ]
})
export class ProgramsModule {
}

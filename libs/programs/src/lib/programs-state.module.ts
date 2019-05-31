import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProgramsEffects } from './+state/programs.effects';
import  {reducer}   from './+state/programs.selectors';

import { NxModule } from '@nrwl/nx';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ProgramsService } from './programs.service';

@NgModule({
  providers:[
    ProgramsService
  ],
  imports: [
    CommonModule,
    NxModule.forRoot() ,
    StoreModule.forRoot(reducer),
    StoreDevtoolsModule.instrument({maxAge: 10}),
    EffectsModule.forRoot([ProgramsEffects])
  ],
  declarations:[
  ]
})
export class ProgramsStateModule {}

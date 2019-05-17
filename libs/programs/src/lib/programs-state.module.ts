import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import  {reducer}   from '@humanitec/programs';
import { ProgramsEffects } from './+state/programs.effects';
import { NxModule } from '@nrwl/nx';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ProgramsService } from './programs.service';

@NgModule({
  providers: [ProgramsService],
  imports: [
    CommonModule,
    NxModule.forRoot() ,
    StoreModule.forRoot(reducer),
    StoreDevtoolsModule.instrument({maxAge: 10}),
    EffectsModule.forRoot([ProgramsEffects])
  ]
})
export class ProgramsStateModule {}

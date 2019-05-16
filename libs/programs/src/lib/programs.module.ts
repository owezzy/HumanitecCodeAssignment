import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  PROGRAMS_FEATURE_KEY,
  initialState as programsInitialState,
  programsReducer
} from './+state/programs.reducer';
import { ProgramsEffects } from './+state/programs.effects';
import { ProgramsFacade } from '@humanitec/programs';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(PROGRAMS_FEATURE_KEY, programsReducer, {
      initialState: programsInitialState
    }),
    EffectsModule.forFeature([ProgramsEffects])
  ],
  providers: [ProgramsFacade]
})
export class ProgramsModule {}

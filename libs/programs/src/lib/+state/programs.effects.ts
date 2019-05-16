import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { ProgramsPartialState } from './programs.reducer';
import {
  LoadPrograms,
  ProgramsLoaded,
  ProgramsLoadError,
  ProgramsActionTypes
} from './programs.actions';

@Injectable()
export class ProgramsEffects {
  @Effect() loadPrograms$ = this.dataPersistence.fetch(
    ProgramsActionTypes.LoadPrograms,
    {
      run: (action: LoadPrograms, state: ProgramsPartialState) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return new ProgramsLoaded([]);
      },

      onError: (action: LoadPrograms, error) => {
        console.error('Error', error);
        return new ProgramsLoadError(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<ProgramsPartialState>
  ) {}
}

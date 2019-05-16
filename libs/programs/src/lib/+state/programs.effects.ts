import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { ProgramsPartialState } from './programs.reducer';
import {
  LoadPrograms,
  ProgramsLoaded,
  ProgramsLoadError,
  ProgramsActionTypes, AddProgram, ProgramAdded
} from './programs.actions';
import { ProgramsService } from '../programs.service';
import { map } from 'rxjs/operators';
import { ProgramModel } from '@humanitec/programs';

@Injectable({providedIn: 'root'})
export class ProgramsEffects {
  @Effect() loadPrograms$ = this.dataPersistence.fetch(
    ProgramsActionTypes.LoadPrograms,
    {
      run: (action: LoadPrograms, state: ProgramsPartialState) => {
        return this.programsService.all()
          .pipe(
            map((res: ProgramModel[]) => new ProgramsLoaded(res)))
      },
      onError: (action: LoadPrograms, error) => {
        console.error('Error', error);
        return new ProgramsLoadError(error);
      }
    });

  @Effect() addPrograms$ = this.dataPersistence.pessimisticUpdate(ProgramsActionTypes.AddProgram, {
    run: (action: AddProgram, state: ProgramsPartialState) => {
      return this.programsService.create(action.payload)
        .pipe(
          map((res: ProgramModel) => new ProgramAdded(res)))
    },
    onError: () => {}
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<ProgramsPartialState>,
    private programsService: ProgramsService
  ) {}
}

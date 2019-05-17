import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { DataPersistence } from '@nrwl/nx';

import { ProgramsService } from '../programs.service';
import { ProgramModel } from '@humanitec/programs';
import { ProgramsState } from './programs.reducer';
import {
  LoadPrograms,
  ProgramsLoaded,
  ProgramsLoadError,
  ProgramsActionTypes,
  AddProgram,
  ProgramAdded,
  DeleteProgram,
  ProgramDeleted,
  UpdateProgram,
  ProgramUpdated
} from './programs.actions';


@Injectable({providedIn: 'root'})
export class ProgramsEffects {
  @Effect() effects$ = this.actions$.pipe(ofType(ProgramsActionTypes.ProgramAction))

  @Effect()
  loadPrograms$ = this.dataPersistence.fetch(
    ProgramsActionTypes.LoadPrograms,
    {
      run: (action: LoadPrograms, state: ProgramsState) => {
        return this.programsService.all()
          .pipe(
            map((res: ProgramModel[]) => new ProgramsLoaded(res)))
      },
      onError: (action: LoadPrograms, error) => {
        console.error('Error', error);
        return new ProgramsLoadError(error);
      }
    });

  @Effect()
  addPrograms$ = this.dataPersistence.pessimisticUpdate(ProgramsActionTypes.AddProgram, {
    run: (action: AddProgram, state: ProgramsState) => {
      return this.programsService.create(action.payload)
        .pipe(
          map((res: ProgramModel) => new ProgramAdded(res)))
    },
    onError: (action: AddProgram, error) => {
      console.error('Error', error)
    }
  });

  @Effect()
  updateProject$ = this.dataPersistence.pessimisticUpdate(ProgramsActionTypes.UpdateProgram, {
    run: (action: UpdateProgram, state: ProgramsState) => {
      return this.programsService.update(action.payload).pipe(map(_ => new ProgramUpdated(action.payload)))
    },

    onError: (action: UpdateProgram, error) => {
      console.error('Error', error);
    }
  });

@Effect()
deleteProgram$ = this.dataPersistence.pessimisticUpdate(ProgramsActionTypes.DeleteProgram, {
  run: (action: DeleteProgram, state: ProgramsState) => {
    return this.programsService.delete(action.payload).pipe(map(_ => new ProgramDeleted(action.payload)))
  },

  onError: (action: DeleteProgram, error) => {
    console.error('Error', error);
  }
});

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<ProgramsState>,
    private programsService: ProgramsService
  ) {}
}

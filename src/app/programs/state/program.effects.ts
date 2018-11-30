import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { ProgramService } from '../program.service';
import { Program } from '../program';

/* NgRx */
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as programActions from './program.actions';

@Injectable()
export class ProgramEffects {

  constructor(private programService: ProgramService,
              private actions$: Actions) { }

  @Effect()
  loadPrograms$: Observable<Action> = this.actions$.pipe(
    ofType(programActions.ProgramActionTypes.Load),
    mergeMap(action =>
      this.programService.getPrograms().pipe(
        map(programs => (new programActions.LoadSuccess(programs))),
        catchError(err => of(new programActions.LoadFail(err)))
      )
    )
  );

  @Effect()
  updateProgram$: Observable<Action> = this.actions$.pipe(
    ofType(programActions.ProgramActionTypes.UpdateProgram),
    map((action: programActions.UpdateProgram) => action.payload),
    mergeMap((program: Program) =>
      this.programService.updateProgram(program).pipe(
        map(updatedProgram => (new programActions.UpdateProgramSuccess(updatedProgram))),
        catchError(err => of(new programActions.UpdateProgramFail(err)))
      )
    )
  );

  @Effect()
  createProduct$: Observable<Action> = this.actions$.pipe(
    ofType(programActions.ProgramActionTypes.CreateProgram),
    map((action: programActions.CreateProgram) => action.payload),
    mergeMap((program: Program) =>
      this.programService.createProgram(program).pipe(
        map(newProgram => (new programActions.CreateProgramSuccess(newProgram))),
        catchError(err => of(new programActions.CreateProgramFail(err)))
      )
    )
  );

  @Effect()
  deleteProduct$: Observable<Action> = this.actions$.pipe(
    ofType(programActions.ProgramActionTypes.DeleteProgram),
    map((action: programActions.DeleteProgram) => action.payload),
    mergeMap((programId: number) =>
      this.programService.deleteProgram(programId).pipe(
        map(() => (new programActions.DeleteProgramSuccess(programId))),
        catchError(err => of(new programActions.DeleteProgramFail(err)))
      )
    )
  );
}

import { Injectable } from '@angular/core';
import { ActionsSubject, select, Store } from '@ngrx/store';

import { filter } from 'rxjs/operators';

import { selectAllPrograms,  selectCurrentProgram } from "./programs.selectors";
import { ProgramsState } from './programs.reducer';
import * as ProgramsActions from './programs.actions';
import { ProgramsActionTypes } from './programs.actions';

@Injectable({
  providedIn: 'root'
})

export class ProgramsFacade {
  allPrograms$ = this.store.pipe(select(selectAllPrograms));
  currentProgram$ = this.store.pipe(select(selectCurrentProgram));

  mutations$ = this.actions$
    .pipe(
      filter(action =>
          action.type === ProgramsActionTypes.AddProgram
           || action.type === ProgramsActionTypes.UpdateProgram
           || action.type === ProgramsActionTypes.DeleteProgram
      )
    );

  constructor(private store: Store<ProgramsState>, private actions$: ActionsSubject) { }

  selectProgram(itemId) {
    this.store.dispatch(new ProgramsActions.ProgramSelected(itemId));
  }

  loadPrograms() {
    this.store.dispatch(new ProgramsActions.LoadPrograms());
  }

  addProgram(program) {
    this.store.dispatch(new ProgramsActions.AddProgram(program));
  }
  updateProgram(program) {
    this.store.dispatch(new ProgramsActions.UpdateProgram(program));
  }

  deleteProgram(program) {
    this.store.dispatch(new ProgramsActions.DeleteProgram(program));
  }
}

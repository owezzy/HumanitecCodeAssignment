import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { ProgramsState } from './programs.reducer';
import { programsQuery } from '@humanitec/programs';
import { AddProgram, DeleteProgram, LoadPrograms, SelectProgram, UpdateProgram } from './programs.actions';
import { Observable } from 'rxjs';
import { ProgramModel } from '@humanitec/programs';

@Injectable({
  providedIn: 'root'
})

export class ProgramsFacade {
  programs$: Observable<ProgramModel[]>;
  currentProgram$: Observable<ProgramModel>;


  constructor(private store: Store<ProgramsState>) {
    this.programs$ = store.pipe(select(programsQuery.selectAllPrograms));
    this.currentProgram$ = store.pipe(select(programsQuery.selectCurrentProgram));

  }

  getPrograms() {
    this.store.dispatch(new LoadPrograms());
  }

  selectProgram(program) {
    this.store.dispatch(new SelectProgram(program.id));
  }

  createProgram(program) {
    this.store.dispatch(new AddProgram(program));
  }

  updateProgram(program) {
    this.store.dispatch(new UpdateProgram(program));
  }

  deleteProgram(program) {
    this.store.dispatch(new DeleteProgram(program));
  }
}

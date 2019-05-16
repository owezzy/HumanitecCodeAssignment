import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { ProgramsPartialState } from './programs.reducer';
import { programsQuery } from './programs.selectors';
import { LoadPrograms } from './programs.actions';

@Injectable()
export class ProgramsFacade {
  loaded$ = this.store.pipe(select(programsQuery.getLoaded));
  allPrograms$ = this.store.pipe(select(programsQuery.getAllPrograms));
  selectedPrograms$ = this.store.pipe(
    select(programsQuery.getSelectedPrograms)
  );

  constructor(private store: Store<ProgramsPartialState>) {}

  loadAll() {
    this.store.dispatch(new LoadPrograms());
  }
}

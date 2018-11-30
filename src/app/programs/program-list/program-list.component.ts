import { Component, OnInit, OnDestroy } from '@angular/core';
import {Observable} from 'rxjs';
import {Program} from '../program';

/* NgRx */
import {select, Store} from '@ngrx/store';
import * as fromProgram from '../state/program.reducer';
import * as programActions from '../state/program.actions';
import {takeWhile} from 'rxjs/operators';

@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.css']
})
export class ProgramListComponent implements OnInit, OnDestroy {
  pageTitle = 'Programs';
  errorMessage$: Observable<string>;
  componentActive = true;

  displayCode: boolean;

  programs$: Observable<Program[]>;

  // Used to highlight the selected product in the list
  selectedProgram: Program | null;

  constructor(private store: Store<fromProgram.State> ) { }

  ngOnInit(): void {
    // Do NOT subscribe here because app uses an async pipe
    // This gets the initial values until the load is complete.
    this.programs$ = this.store.pipe(select(fromProgram.getPrograms)) as Observable<Program[]>;
    // Do NOT subscribe here because it used an async pipe
    this.errorMessage$ = this.store.pipe(select(fromProgram.getError));

    this.store.dispatch(new programActions.Load());

    // Subscribe here because it does not use an async pipe
    this.store.pipe(
      select(fromProgram.getCurrentProgram),
      takeWhile(() => this.componentActive)
    ).subscribe(
      currentProgram => this.selectedProgram = currentProgram
    );

    // Subscribe here because it does not use an async pipe
    this.store.pipe(
      select(fromProgram.getShowProgramCode),
      takeWhile(() => this.componentActive)
    ).subscribe(
      ShowProgramCode => this.displayCode = ShowProgramCode
    );

  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }

  checkChanged(value: boolean): void {
    this.store.dispatch(new programActions.ToggleProgramCode(value));
  }

  newProgram(): void {
    this.store.dispatch(new programActions.InitializeCurrentProgram());
  }

  programSelected(program: Program): void {
    this.store.dispatch(new programActions.SetCurrentProgram(program));
  }

}

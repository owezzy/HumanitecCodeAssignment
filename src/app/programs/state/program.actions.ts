import { Program } from '../program';

// ngrx
import { Action } from '@ngrx/store';

export enum ProgramActionTypes {
  ToggleProgramCode = '[Program] Toggle Program Code',
  SetCurrentProgram = '[Program] Set Current Program',
  ClearCurrentProgram = '[Program] Clear Current Program',
  InitializeCurrentProgram = '[Program] Initialize Current Program',
  Load = '[Program] Load',
  LoadSuccess = '[Program] Load Success',
  LoadFail = '[Program] Load Fail',
  UpdateProgram = '[Program] Update Program',
  UpdateProgramSuccess = '[Program] Update Program Success',
  UpdateProgramFail = '[Program] Update Program Fail',
  CreateProgram = '[Program] Create Program',
  CreateProgramSuccess = '[Program] Create Program Success',
  CreateProgramFail = '[Program] Create Program Fail',
  DeleteProgram = '[Program] Delete Program',
  DeleteProgramSuccess = '[Program] Delete Program Success',
  DeleteProgramFail = '[Program] Delete Program Fail'
}

// Action Creators

export class ToggleProgramCode implements Action {
  readonly type = ProgramActionTypes.ToggleProgramCode;
  constructor(public payload: boolean) { }
}

export class SetCurrentProgram implements Action {
  readonly type = ProgramActionTypes.SetCurrentProgram;
  constructor(public payload: Program) { }
}

export class ClearCurrentProgram implements Action {
  readonly type = ProgramActionTypes.ClearCurrentProgram;
}

export class InitializeCurrentProgram implements Action {
  readonly type = ProgramActionTypes.InitializeCurrentProgram;
}

export class Load implements Action {
  readonly type = ProgramActionTypes.Load;
}

export class LoadSuccess implements Action {
  readonly type = ProgramActionTypes.LoadSuccess;

  constructor(public payload: Program[]) { }
}

export class LoadFail implements Action {
  readonly type = ProgramActionTypes.LoadFail;

  constructor(public payload: string) { }
}

export class UpdateProgram implements Action {
  readonly type = ProgramActionTypes.UpdateProgram;

  constructor(public payload: Program) { }
}

export class UpdateProgramSuccess implements Action {
  readonly type = ProgramActionTypes.UpdateProgramSuccess;

  constructor(public payload: Program) { }
}

export class UpdateProgramFail implements Action {
  readonly type = ProgramActionTypes.UpdateProgramFail;

  constructor(public payload: string) { }
}

export class CreateProgram implements Action {
  readonly type = ProgramActionTypes.CreateProgram;

  constructor(public payload: Program) { }
}

export class CreateProgramSuccess implements Action {
  readonly type = ProgramActionTypes.CreateProgramSuccess;

  constructor(public payload: Program) { }
}

export class CreateProgramFail implements Action {
  readonly type = ProgramActionTypes.CreateProgramFail;

  constructor(public payload: string) { }
}

export class DeleteProgram implements Action {
  readonly type = ProgramActionTypes.DeleteProgram;

  constructor(public payload: number) { }
}

export class DeleteProgramSuccess implements Action {
  readonly type = ProgramActionTypes.DeleteProgramSuccess;

  constructor(public payload: number) { }
}

export class DeleteProgramFail implements Action {
  readonly type = ProgramActionTypes.DeleteProgramFail;

  constructor(public payload: string) { }
}

// Union the valid types
export type ProgramActions = ToggleProgramCode
  | SetCurrentProgram
  | ClearCurrentProgram
  | InitializeCurrentProgram
  | Load
  | LoadSuccess
  | LoadFail
  | UpdateProgram
  | UpdateProgramSuccess
  | UpdateProgramFail
  | CreateProgram
  | CreateProgramSuccess
  | CreateProgramFail
  | DeleteProgram
  | DeleteProgramSuccess
  | DeleteProgramFail;

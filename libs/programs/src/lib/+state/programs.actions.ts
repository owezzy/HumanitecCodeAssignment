import { Action } from '@ngrx/store';
import { ProgramModel } from '../program.model';

export enum ProgramsActionTypes {
  ProgramSelected = '[Programs] Selected',
  ProgramAction = '[Programs] Action',

  LoadPrograms = '[Programs] Load Data',
  LoadedPrograms = '[Programs] Data Loaded',

  AddProgram = '[Programs] Add Data',
  ProgramAdded = '[Programs] Data Added',

  UpdateProgram = '[Programs] Update Data',
  ProgramUpdated = '[Programs] Data Updated',

  DeleteProgram = '[Programs] Delete Data',
  ProgramDeleted = '[Programs] Data Deleted',
}

export class Programs implements Action {
  readonly type = ProgramsActionTypes.ProgramAction;
}


export class LoadPrograms implements Action {
  readonly type = ProgramsActionTypes.LoadPrograms;
  constructor() { }
}


export class LoadedPrograms implements Action {
  readonly type = ProgramsActionTypes.LoadedPrograms;
  constructor(public payload: ProgramModel[]) {}
}


export class ProgramSelected implements Action {
  readonly type = ProgramsActionTypes.ProgramSelected;
  constructor(public payload) {  }
}


export class AddProgram implements Action {
  readonly type = ProgramsActionTypes.AddProgram;
  constructor(public payload: ProgramModel) {  }
}

export class ProgramAdded implements Action {
  readonly type = ProgramsActionTypes.ProgramAdded;
  constructor(public payload: ProgramModel) {  }
}

export class UpdateProgram implements Action {
  readonly type = ProgramsActionTypes.UpdateProgram;
  constructor(public payload: ProgramModel) {  }
}

export class ProgramUpdated implements Action {
  readonly type = ProgramsActionTypes.ProgramUpdated;
  constructor(public payload: ProgramModel) {  }
}

export class DeleteProgram implements Action {
  readonly type = ProgramsActionTypes.DeleteProgram;
  constructor(public payload: ProgramModel) {  }
}

export class ProgramDeleted implements Action {
  readonly type = ProgramsActionTypes.ProgramDeleted;
  constructor(public payload: ProgramModel) {  }
}

export type ProgramsAction = Programs
  | ProgramSelected
  | LoadPrograms
  | LoadedPrograms
  | AddProgram
  | ProgramAdded
  | UpdateProgram
  | ProgramUpdated
  | DeleteProgram
  | ProgramDeleted
  ;

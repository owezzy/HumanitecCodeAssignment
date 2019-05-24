import { Action } from '@ngrx/store';
import { ProgramModel } from '../program.model';

export enum ProgramsActionTypes {
  ProgramSelected = '[Programs] Selected',
  ProgramAction = '[Programs] Action',

  LoadPrograms = '[Programs] Load Programs',
  ProgramsLoaded = '[Programs] Programs Loaded',

  AddProgram = '[Programs] Add Program',
  ProgramAdded = '[Programs] Added Program ',

  UpdateProgram = '[Programs] Update Program',
  ProgramUpdated = '[Programs] Updated Program',

  DeleteProgram = '[Programs] Delete Program',
  ProgramDeleted = '[Programs] Deleted Program',
}

export class Programs implements Action {
  readonly type = ProgramsActionTypes.ProgramAction;
}

export class ProgramSelected implements Action {
  readonly type = ProgramsActionTypes.ProgramSelected;
  constructor(public payload) {  }
}

export class LoadPrograms implements Action {
  readonly type = ProgramsActionTypes.LoadPrograms;
  constructor() { }
}


export class ProgramsLoaded implements Action {
  readonly type = ProgramsActionTypes.ProgramsLoaded;
  constructor(public payload: ProgramModel[]) {}
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
  | ProgramsLoaded
  | AddProgram
  | ProgramAdded
  | UpdateProgram
  | ProgramUpdated
  | DeleteProgram
  | ProgramDeleted
  ;

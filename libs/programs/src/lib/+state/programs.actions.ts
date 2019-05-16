import { Action } from '@ngrx/store';
import { ProgramModel } from '@humanitec/programs';

export enum ProgramsActionTypes {
  ProgramSelected = '[Programs] Selected',

  LoadPrograms = '[Programs] Load Programs',
  ProgramsLoaded = '[Programs] Programs Loaded',
  ProgramsLoadError = '[Programs] Programs Load Error',

  AddProgram = '[Programs] Selected',
  ProgramAdded = '[Programs] Selected',

  UpdateProgram = '[Programs] Update Program',
  ProgramUpdated = '[Programs] Updated Program',

  DeleteProgram = '[Programs] Delete Program',
  ProgramDeleted = '[Programs] Deleted Program',
}

export class SelectProgram implements Action {
  readonly type = ProgramsActionTypes.ProgramSelected;
  constructor(public payload) {  }
}

export class LoadPrograms implements Action {
  readonly type = ProgramsActionTypes.LoadPrograms;
}

export class ProgramsLoadError implements Action {
  readonly type = ProgramsActionTypes.ProgramsLoadError;
  constructor(public payload: any) {}
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

export type ProgramsAction = LoadPrograms
  | ProgramsLoaded
  | ProgramsLoadError
  | AddProgram
  | ProgramAdded
  | UpdateProgram
  | ProgramUpdated
  | DeleteProgram
  | ProgramDeleted
  ;

export const fromProgramsActions = {
  LoadPrograms,
  ProgramsLoaded,
  ProgramsLoadError,
  AddProgram,
  ProgramAdded,
  UpdateProgram,
  ProgramUpdated,
  DeleteProgram,
  ProgramDeleted
};

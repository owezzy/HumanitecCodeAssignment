import { Action } from '@ngrx/store';
import { Entity } from './programs.reducer';

export enum ProgramsActionTypes {
  LoadPrograms = '[Programs] Load Programs',
  ProgramsLoaded = '[Programs] Programs Loaded',
  ProgramsLoadError = '[Programs] Programs Load Error'
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
  constructor(public payload: Entity[]) {}
}

export type ProgramsAction = LoadPrograms | ProgramsLoaded | ProgramsLoadError;

export const fromProgramsActions = {
  LoadPrograms,
  ProgramsLoaded,
  ProgramsLoadError
};

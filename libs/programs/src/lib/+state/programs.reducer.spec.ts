import { ProgramsLoaded } from './programs.actions';
import {
  ProgramsState,
  initialState,
  programsReducer
} from './programs.reducer';

describe('Programs Reducer', () => {
  const getProgramsId = it => it['id'];
  let createPrograms;

  beforeEach(() => {
    createPrograms = (id: string, name = ''): => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid Programs actions ', () => {
    it('should return set the list of known Programs', () => {
      const programss = [
        createPrograms('PRODUCT-AAA'),
        createPrograms('PRODUCT-zzz')
      ];
      const action = new ProgramsLoaded(programss);
      const result: ProgramsState = programsReducer(initialState, action);
      const selId: string = getProgramsId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = programsReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});

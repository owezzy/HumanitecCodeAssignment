import { programsQuery } from './programs.selectors';

describe('Programs Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getProgramsId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createPrograms = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      programs: {
        list: [
          createPrograms('PRODUCT-AAA'),
          createPrograms('PRODUCT-BBB'),
          createPrograms('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('Programs Selectors', () => {
    it('getAllPrograms() should return the list of Programs', () => {
      const results = programsQuery.getAllPrograms(storeState);
      const selId = getProgramsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedPrograms() should return the selected Entity', () => {
      const result = programsQuery.getSelectedPrograms(storeState);
      const selId = getProgramsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = programsQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = programsQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});

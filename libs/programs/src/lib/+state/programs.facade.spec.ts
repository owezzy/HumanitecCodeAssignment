import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/nx/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/nx';

import { ProgramsEffects } from './programs.effects';
import { ProgramsFacade } from './programs.facade';

import { programsQuery } from './programs.selectors';
import { LoadPrograms, ProgramsLoaded } from './programs.actions';
import {
  ProgramsState,
  Entity,
  initialState,
  programsReducer
} from './programs.reducer';

interface TestSchema {
  programs: ProgramsState;
}

describe('ProgramsFacade', () => {
  let facade: ProgramsFacade;
  let store: Store<TestSchema>;
  let createPrograms;

  beforeEach(() => {
    createPrograms = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature('programs', programsReducer, { initialState }),
          EffectsModule.forFeature([ProgramsEffects])
        ],
        providers: [ProgramsFacade]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule
        ]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(ProgramsFacade);
    });

    /**
     * The initially generated facade::getPrograms() returns empty array
     */
    it('getPrograms() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allPrograms$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.getPrograms();

        list = await readFirst(facade.allPrograms$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `ProgramsLoaded` to manually submit list for state management
     */
    it('allPrograms$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allPrograms$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          new ProgramsLoaded([createPrograms('AAA'), createPrograms('BBB')])
        );

        list = await readFirst(facade.allPrograms$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});

import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule } from '@nrwl/nx';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { ProgramsEffects } from './programs.effects';
import { LoadPrograms, ProgramsLoaded } from './programs.actions';

describe('ProgramsEffects', () => {
  let actions: Observable<any>;
  let effects: ProgramsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        ProgramsEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(ProgramsEffects);
  });

  describe('loadPrograms$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadPrograms() });
      expect(effects.loadPrograms$).toBeObservable(
        hot('-a-|', { a: new ProgramsLoaded([]) })
      );
    });
  });
});

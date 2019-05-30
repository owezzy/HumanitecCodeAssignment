import { async, TestBed } from '@angular/core/testing';
import { ActivitiesStateModule } from './activities-state.module';

describe('ActivitiesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ActivitiesStateModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ActivitiesStateModule).toBeDefined();
  });
});

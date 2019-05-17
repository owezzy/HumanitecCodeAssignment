import { async, TestBed } from '@angular/core/testing';
import { ProgramsStateModule } from './programs-state.module';

describe('ProgramsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ProgramsStateModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ProgramsStateModule).toBeDefined();
  });
});

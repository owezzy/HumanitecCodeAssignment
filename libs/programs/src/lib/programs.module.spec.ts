import { async, TestBed } from '@angular/core/testing';
import { ProgramsModule } from './programs.module';

describe('ProgramsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ProgramsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ProgramsModule).toBeDefined();
  });
});

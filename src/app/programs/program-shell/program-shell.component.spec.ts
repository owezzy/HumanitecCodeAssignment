import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramShellComponent } from './program-shell.component';

describe('ProgramShellComponent', () => {
  let component: ProgramShellComponent;
  let fixture: ComponentFixture<ProgramShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

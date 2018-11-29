import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramActivityEditComponent } from './program-activity-edit.component';

describe('ProgramActivityEditComponent', () => {
  let component: ProgramActivityEditComponent;
  let fixture: ComponentFixture<ProgramActivityEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramActivityEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramActivityEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

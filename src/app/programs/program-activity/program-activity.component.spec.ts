import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramActivityComponent } from './program-activity.component';

describe('ProgramActivityComponent', () => {
  let component: ProgramActivityComponent;
  let fixture: ComponentFixture<ProgramActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

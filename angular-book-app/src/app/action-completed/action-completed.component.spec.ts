import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionCompletedComponent } from './action-completed.component';

describe('ActionCompletedComponent', () => {
  let component: ActionCompletedComponent;
  let fixture: ComponentFixture<ActionCompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionCompletedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

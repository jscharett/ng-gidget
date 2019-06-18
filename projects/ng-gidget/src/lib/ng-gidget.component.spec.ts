import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgGidgetComponent } from './ng-gidget.component';

describe('NgGidgetComponent', () => {
  let component: NgGidgetComponent;
  let fixture: ComponentFixture<NgGidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgGidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgGidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

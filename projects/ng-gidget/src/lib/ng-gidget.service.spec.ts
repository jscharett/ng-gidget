import { TestBed } from '@angular/core/testing';

import { NgGidgetService } from './ng-gidget.service';

describe('NgGidgetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgGidgetService = TestBed.get(NgGidgetService);
    expect(service).toBeTruthy();
  });
});

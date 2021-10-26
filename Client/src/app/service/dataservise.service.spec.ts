import { TestBed } from '@angular/core/testing';

import { DataserviseService } from './dataservise.service';

describe('DataserviseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataserviseService = TestBed.get(DataserviseService);
    expect(service).toBeTruthy();
  });
});

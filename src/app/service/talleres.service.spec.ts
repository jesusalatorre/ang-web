import { TestBed } from '@angular/core/testing';

import { TalleresService } from './talleres.service';

describe('TalleresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TalleresService = TestBed.get(TalleresService);
    expect(service).toBeTruthy();
  });
});

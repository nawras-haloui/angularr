import { TestBed } from '@angular/core/testing';

import { AnnonceurService } from './annonceur.service';

describe('AnnonceurService', () => {
  let service: AnnonceurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnonceurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

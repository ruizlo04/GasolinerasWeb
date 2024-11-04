import { TestBed } from '@angular/core/testing';

import { GasolineraService } from './gasolinera.service';

describe('GasolineraService', () => {
  let service: GasolineraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GasolineraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

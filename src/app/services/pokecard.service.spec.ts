import { TestBed } from '@angular/core/testing';

import { PokecardService } from './pokecard.service';

describe('PokecardService', () => {
  let service: PokecardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokecardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

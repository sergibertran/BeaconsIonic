import { TestBed } from '@angular/core/testing';

import { BeaconConnectionService } from './beacon-connection.service';

describe('BeaconConnectionService', () => {
  let service: BeaconConnectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeaconConnectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

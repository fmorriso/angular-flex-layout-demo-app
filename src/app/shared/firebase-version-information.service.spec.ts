import { TestBed } from '@angular/core/testing';

import { FirebaseVersionInformationService } from './firebase-version-information.service';

describe('FirebaseVersionInformationService', () => {
  let service: FirebaseVersionInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseVersionInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

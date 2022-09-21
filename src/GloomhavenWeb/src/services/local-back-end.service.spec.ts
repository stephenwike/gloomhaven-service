import { TestBed } from '@angular/core/testing';

import { LocalBackEndService } from './local-back-end.service';

describe('FakeBackEndService', () => {
  let service: LocalBackEndService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalBackEndService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

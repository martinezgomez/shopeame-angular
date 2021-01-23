import { TestBed } from '@angular/core/testing';

import { EditProducService } from './edit-produc.service';

describe('EditProducService', () => {
  let service: EditProducService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditProducService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

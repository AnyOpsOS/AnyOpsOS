import { TestBed } from '@angular/core/testing';

import { AnyOpsOSLibModalService } from './anyopsos-lib-modal.service';

describe('AnyOpsOSLibModalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnyOpsOSLibModalService = TestBed.inject(AnyOpsOSLibModalService);
    expect(service).toBeTruthy();
  });
});

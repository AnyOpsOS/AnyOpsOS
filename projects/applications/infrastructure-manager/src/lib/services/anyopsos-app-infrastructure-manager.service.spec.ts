import { TestBed } from '@angular/core/testing';

import { AnyOpsOSAppInfrastructureManagerService } from './anyopsos-app-infrastructure-manager.service';

describe('AnyOpsOSAppInfrastructureManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnyOpsOSAppInfrastructureManagerService = TestBed.inject(AnyOpsOSAppInfrastructureManagerService);
    expect(service).toBeTruthy();
  });
});

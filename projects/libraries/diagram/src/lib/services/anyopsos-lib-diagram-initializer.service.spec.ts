import { TestBed } from '@angular/core/testing';

import { AnyOpsOSLibDiagramInitializerService } from './anyopsos-lib-diagram-initializer.service';

describe('AnyOpsOSLibDiagramInitializerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnyOpsOSLibDiagramInitializerService = TestBed.inject(AnyOpsOSLibDiagramInitializerService);
    expect(service).toBeTruthy();
  });
});

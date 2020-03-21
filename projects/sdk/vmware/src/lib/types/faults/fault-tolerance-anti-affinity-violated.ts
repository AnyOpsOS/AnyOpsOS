import {MigrationFault} from './migration-fault';

import {ManagedObjectReference} from '../data/managed-object-reference';

export interface FaultToleranceAntiAffinityViolated extends MigrationFault {
  host: ManagedObjectReference & { $type: 'HostSystem'; };
  hostName: string;
}
import {ManagedObjectReference} from '../data/managed-object-reference';


export interface UpdateReferenceHost {
  _this: ManagedObjectReference;
  host?: ManagedObjectReference & { $type: 'HostSystem'; };
}
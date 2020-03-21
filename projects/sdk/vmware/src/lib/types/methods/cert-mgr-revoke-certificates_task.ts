import {ManagedObjectReference} from '../data/managed-object-reference';


export interface CertMgrRevokeCertificates_Task {
  _this: ManagedObjectReference;
  host: ManagedObjectReference & { $type: 'HostSystem[]'; };
}
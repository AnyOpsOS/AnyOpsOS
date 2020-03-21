import {ManagedObjectReference} from '../data/managed-object-reference';
import {HostPatchManagerPatchManagerOperationSpec} from '../data/host-patch-manager-patch-manager-operation-spec';


export interface CheckHostPatch_Task {
  _this: ManagedObjectReference;
  metaUrls?: string[];
  bundleUrls?: string[];
  spec?: HostPatchManagerPatchManagerOperationSpec;
}
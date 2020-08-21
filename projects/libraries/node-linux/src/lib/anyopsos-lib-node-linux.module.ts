import {NgModule} from '@angular/core';

import {AnyopsosLibBootstrapService} from '@anyopsos/lib-bootstrap';

import {AnyOpsOSLibNodeLinuxConnectionsStateService} from './services/anyopsos-lib-node-linux-connections-state.service';
import {AnyOpsOSLibNodeLinuxFileSystemHandlersService} from './services/anyopsos-lib-node-linux-file-system-handlers.service';

@NgModule({
  declarations: [],
  imports: [],
  exports: []
})
export class AnyOpsOSLibNodeLinuxModule {

  constructor(private readonly LibBootstrap: AnyopsosLibBootstrapService,
              private readonly LibNodeLinuxConnectionsState: AnyOpsOSLibNodeLinuxConnectionsStateService,
              private readonly LibNodeLinuxFileSystemHandlers: AnyOpsOSLibNodeLinuxFileSystemHandlersService) {

    // Initialize connections when user is loggedIn
    this.LibBootstrap.currentBootstrapState.subscribe((data: { appBootstrapped: boolean; }) => {
      if (data.appBootstrapped === true && !this.LibNodeLinuxConnectionsState.getConnectionsInitialized()) {

        // Get Linux connections
        this.LibNodeLinuxConnectionsState.initConnections();

        // This allows to manage file and folders
        this.LibNodeLinuxFileSystemHandlers.registerFileSystemUiHandlers();
      }
    });

  }
}

import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnyOpsOSLibDiagramDomUtilsService {

  constructor() {
  }

  /**
   * Cleans up a value to be used as an element ID.
   *
   * Encodes invalid characters to be valid in XHTML and makes it
   * so that it can be reversed by {@link decodeIdAttribute}.
   */
  encodeIdAttribute(id: string): string {
    return id.replace(/[<>&;]/gm, m => `__u${m.charCodeAt(0)}__`);
  }

  /**
   * Reverts {@link encodeIdAttribute}.
   */
  decodeIdAttribute(id: string): string {
    return id.replace(/__u(\d+)__/gm, (m, d) => String.fromCharCode(d));
  }
}

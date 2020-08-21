import fs from 'fs-extra';

// TODO ESM
const {readFile} = fs;

import {runInDocker} from '../utils.js';
import {INTERNAL_PATH_CWD} from '../constants.js';

const projectInOrder = [
  'anyopsos-lib-angular-material',
  'anyopsos-lib-pipes',
  'anyopsos-lib-logger',
  'anyopsos-lib-workspace',
  'anyopsos-lib-modal',
  'anyopsos-lib-application',
  'anyopsos-lib-file-system-ui',
  'anyopsos-lib-file-system',
  'anyopsos-lib-loader',
  'anyopsos-lib-selectable',
  'anyopsos-lib-types',
  'anyopsos-lib-user',
  'anyopsos-lib-file',
  'anyopsos-lib-folder',
  'anyopsos-lib-desktop',
  'anyopsos-lib-utils',
  'anyopsos-lib-bootstrap',
  'anyopsos-lib-ssh'
];

export class BuildLibs {

  constructor() {

  }

  async build() {
    await this.buildLibs();
  }

  private async buildLibs() {

    // Build projects in order
    for (const project of projectInOrder) {

      await runInDocker(`ng build ${project}`);

      /*await awaitSpawn('npm.cmd', ['run', 'ng', 'build', project], {
        cwd: `${process.cwd()}/src/frontend`,
        stdio: 'inherit'
      });*/

    }

    // Build others
    const data = await readFile(`${INTERNAL_PATH_CWD}/angular.json`, 'utf8');
    const ngCli = JSON.parse(data);

    for (const project of Object.keys(ngCli.projects)) {

      // Perform build operation only on libraries not already built
      if (!project.startsWith('anyopsos-lib-')) continue;
      if (projectInOrder.includes(project)) continue;

      await runInDocker(`ng build ${project}`);
      /*await awaitSpawn('npm.cmd', ['run', 'ng', 'build', project], {
        cwd: `${process.cwd()}/src/frontend`,
        stdio: 'inherit'
      });*/
    }
  }

}

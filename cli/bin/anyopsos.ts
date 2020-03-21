#!/usr/bin/env node

import {anyOpsOS} from '../src';

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

clear();
console.log(chalk.blueBright(
  figlet.textSync('anyOpsOS', { font: 'Big' })
));

console.log(chalk.blue('\n\nWelcome to anyOpsOS Cli.\n'));
console.log(chalk.blue('anyOpsOS Copyright (C) 2017-2020 Isart Navarro <contact@isartnavarro.io>'));
console.log(chalk.blue('SPDX-License-Identifier: GPL-3.0-or-later'));
console.log(chalk.red.bold('Danger:') + ' ' + chalk.blue('This project is on alpha state.\n'));

new anyOpsOS().runCli();

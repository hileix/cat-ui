'use strict';
const inquirer = require('inquirer');
const pkg = require('../package.json');
const semver = require('semver');
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const oldVersion = pkg.version;
const log = console.log;

const versionTypeMap = {
  '主要版本': 'major',
  '次要版本': 'minor',
  '修订号': 'patch'
}

const questionOne = {
  type: 'list',
  name: 'versionType',
  message: '你要更新那个版本？',
  choices: ['主要版本', '次要版本', '修订号']
};

start();

// 开始
async function start() {
  let answers = await inquirer.prompt(questionOne);
  const { versionType } = answers;
  const newVersion = semver.inc(oldVersion, versionTypeMap[versionType]);
  log(chalk.red(`旧版本：${oldVersion}`));
  log(chalk.green(`新版本：${newVersion}`));

  const questionTwo = {
    type: 'confirm',
    name: 'isConfirmed',
    message: `您确定发布 ${newVersion} 版本吗?`,
    default: true
  };

  answers = await inquirer.prompt(questionTwo);
  const { isConfirmed } = answers;

  if (isConfirmed) {
    modifiedVersion(newVersion);
  }
}

/**
 * 修改版本号
 * @param {string} version 版本号
 */
function modifiedVersion(version) {
  log(chalk.blue('------开始修改版本号：'))
  pkg.version = version;
  try {
    fs.writeFileSync(__dirname, '../package.json', JSON.stringify(pkg, null, 2));
  } catch (err) {
    log(chalk.red(err.message));
    log(chalk.red('------修改版本号失败！'))

    process.exit(1);
  }
  log(chalk.green('------修改版本号成功！'))
}
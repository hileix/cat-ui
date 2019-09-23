'use strict';
const inquirer = require('inquirer');
const pkg = require('../package.json');
const semver = require('semver');
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
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
  validateBranch();

  const { isConfirmed, newVersion } = await generateNewVersion();

  if (!isConfirmed) {
    process.exit(1);
  }

  modifiedVersion(newVersion);

  gitPush();


}


/**
 * 验证是否是在主分支（只能在主分支发布）
 */
function validateBranch() {
  tipMessage('开始验证分支是否为 master 分支：', 'start');
  const result = spawnSync('git', ['rev-parse', '--abbrev-ref', 'HEAD'], {
    encoding: 'utf8'
  });
  const currentBranch = result.stdout.trim();
  if ('master'.indexOf(currentBranch) === -1) {
    tipMessage(`当前为 ${chalk.green(currentBranch)} 分支，请在 ${chalk.green('master')} 分支进行发布`, 'fail');
    process.exit(1);
  }
  tipMessage('分支验证成功！', 'success');
}

/**
 * 生成新的版本号
 * @return {object} object.version 生成的新的版本号是否有效; object.newVersion 新的版本号
 */
async function generateNewVersion() {
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
  return { isConfirmed: answers.isConfirmed, newVersion };
}

/**
 * 修改版本号
 * @param {string} version 版本号
 */
function modifiedVersion(version) {
  tipMessage('开始修改版本号：', 'start');
  pkg.version = version;
  try {
    fs.writeFileSync(path.join(__dirname, '../package.json'), JSON.stringify(pkg, null, 2), {
      encoding: ''
    });
  } catch (err) {
    log(chalk.red(err.message));
    tipMessage('修改版本号失败！', 'fail')
    process.exit(1);
  }
  tipMessage('修改版本号成功！', 'success')
}

/**
 * 将修改的 package.json push
 */
function gitPush() {
  let sp;
  try {
    spawnSync('git', ['add', '.'], { encoding: 'utf8' });
    spawnSync('git', ['commit', '-m', 'Modified version'], { encoding: 'utf8' });
    sp = spawnSync('git', ['push', 'origin', 'master'], { encoding: 'utf8' });
  } catch (err) {
    tipMessage(`git add/commit/push 失败：${err.message}`, 'fail');
    process.exit(1);
  }
  console.log(sp.stdout);
}

/**
 * 提示信息
 * @param {string} text 文案
 * @param {string} type 文案类型：'start' 操作开始 | 'success' 操作成功 | 'fail' 操作失败
 */
function tipMessage(text, type) {
  if (type === 'start') {
    log(chalk.blue(`------${text}`));
  } else if (type === 'success') {
    log(chalk.green(`------${text}`));
  } else if (type === 'fail') {
    log(chalk.red(`------${text}`))
  }
}

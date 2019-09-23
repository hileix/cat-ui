'use strict';
const inquirer = require('inquirer');
const pkg = require('../package.json');
const semver = require('semver');
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const { spawnSync, spawn, execSync } = require('child_process');
const execa = require('execa');
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

  publish();
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
 * 发布到 npm
 */
function publish() {
  tipMessage('开始 publish：', 'start');
  let sp;
  try {
    sp = spawnSync('npm', ['publish'], { encoding: 'utf8' });
  } catch (err) {
    tipMessage(`publish 失败：${err.message}`, 'fail');
    process.exit(1);
  }
  const s = sp.stdout
  console.log('ss:', s);
}

/**
 * 将修改的 package.json push
 */
function gitPush() {
  tipMessage('开始 git add/commit/push：', 'start');

  execCommand('git add .');
  execCommand('git commit -m "Modified version"');
  execCommand('git push origin master');

  tipMessage('git add/commit/push 成功！', 'success');
  process.exit(1);
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


/**
 * 执行命令且打印相关的命令以及命令执行后的返回值
 * @param {string} command 命令
 */
function execCommand(command) {
  log(command);
  let result;
  try {
    result = execSync(command, {
      encoding: 'utf8'
    });
  } catch (err) {
    log(chalk.red(err.message));
    process.exit(1);
  }
  log(result);
}
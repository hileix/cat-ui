const path = require('path');
const fs = require('fs-extra');

/**
 * v2 版本存在的组件
 * 只有存在的组件才需要测试
 */
const existComponents = [
  'Avatar',
  'Button',
  'Loading',
  'Icon',
  'notification'
];

function getTestMatch() {
  const testMatch = [];
  const componentsPath = path.resolve(__dirname, 'src/components');
  const components = fs.readdirSync(componentsPath);
  components.forEach(name => {
    if (existComponents.includes(name)) {
      testMatch.push(`**/${name}/__test__/**/*.[jt]s?(x)`);
    }
  });
  return testMatch;
}

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  collectCoverage: true,
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testMatch: getTestMatch()
};

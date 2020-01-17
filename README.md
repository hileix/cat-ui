# cat-ui

喜马拉雅国际版前端基础组件库

[![Build Status](https://www.travis-ci.org/hifeteam/cat-ui.svg?branch=master)](https://www.travis-ci.org/hifeteam/cat-ui)
[![codecov](https://codecov.io/gh/hifeteam/cat-ui/branch/master/graph/badge.svg)](https://codecov.io/gh/hifeteam/cat-ui)
[![HitCount](http://hits.dwyl.io/hifeteam/cat-ui.svg)](http://hits.dwyl.io/hifeteam/cat-ui)

[![NPM](https://nodei.co/npm/@hife/catui.png?downloads=true)](https://nodei.co/npm/@hife/catui?downloads=true)

## 浏览器支持
| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Electron |
| --------- | --------- | --------- | --------- | --------- | --------- |
| IE11, Edge| last 2 versions| last 2 versions| last 2 versions| last 2 versions| last 2 versions

## 更新日志

[更新日志](./changelog.md)

## 安装

```shell
npm install @hife/catui
```

or

```shell
yarn add hife-catui
```

## 使用

### 1 在入口中导入 `css` 文件

```js
// index.js
import '@hife/catui/styles/index.css';
```

### 2 使用组件

```jsx
import { Button } from '@hife/catui';

const App = () => {
  return <Button>Add</Button>;
};

export default App;
```

### 3 组件按需加载

- `yarn add babel-plugin-import -D` 下载 `babel-plugin-import` 插件
- 配置 `babel-plugin-import` 插件：

webpack.config.js

```js
/**
 * css name covert
 * 1 Button => button
 * 2 ElementSelect => element-select
 * @param {string} name 组件名称
 */
const cssNameConvert = function(name) {
  const len = name.length;
  let ret = '';
  for (let i = 0; i < len; i++) {
    const charCode = name.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      ret +=
        i === 0
          ? String.fromCharCode(charCode + 32)
          : `-${String.fromCharCode(charCode + 32)}`;
    } else {
      ret += name[i];
    }
  }
  return ret;
};

module.exprots = {
  module: {
    rules: [
      {
        {
          test: /\.(js|mjs|jsx|ts|tsx)$/,
          loader: require.resolve('babel-loader'),
          options: {
            plugins: [
              [
                'import',
                {
                  libraryName: '@hife/catui',
                  libraryDirectory: 'lib/components',
                  "camel2DashComponentName": false,
                  customStyleName: name => {
                    const newName = cssNameConvert(name);
                    return `@hife/catui/styles/${newName}.css`;
                  }
                }
              ]
            ]
          }
        }
      }
    ]
  }
}
```

## 开发流程

[开发流程](./docs/开发流程.md)

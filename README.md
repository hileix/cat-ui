# cat-ui

喜马拉雅国际版前端基础组件库

[![Build Status](https://www.travis-ci.org/hifeteam/cat-ui.svg?branch=master)](https://www.travis-ci.org/hifeteam/cat-ui)
[![codecov](https://codecov.io/gh/hifeteam/cat-ui/branch/master/graph/badge.svg)](https://codecov.io/gh/hifeteam/cat-ui)
[![HitCount](http://hits.dwyl.io/hifeteam/cat-ui.svg)](http://hits.dwyl.io/hifeteam/cat-ui)

[![NPM](https://nodei.co/npm/@hife/catui.png?downloads=true)](https://nodei.co/npm/@hife/catui?downloads=true)

## 版本 2.0 已有组件

- [x] Avatar
- [x] Icon
- [x] message
- [x] Guidance
- [x] Question
- [x] Button
- [x] Tabs
- [x] Loading
- [x] Modal
- [x] Drawer
- [x] notification

## 安装

```shell
npm install @hife/catui
```

or

```shell
yarn add hife-catui
```

## 使用

### 1. 在入口中导入 `css` 文件

```js
// index.js
import '@hife/catui/styles/index.css';
```

### 2. 使用组件

```jsx
import { Button } from '@hife/catui';

const App = () => {
  return <Button>Add</Button>;
};

export default App;
```

## 开发流程

[开发流程](./docs/开发流程.md)

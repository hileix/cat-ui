# cat-ui

喜马拉雅国际版前端基础组件库

## 版本 2.0 已有组件

- [x] Avatar
- [x] Icon
- [x] Message
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

## 命令

### 1. 开启开发环境

```shell
npm start
```

### 2. 更新 jest snapshot

```shell
npm run update:snapshot
```

### 3. 发布

```shell
npm run release
```

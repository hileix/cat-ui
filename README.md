# cat-ui

喜马拉雅国际版前端基础组件库

## 分支简介

- `master`分支是稳定分支，用以正式线上项目
- `develop`分支是开发分支，用以开发、测试、预览

`styleguidist`化的组件预览地址：http://test.himalaya.com/components/  

## 常用命令

``` bash
安装依赖
$ yarn

启动服务器
$ yarn dev

运行单元测试
$ yarn test
```

## 新增组件

以`Button`为例说明

- 在`Button.tsx`中的`class Button extends Component`前面添加注释，以说明该组件
- 在`Button.tsx`中的`Button`的`interface`为各个参数添加注释，以说明该参数
- 将`Button.md`中编写各个示例
- 将`__tests__/index.test.tsx`中编写单元测试
- 引入其他组件，参考`ButtonGroup.md`

推荐规范

- 在组件文件下尽量不要再新增文件夹，一个层级就够了
- 有多个子组件的时候，每个子组件使用一个`markdown`文件
- 子组件在`markdown`文件示范的时候，使用`CheckboxGroup`这种，无法使用`Checkbox.Group`

#### react-styleguidis文档

- 官方文档：https://react-styleguidist.js.org/docs/documenting.html  
- 常见问题：https://react-styleguidist.js.org/docs/cookbook.html

## 目录结构

```
.
├── README.md
├── package.json
├── public                              静态资源
├── src
│   ├── components                      组件库
│   │     ├── Button                    // 按钮
│   │     └── ToolTip                   // 文字提示
│   └── style                           组件库的全局样式
├── styleguide.config.js                styleguide的webpack配置
```

# cat-ui

喜马拉雅国际版前端基础组件库，本文主要介绍`master`分支的开发（`styleguidist`）

## 分支简介

- `master`分支是稳定分支  
- `develop`分支是开发分支  

`styleguidist`化的组件预览地址：http://test.himalaya.com/components/  

## 常用命令

``` bash
安装依赖（第一次运行需要）
$ yarn

启动服务器，Run npx styleguidist server to start a style guide dev server.
$ yarn dev

生成静态文件，Run npx styleguidist build to build a static version.
$ yarn build

压缩源代码
$ yarn min

发布到线上预览地址：http://test.himalaya.com/components/
$ yarn publish
```

## 新增组件

以`Button`为例说明

- 在`Button.tsx`中的`class Button extends Component`前面添加注释，以说明该组件
- 在`Button.tsx`中的`Button.propTypes`为各个参数添加注释，以说明该参数
- 将`Button`中的`markdown`文件，重命名为`Button.md`
- 将`Button.md`中代码示例的\`\`\`后面加上`jsx`
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
│   │     ├── AutoComplete              // 自动完成
│   │     ├── Avatar                    // 头像
│   │     ├── BreadCrumb                // 面包屑
│   │     ├── Button                    // 按钮
│   │     ├── Card                      // 卡片
│   │     ├── Chart                     // 折线图
│   │     ├── CheckBox                  // 复选框
│   │     ├── Col                       // 栅格
│   │     ├── Input                     // 输入框 
│   │     ├── Loading                   // loading 
│   │     ├── Menu                      // 菜单栏
│   │     ├── NavPrompt                 // 导航提示
│   │     ├── Pagination                // 分页
│   │     ├── Player                    // 播放器
│   │     ├── Progress                  // 进度条
│   │     ├── QRCode                    // 二维码
│   │     ├── Radio                     // 单选框
│   │     ├── ReCaptcha                 // google验证器
│   │     ├── RichEditor                // 富文本编辑器
│   │     ├── Row                       // 栅格的Row
│   │     ├── Scroll                    // 滚动
│   │     ├── Select                    // 下拉选择框
│   │     ├── Slider                    // 滑动输入条
│   │     ├── Steps                     // 步骤条
│   │     ├── Table                     // table
│   │     ├── Tabs                      // tab切换
│   │     ├── ToolTip                   // 文字提示
│   │     └── Upload                    // 上传
│   └── style                           组件库的全局样式
├── styleguide.config.js                styleguide的webpack配置
```

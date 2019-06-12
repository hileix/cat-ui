# cat-ui

喜马拉雅国际版前端基础组件库

## 分支简介

- `master`分支是稳定分支，用以正式线上环境
- `develop`分支是开发分支，用以开发、测试、预览

## 常用命令

``` bash
安装依赖
$ yarn

启动服务器
$ yarn run dev

新增组件，会新增一个空白组件模板，组件名首字母需大写
$ yarn run new [组件名]

发布到xnpm
$ yarn run release 自动迭代版本号，递增最后一位
$ yarn run release -i 忽略自动迭代，不要自动迭代版本号
# $ yarn run release -m [注释] 自动迭代版本号，递增最后一位，添加注释
$ yarn run release [版本号] 使用自定义传入的版本号

运行Jest测试
$ yarn run test

更新快照
$ yarn run update:snapshot
或者
$ jest --updateSnapshot
```

更新icon

第一步 登录iconfont.cn 获取code(hash)

第二步 将code添加至package.json --> script -->  update:icon .... --code=xxx

第三步 执行 yarn run update:icon

示例如下:
![](./doc/images/update-icon.gif)

## 使用组件

``` jsx
import { Button } from '@xmly/cat-ui'

<Button>Test</Button>
```

组件预览地址：http://test.himalaya.com/catui/  

## 目录结构

```
.
├── README.md
├── package.json
├── public                              静态资源
├── src
│   ├── components                      组件库
│   │     ├── Button                    按钮
│   │     ├── Checkbox                  多选框
│   │     ├── Icon                      按钮
│   │     ├── Input                     输入框
│   │     ├── Modal                     对话框
│   │     ├── Popup                     弹层
│   │     ├── Portal                    弹出层
│   │     ├── Radio                     单选框
│   │     ├── Slider                    滑动输入条
│   │     ├── Table                     表格（列表）
│   │     ├── Tabs                      选项卡
│   │     └── ToolTip                   文字提示
│   ├── styles                          样式
│   └── utils                           工具函数
├── styleguide.config.js                styleguide的webpack配置
├── webpack.config.js                   发包的webpack配置
```

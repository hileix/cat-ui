# notification 通知

## Example

```jsx
// 函数调用
notification.success({
  title: 'title',
  content: 'content'
});

// jsx 调用
import { notification } from '@hife/catui';
const { Notification } = notification;

<Notification visible={defaultVisible} type='success' title='default title' onClose={() => setDefaultVisible(false)}>
  default content
</Notification>
```

## 函数式调用 API

- notification.default(config)
- notification.success(config)
- notification.warn(config)
- notification.error(config)

config 参数如下：

|  属性   |       类型        | 默认值 | 描述  | 是否必填 |
| :-----: | :---------------: | :----: | :---: | :------: |
|  title  | `React.ReactNode` |   -    | 标题  |    -     |
| content | `React.ReactNode` |   -    | 内容  |    -     |


## JSX 调用 API

notification.Notification

|   属性    |         类型          |            默认值             |                      描述                       | 是否必填 |
| :-------: | :-------------------: | :---------------------------: | :---------------------------------------------: | :------: |
|  prefix   |       `string`        |             `cat`             |                    类名前缀                     |    -     |
| className |       `string`        |               -               |                      类名                       |    -     |
|   style   | `React.CSSProperties` |               -               |                    行内样式                     |    -     |
|  visible  |       `boolean`       |               -               |                    是否显示                     |    -     |
|   type    |       `string`        |           `default`           | 类型，可选值 `default` `success` `warn` `error` |    -     |
|   title   |   `React.ReactNode`   |               -               |                      标题                       |    -     |
|  content  |   `React.ReactNode`   |               -               |                      内容                       |    -     |
| children  |   `React.ReactNode`   |               -               |   内容，若 `children` 存在，则覆盖 `content`    |    -     |
| selector  |       `string`        | `.cat-notification-container` |      Notification 所在容器的 css 选择器       |    -     |
|  onClose  |     `() => void`      |               -               |              点击关闭按钮时的回调               |    -     |
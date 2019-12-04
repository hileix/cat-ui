# message 全局提示

## Example

```jsx
message.success('success');
```

## API

- notification.success(config)
- notification.warn(config)
- notification.error(config)

config 参数如下：

|   属性   |       类型        | 默认值 |     描述     | 是否必填 |
| :------: | :---------------: | :----: | :----------: | :------: |
| content  | `React.ReactNode` |   -    |     内容     |    是    |
| duration |     `number`      |   -    |   持续时间   |    -     |
| onClose  |   `() => void`    |   -    | 关闭时的回调 |    -     |

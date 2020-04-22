# message 全局提示

## Example

```jsx
message.success('success');
```

## API

- notification.success(Config | string)
- notification.warn(Config | string)
- notification.error(Config | string)

Config 接口参数如下：

|   属性   |       类型        | 默认值 |        描述        | 是否必填 |
| :------: | :---------------: | :----: | :----------------: | :------: |
| content  | `React.ReactNode` |   -    |        内容        |    是    |
| duration |     `number`      |   3    | 持续时间，单位：秒 |    -     |
| onClose  |   `() => void`    |   -    |    关闭时的回调    |    -     |

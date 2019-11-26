# notification 通知

## Example

```jsx
notification.success({
  title: 'title',
  content: 'content'
});
```

## API

- notification.success(config)
- notification.warn(config)
- notification.error(config)

config 参数如下：

|  属性   |       类型        | 默认值 | 描述 | 是否必填 |
|:-------:|:-----------------:|:------:|:----:|:--------:|
|  title  | `React.ReactNode` |   -    | 标题 |    -     |
| content | `React.ReactNode` |   -    | 内容 |    -     |

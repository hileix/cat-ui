# Avatar 头像

## Example

```jsx
<Avatar
  src='https://raw.githubusercontent.com/sialvsic/static-host/master/public/laptop.png'
  size='large'
/>
```

## API

|    属性     |         类型          |    默认值    |                描述                | 是否必填 |
| :---------: | :-------------------: | :----------: | :--------------------------------: | :------: |
|  className  |       `string`        |      -       |                类名                |    -     |
|    style    |       `object`        |      -       |              行内样式              |    -     |
|    size     |   `number | string`   |   `medium`   |   尺寸 `large` `medium` `small`    |    -     |
|    shape    |       `string`        |   `square`   |       形状 `circle` `square`       |    -     |
|     src     |       `string`        |      -       |              图片地址              |    -     |
| fallbackSrc |       `string`        |      -       |            容错图片地址            |    -     |
|     alt     |       `string`        |      -       |              图片名称              |    -     |
|   srcSet    |       `string`        |      -       | src 扩展，会根据 ua 请求相应的资源 |    -     |
|    sizes    |       `string`        |      -       |   响应式图片，和 srcSet 一起使用   |    -     |
|   prefix    |       `string`        | `cat-avatar` |              样式前缀              |    -     |
|   onError   | `(e: any) => boolean` |      -       |           请求出错的回调           |    -     |

## Todo

- 支持文字展示

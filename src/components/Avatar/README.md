# Avatar 头像

## Example

```jsx
<Avatar
  src="https://raw.githubusercontent.com/sialvsic/static-host/master/public/laptop.png"
  size="large"
/>
```

## API

|    属性     |         类型          |    默认值    | 必选  |                描述                 |
| :---------: | :-------------------: | :----------: | :---: | :---------------------------------: |
|  className  |       `string`        |      -       | false |                类名                 |
|    style    |       `object`        |      -       | false |              行内样式               |
|    size     |   `number | string`   |   `medium`   | false | 尺寸，可选 `large` `medium` `small` |
|    shape    |       `string`        |   `square`   | false |    形状，可选 `circle` `square`     |
|     src     |       `string`        |      -       | false |              图片地址               |
| fallbackSrc |       `string`        |      -       | false |            容错图片地址             |
|     alt     |       `string`        |      -       | false |              图片名称               |
|   srcSet    |       `string`        |      -       | false | src 扩展，会根据 ua 请求相应的资源  |
|    sizes    |       `string`        |      -       | false |   响应式图片，和 srcSet 一起使用    |
|   prefix    |       `string`        | `cat-avatar` | false |              样式前缀               |
|   onError   | `(e: any) => boolean` |      -       | false |           请求出错的回调            |

## Todo

- 支持文字展示

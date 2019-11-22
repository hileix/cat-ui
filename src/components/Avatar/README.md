# Avatar 头像

## Example

```jsx
<Avatar
  src="https://raw.githubusercontent.com/sialvsic/static-host/master/public/laptop.png"
  size="large"
/>
```

## API

|    属性     |         类型          |    默认值    | 可选 |                描述                 |
| :---------: | :-------------------: | :----------: | :--: | :---------------------------------: |
|  className  |       `string`        |      -       | true |                类名                 |
|    style    |       `object`        |      -       | true |              行内样式               |
|    size     |   `number | string`   |   `medium`   | true | 尺寸，可选 `large` `medium` `small` |
|    shape    |       `string`        |   `square`   | true |    形状，可选 `circle` `square`     |
|     src     |       `string`        |      -       | true |              图片地址               |
| fallbackSrc |       `string`        |      -       | true |            容错图片地址             |
|     alt     |       `string`        |      -       | true |              图片名称               |
|   srcSet    |       `string`        |      -       | true | src 扩展，会根据 ua 请求相应的资源  |
|    sizes    |       `string`        |      -       | true |   响应式图片，和 srcSet 一起使用    |
|   prefix    |       `string`        | `cat-avatar` | true |              样式前缀               |
|   onError   | `(e: any) => boolean` |      -       | true |           请求出错的回调            |

## Todo

- 支持文字展示

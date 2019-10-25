# Avatar 头像

## Example

```jsx
<Avatar
  src={
    'http://cdn.himalaya.com/8c205ad6954541c99f7fd77008ff6479.jpg?x-oss-process=image/resize,w_300,h_300&auth_key=4102416000-1234-0-b5602166a98343b7e7f8f58d645d6d3e'
  }
  size="large"
/>
```

## API

|   属性    |         类型          |  默认值  |                描述                 |
|:---------:|:---------------------:|:--------:|:-----------------------------------:|
| className |       `string`        |    -     |                类名                 |
|   style   |       `object`        |    -     |              行内样式               |
|   style   |       `object`        |    -     |              行内样式               |
|   size    |   `number | string`   | `medium` | 尺寸，可选 `large` `medium` `small` |
|   shape   |       `string`        | `square` |    形状，可选  `circle` `square`    |
|    src    |       `string`        |    -     |              图片地址               |
|    alt    |       `string`        |    -     |              图片名称               |
|  srcSet   |       `string`        |    -     |   src扩展，会根据ua请求相应的资源   |
|  onError  | `(e: any) => boolean` |    -     |           请求出错的回调            |


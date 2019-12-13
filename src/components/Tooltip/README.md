# Tooltip 文字提示

## Example

```jsx
<Tooltip position='top' content='tooltip content'>
  tooltip trigger
</Tooltip>
```

## API

|  属性   |   类型    | 默认值 |                     描述                     | 是否必填 |
| :-----: | :-------: | :----: | :------------------------------------------: | :------: |
| visible | `boolean` |   -    | 外部状态控制是否显示（配合 `onChange` 使用） |    -     |
| mode | `string` `array` |   `hover`    | 触发显示的模式，可选 `hover` `click`。或配置多个 mode `['hover', 'click]` |    -     |
| position | `string` |   `top`    | 定位方向，可选 `top` `right` `bottom` `left` `topLeft` `topRight` `rightTop` `rightBottom` `bottomLeft` `bottomRight` `leftTop` `leftBottom` |    -     |
| maxWidth | `number` |   `400`    | 弹层最大宽度 |    -     |
| content | `React.ReactNode` |   -    | 弹层内容 |    是     |
| children | `React.ReactElement` |   -    | 触发弹层显示的 children |    是     |
| onChange | `(visible: boolean) => void` |   -    | 弹层显示或隐藏时的回调 |    -    |

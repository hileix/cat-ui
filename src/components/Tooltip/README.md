# Tooltip

## Example

```jsx
 <Tooltip
    position='top'
    width={200}
    content={<div>tooltip content</div>}
  >
  tooltip
</Tooltip>
```

## API

|   属性    |   类型   |   默认值    |   描述   |
|:---------:|:--------:|:-----------:|:--------:|
| className | `string` |      -      |   类名   |
|   style   | `object` |      -      | 行内样式 |
|   mode    | `string` | 'topCenter' | 方向，可选值 `bottomLeft` `buttonCenter` `bottomRight` `topLeft` `topCenter` `topRight` |
|   width    | `number` | - | 宽度 |
|   content    | `React.ReactNode` | - | 内容 |
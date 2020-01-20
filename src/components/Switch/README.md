# Switch 开关

## Example

```jsx
<Switch checked={checked} onChange={handleChange} /> 
```

## API

|       属性        |             类型             | 默认值  |      描述      | 是否必填 |
| :---------------: | :--------------------------: | :-----: | :------------: | :------: |
|      preifx       |           `string`           |  `cat`  |      前缀      |    -     |
|     className     |           `string`           |    -    |      类名      |    -     |
|       style       |    `React.CSSProperties`     |    -    |    行内样式    |    -     |
|     disabled      |          `boolean`           | `false` |    是否禁用    |    -     |
|  checkedChildren  |      `React.ReactNode`       |    -    |  选中时的内容  |    -     |
| unCheckedChildren |      `React.ReactNode`       |    -    | 非选中时的内容 |    -     |
|  defaultChecked   |          `boolean`           |    -    |  默认是否选中  |    -     |
|      checked      |          `boolean`           |    -    |    是否选中    |    -     |
|     autoFocus     |          `boolean`           | `false` |    是否聚焦    |    -     |
|     onChange      | `(checked: boolean) => void` |    -    |  变化时的回调  |    -     |

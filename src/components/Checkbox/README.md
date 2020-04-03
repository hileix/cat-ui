# Checkbox

## Example

```tsx
<Checkbox.Group value={value} onChange={handleChange}>
  <Checkbox value={'A'}>A</Checkbox>
  <Checkbox value={'B'}>B</Checkbox>
  <Checkbox value={'C'}>C</Checkbox>
  <Checkbox disabled value='D'>
    D
  </Checkbox>
  <Checkbox value={'E'}>E</Checkbox>
</Checkbox.Group>
```

## CheckboxGroup API

|     属性     |         类型          | 默认值  |          描述          | 是否必选 |
| :----------: | :-------------------: | :-----: | :--------------------: | :------: |
|  className   |       `string`        |    -    |          类名          |    -     |
|    style     | `React.CSSProperties` |    -    |        行内样式        |    -     |
|   disabled   |       `boolean`       | `false` |      是否全部禁用      |    -     |
|   readOnly   |       `boolean`       | `false` |      是否全部只读      |    -     |
|   checked    |       `boolean`       | `false` |        是否选中        |    -     |
| defaultValue |     `Array<any>`      |    -    | 默认值，仅在初始化有效 |    -     |
|    value     |     `Array<any>`      |    -    |        选中的值        |    -     |
|   onChange   |      `Function`       |    -    |    选项变化时的回调    |    -     |

## Checkbox API

|   属性    |         类型          | 默认值  |       描述       | 是否必选 |
| :-------: | :-------------------: | :-----: | :--------------: | :------: |
| className |       `string`        |    -    |       类名       |    -     |
|   style   | `React.CSSProperties` |    -    |     行内样式     |    -     |
| disabled  |       `boolean`       | `false` |     是否禁用     |    -     |
| readOnly  |       `boolean`       | `false` |     是否只读     |    -     |
|  checked  |       `boolean`       | `false` |     是否选中     |    -     |
|   value   |         `any`         |    -    |        值        |    -     |
| onChange  |      `Function`       |    -    | 选项变化时的回调 |    -     |

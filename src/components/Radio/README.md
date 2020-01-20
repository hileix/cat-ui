# Radio 单选框

## Example

```tsx
<Radio.Group value={value} onChange={(value) => setValue(value)}>
  <Radio value='A'>A</Radio>
  <Radio value='B'>B</Radio>
  <Radio value='C'>C</Radio>
  <Radio value='D'>D</Radio>
</Radio.Group>
```

## Radio API

|      属性      |                        类型                        | 默认值  |      描述      | 是否必填 |
| :------------: | :------------------------------------------------: | :-----: | :------------: | :------: |
|     preifx     |                      `string`                      |  `cat`  |    类名前缀    |    -     |
|   className    |                      `string`                      |    -    |      类名      |    -     |
|     style      |               `React.CSSProperties`                |    -    |    行内样式    |    -     |
|    disabled    |                     `boolean`                      | `false` |    是否禁用    |    -     |
| defaultChecked |                     `boolean`                      |    -    | 默认是否被选中 |    -     |
|    checked     |                     `boolean`                      |    -    |    是否选中    |    -     |
|     value      |                       `any`                        |    -    |       值       |    是    |
|    onChange    | `(e: React.ChangeEvent<HTMLInputElement>) => void` |    -    |  改变时的回调  |    -     |

## Radio.Group API

|      属性      |          类型          | 默认值  |      描述      | 是否必填 |
| :------------: | :--------------------: | :-----: | :------------: | :------: |
|   className    |        `string`        |    -    |      类名      |    -     |
|     style      | `React.CSSProperties`  |    -    |    行内样式    |    -     |
|    disabled    |       `boolean`        | `false` |    是否禁用    |    -     |
| defaultChecked |       `boolean`        |    -    | 默认是否被选中 |    -     |
|    checked     |       `boolean`        |    -    |    是否选中    |    -     |
|     value      |         `any`          |    -    | 当前选中项的值 |    是    |
|    onChange    | `(value: any) => void` |    -    |  改变时的回调  |    -     |

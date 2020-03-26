# Select 选择

## Example

```jsx
const Option = Select.Option;

<Select
  className='select-1'
  onSelect={() => {}}
  onChange={() => {}}
>
  <Option value='Option 1'>Option 1</Option>
  <Option value='Option 2'>Option 2</Option>
  <Option value='Option 3'>Option 3</Option>
  <Option value='Option 4'>Option 4</Option>
  <Option value='Option 5'>Option 5</Option>
</Select>
```

## Select API

|    属性     |         类型          |    默认值    |                描述                | 是否必填 |
| :---------: | :-------------------: | :----------: | :--------------------------------: | :------: |
|   prefix    |       `string`        | `cat-avatar` |              样式前缀              |    -     |
|  className  |       `string`        |      -       |                类名                |    -     |
|    style    |       `object`        |      -       |       最外层包裹盒子行内样式         |    -     |
| triggerStyle |       `object`        |      -       |           触发盒子样式             |    -     |
| contentStyle |       `object`        |      -       |           内容盒子样式             |    -     |
|    width    |  `string number`    |       -      |                宽度                |    -     |
|  disabled   |       `boolean`       |     false    |                禁用                |    -     |
|  defaultValue  | `string number`  |      -       |         用于初始化的默认值          |    -     |
|    value    |       `string`        |      -       |              选中项的值            |    -     |
|   onSelect  |       `func`          |      -       |        选择一项触发的回调函数        |    -     |
|   onChange  |       `func`          |      -       |        选择的项发生变化时调用        |    -     |

## Option API

|    属性     |         类型          |    默认值    |                描述                | 是否必填 |
| :---------: | :-------------------: | :----------: | :--------------------------------: | :------: |
|   prefix    |       `string`        | `cat-avatar` |              样式前缀               |    -     |
|  className  |       `string`        |      -       |                类名                 |    -     |
|    style    |       `object`        |      -       |              行内样式               |    -     |
|    value    |    `string number`    |      -       |              选中项的值             |    -     |
|    index    |       `number`        |      -       |              选中项的索引           |    -     |
|  disabled   |       `bool`          |      -       |              禁用该项（不可选）      |    -     |
|  children   |   `React.ReactNode`   |      -       |              react节点              |    -     |
|   onClick   |       `func`          |      -       |              点击事件               |    -     |
| onMouseEnter |       `func`         |      -       |             鼠标移入事件            |    -     |
| onMouseLeave |       `func`         |      -       |             鼠标移出事件            |    -     |

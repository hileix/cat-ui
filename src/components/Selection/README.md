# Selection 选择选项

## Example

```jsx
<Selection
  visible={visible}
  value='选项 2'
  onSelect={this.handleSelect}
>
  <Option className='qwer' value='选项 1' />
  <Option value='选项 2' />
  <Option value='选项 3' />
  <Option value='选项 4' />
  <Option value='选项 5' />
</Selection>
```

## Selection API

|    属性     |         类型          |    默认值    |                描述                | 是否必填 |
| :---------: | :-------------------: | :----------: | :--------------------------------: | :------: |
|   prefix    |       `string`        | `cat-avatar` |              样式前缀              |    -     |
|  className  |       `string`        |      -       |                类名                |    -     |
|    style    |       `object`        |      -       |              行内样式              |    -     |
|    visible  |       `boolean`       |     true     |           是否显示选择菜单          |    -     |
|  defaultValue  |       `string`     |      -       |         用于初始化的默认值          |    -     |
|    value    |   `string | number`   |      -       |              选中项的值            |    -     |
|   children  |        `any`          |      -       |              任何类型              |    -     |
|   onSelect  |       `func`          |      -       |        选中一项触发的回调函数        |    -     |

## Option API

|    属性     |         类型          |    默认值    |                描述                | 是否必填 |
| :---------: | :-------------------: | :----------: | :--------------------------------: | :------: |
|   prefix    |       `string`        | `cat-avatar` |              样式前缀               |    -     |
|  className  |       `string`        |      -       |                类名                 |    -     |
|    style    |       `object`        |      -       |              行内样式               |    -     |
|    value    |   `string | number`   |      -       |              选中项的值             |    -     |
|    index    |       `number`        |      -       |              选中项的索引           |    -     |
|  disabled   |       `bool`          |      -       |              禁用该项（不可选）      |    -     |
|  children   |   `React.ReactNode`   |      -       |              react节点              |    -     |
|   onClick   |       `func`          |      -       |              点击事件               |    -     |
| onMouseEnter |       `func`         |      -       |             鼠标移入事件            |    -     |
| onMouseLeave |       `func`         |      -       |             鼠标移出事件            |    -     |

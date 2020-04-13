# Search 搜索框

## Example

```jsx
<Search
  placeholder='Find more beauty'
  dataSource={dataSource}
  onChange={this.handleChange}
  onSelect={this.handleSelect}
  onSearch={this.handleSearch}
/>
```

## API

|    属性     |         类型          |    默认值    |                描述                | 是否必填 |
| :---------: | :-------------------: | :----------: | :--------------------------------: | :------: |
|  className  |       `string`        |      -       |              样式类名              |    -     |
| selectionClassName  |  `string`     |      -       |         搜索列表样式类名            |    -     |
|    style    |       `object`        |      -       |              行内样式              |    -     |
|contentStyle |`React.CSSProperties`  |      -       |              下拉菜单的行内样式      |    -     |
|   offsetX   |       `number`        |      0       |  搜索列表相对于搜索框的 x 偏移量     |    -     |
|   offsetY   |       `number`        |      5       |  搜索列表相对于搜索框的 y 偏移量     |    -     |
|  disabled   |        `bool`         |      -       |              禁用搜索              |    -     |
|  autoFocus  |        `bool`         |      -       |              自动聚焦              |    -     |
| placeholder |        `string`       |      -       |            搜索框默认占位符         |    -     |
|    value    |        `string`       |      -       | 搜索框内容(如有则受控，否则不受控)    |    -     |
| dataSource  | `(string | {value: string, render: React.ReactNode})[]` | - |  搜索结果数据源 | - |
|  onChange   |        `func`         |      -       |         搜索框内容发生变化时调用      |    -     |
|  onSelect   |        `func`         |      -       |  被选中时调用，参数为选中项的 value 值 |    -     |
|  onSearch   |        `func`         |      -       |           搜索补全项的时候调用        |    -     |

## Todo

- 支持loading
- Section 动画
- 移动端支持一键清除搜索关键词

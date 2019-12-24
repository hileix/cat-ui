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
|  className  |       `string`        |      -       |                类名                |    -     |
|    style    |       `object`        |      -       |              行内样式              |    -     |
|  disabled   |        `bool`         |      -       |              禁用搜索              |    -     |
|  autoFocus  |        `bool`         |      -       |              自动聚焦              |    -     |
| placeholder |        `string`       |      -       |            搜索框默认占位符         |    -     |
|    value    |        `string`       |      -       | 搜索框内容(如有则受控，否则不受控)    |    -     |
| dataSource  |        `array`        |      -       |             搜索结果数据源           |    -     |
|  onChange   |        `func`         |      -       |         搜索框内容发生变化时调用      |    -     |
|  onSelect   |        `func`         |      -       |  被选中时调用，参数为选中项的 value 值 |    -     |
|  onSearch   |        `func`         |      -       |           搜索补全项的时候调用        |    -     |

## Todo

- 支持loading
- Section 动画
- 移动端支持一键清除搜索关键词

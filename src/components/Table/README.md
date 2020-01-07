# Table 表格组件

## Example

```jsx
<Table
  rowKey='id'
  columns={columns}
  dataSource={dataSource}
/>
```
## API

|    属性    |              类型              |  默认值   |                           描述                            | 是否必填 |
| :--------: | :----------------------------: | :-------: | :-------------------------------------------------------: | :------: |
| className  |            `string`            |     -     |                           类名                            |    -     |
|   style    |     `React.CSSProperties`      |     -     |                         行内样式                          |    -     |
|  columns   |       `ColumnProps<T>[]`       |     -     |                        列定义数据                         |    是    |
| dataSource |            `<T>[]`             |     -     |                         表格数据                          |    -     |
|   align    |            `string`            |  `left`   |     单元格的对齐方式，可选值 `left` `center` `right`      |    -     |
| pagination | `PaginationProps` 类型定义如下 | 详情如下  |                         分页参数                          |    -     |
|   empty    |       `React.ReactNode`        | `No Data` |                   表格数据为空时的模板                    |    -     |
|   rowKey   |            `string`            |   `key`   | 行 key 值 （dataSource 中必须要有 rowKey 值所对应的 key） |    -     |
|  loading   |           `boolean`            |  `false`  |                       表格加载状态                        |    -     |

### `PaginationProps` 类型
|   属性   |                    类型                     | 默认值 |         描述 | 是否必填 |
| :------: | :-----------------------------------------: | :----: | -----------: | :------: |
| current  |                  `number`                   |   -    |     当前页面 |    是    |
|  total   |                  `number`                   |   -    | 表格数据总数 |    是    |
| pageSize |                  `number`                   |  `10`  |     每页条数 |    -     |
| onChange | `(page: number, pageSize?: number) => void` |   -    |     每页条数 |    -     |


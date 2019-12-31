# Pagination 分页

## Example

```jsx
<Pagination
  current={current}
  total={total}
  onChange={(page, pageSize) => setCurrent(page)}
/>
```

## API

|   属性    |                    类型                    | 默认值 |                       描述                       | 是否必填 |
| :-------: | :----------------------------------------: | :----: | :----------------------------------------------: | :------: |
|  prefix   |                  `string`                  | `cat`  |                     类名前缀                     |    -     |
| className |                  `string`                  |   -    |                       类名                       |    -     |
|   style   |           `React.CSSProperties`            |   -    |                     行内样式                     |    -     |
|  current  |                  `number`                  |  `1`   |                     当前页码                     |    -     |
|   total   |                  `number`                  |   -    |                     当前页码                     |    是    |
| pageSize  |                  `number`                  |  `10`  |                     每页条数                     |    -     |
| onChange  | `(page: number, pageSize: number) => void` |   -    | 页码改变的回调。参数是改变后的页码以及每页的条数 |    -     |

# Grid 栅格系统

基于 flex 的栅格系统，由两部分组成：

- Row 组件
- Col 组件

每一行有 24 个栅格

## Example

```jsx
<Row align='center'>
  <Col span={12}>col-12</Col>
  <Col span={12}>col-12</Col>
</Row>
```

## Row

|   属性    |   类型   | 默认值  |                                          描述                                           | 是否必填 |
| :-------: | :------: | :-----: | :-------------------------------------------------------------------------------------: | :------: |
| className | `string` |    -    |                                          类名                                           |    -     |
|  justify  | `string` | `start` | flex 布局下的水平排列方式，可选值 `start` `end` `center` `space-around` `space-between` |    -     |
|   align   | `string` |  `top`  |                flex 布局下的垂直排列方式，可选值 `top` `center` `bottom`                |    -     |

## Col

|   属性    |       类型        | 默认值 |                     描述                      | 是否必填 |
| :-------: | :---------------: | :----: | :-------------------------------------------: | :------: |
| className |     `string`      |   -    |                     类名                      |    -     |
|   span    |     `number`      |   0    | 栅格所占的格数，`当值为 0 时，display: none;` |    -     |
|  offset   |     `number`      |   0    |               栅格左偏移的格数                |    -     |
|   order   |     `number`      |   -    |                  栅格的顺序                   |    -     |
|    xs     | `ResponsiveProps` |   -    |        width < 576px 时的其他属性对象         |    -     |
|    sm     | `ResponsiveProps` |   -    |        width >= 576px 时的其他属性对象        |    -     |
|    md     | `ResponsiveProps` |   -    |        width >= 768px 时的其他属性对象        |    -     |
|    lg     | `ResponsiveProps` |   -    |        width >= 992px 时的其他属性对象        |    -     |
|    xl     | `ResponsiveProps` |   -    |       width >= 1200px 时的其他属性对象        |    -     |
|    xxl    | `ResponsiveProps` |   -    |       width >= 1600px 时的其他属性对象        |    -     |
|    fhd    | `ResponsiveProps` |   -    |       width >= 1920px 时的其他属性对象        |    -     |

### ResponsiveProps 类型

|  属性  |   类型   | 默认值 |                     描述                      | 是否必填 |
| :----: | :------: | :----: | :-------------------------------------------: | :------: |
|  span  | `number` |   0    | 栅格所占的格数，`当值为 0 时，display: none;` |    -     |
| offset | `number` |   0    |               栅格左偏移的格数                |    -     |
| order  | `number` |   -    |                  栅格的顺序                   |    -     |

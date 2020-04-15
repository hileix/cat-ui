# Dropdown 组件

## Example

```jsx
<Dropdown selector="body" overlay={<div>下拉后展示</div>}>
  <button>下拉菜单</button>
</Dropdown>  
```

## API

|   属性   |       类型        |    默认值    |               描述                | 是否必填 |
| :------: | :---------------: | :----------: | :-------------------------------: | :------: |
| overlay  |   `JSX.Element`   |      -       |         下拉框展示的组件          |    -     |
| children | `React.ReactNode` |      -       |              子元素               |    -     |
| selector |     `string`      |      -       | 指定容器选择器，与Prpover组件一致 |    -     |
| onChange |    `Function`     |      -       |        下拉框改变处理函数         |    -     |
| position |     `string`      | `bottomLeft` |             下拉位置              |    -     |


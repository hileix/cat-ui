# Drawer 抽屉

## Example

```jsx
<Drawer
  className='my-drawer'
  style={{ width: 200 }}
  visible={visible}
  onClose={() => setVisible(false)}
  mask={true}
>
  <div style={{ width: 100, padding: 16 }}>
    <input />
  </div>
</Drawer>
```

## API
|      属性      |        类型         |        默认值         |               描述               | 是否必填 |
|:--------------:|:-------------------:|:---------------------:|:--------------------------------:|:--------:|
|     prefix     |      `string`       |         `cat`         |             类名前缀             |    -     |
|   className    |      `string`       |           -           |               类名               |    -     |
|     style      |      `object`       |           -           |             行内样式             |    -     |
|    visible     |      `boolean`      |           -           |             是否显示             |    -     |
|  getContainer  | `() => HTMLElement` | `() => document.body` |     获取抽屉所在的 dom 节点      |    -     |
|    children    |  `React.ReactNode`  |           -           |             children             |    -     |
|      mask      |      `boolean`      |        `true`         |           是否显示遮罩           |    -     |
|    onClose     |    `() => void`     |           -           |            关闭的回调            |    -     |
| destroyOnClose |      `boolean`      |         false         | 关闭时是否销毁 Drawer 里的子元素 |    -     |





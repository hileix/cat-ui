# Tabs 标签页

## Example

```jsx
<Tabs
  activeId={activeId}
  onChange={onTabChange1}>
  <TabPanel
    id='a'
    tab='选项A'>
    <div>选项A的内容11111</div>
  </TabPanel>
  <TabPanel
    id='b'
    tab='选项B'>
    <div>选项B的内容2222222</div>
  </TabPanel>
  <TabPanel
    id='c'
    tab='选项C'>
    <div>选项C的内容333333</div>
  </TabPanel>
</Tabs>
```

## API

|   属性    |             类型              | 默认值 |      描述      |
|:---------:|:-----------------------------:|:------:|:--------------:|
| className |           `string`            |   -    |      类名      |
|   style   |           `object`            |   -    |    行内样式    |
| activeId  |       `string | number`       |   -    | 激活的 tab id  |
| onChange  | `(id: string | number) => {}` |   -    | tab 切换的回调 |


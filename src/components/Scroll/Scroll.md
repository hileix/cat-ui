# Scroll 滚动

## Description

该组件提供子内容滚动位置距离窗口顶部的的实时监测，并提供了回调。

## Example

```jsx
<Scroll onPageIndexChange={onPageIndexChange}>
  <div className='block-1'></div>
  <div className='block-2'></div>
  <div className='block-3'></div>
  <div className='block-4'></div>
</Scroll>
```

## API

|       属性        |        类型         |       默认值       |       描述        | 是否必填 |
| :---------------: | :-----------------: | :----------------: | :---------------: | :------: |
|    targetNode     |      `string`       | `target-dom-point` |     目标节点      |    -     |
|      offset       |      `number`       |        `0`         |      偏移量       |    -     |
|      prefix       |      `string`       |    `cat-scroll`    |     类名前缀      |    -     |
|     className     |      `string`       |       `cat`        |       类名        |    -     |
| onPageIndexChange |       `func`        |         -          | page 切换时的回调 |    -     |
|       style       |      `object`       |         -          |       样式        |    -     |
|     children      | `React.ReactNode[]` |         -          |     children      |    -     |
|       wait        |      `number`       |       `250`        |  节流器等待时间   |    -     |

# Guidance 引导

## Example

```jsx
<Guidance
  activeId={activeId}
  visible={visible}
  onChange={handleChange}
>
  <Guidance.Step id={1} selector='.guidance-step-1'>
    第一步 ~
  </Guidance.Step>
  <Guidance.Step id={2} selector='.guidance-step-2'>
    第二步 ~~
  </Guidance.Step>
  <Guidance.Step id={3} selector='.guidance-step-3'>
    第三步 ~~~
  </Guidance.Step>
</Guidance>
```

## Guidance API

|           属性           |                  类型                  | 默认值 |       描述        |
|:------------------------:|:--------------------------------------:|:------:|:-----------------:|
|          prefix          |                `string`                | `cat`  |     类名前缀      |
|        className         |                `string`                |   -    |       类名        |
|          style           |                `object`                |   -    |     行内样式      |
|         activeId         |           `string` `number`            |   -    |  激活的 step id   |
|         visible          |               `boolean`                | false  |     是否显示      |
|         onChange         | `(currentId: number | string) => void` |   -    | step 改变时的回调 |
|         nextText         |                `string`                | `Next` |   下一步的文案    |
| selectedElementClassName |                `string`                |   -    | 选中的元素的类名  |
|   selectedElementStyle   |                `object`                |   -    | 选中的元素的样式  |


## Guidance.Step API

|   属性    |       类型        | 默认值 |            描述             |
|:---------:|:-----------------:|:------:|:---------------------------:|
|  prefix   |     `string`      | `cat`  |          类名前缀           |
| className |     `string`      |   -    |            类名             |
|   style   |     `object`      |   -    |          行内样式           |
|    id     | `string` `number` |   -    |           步骤id            |
| selector  |     `string`      |   -    | 该步骤选中元素的 css 选择器 |
# Popover 弹出层组件

- 弹出层组件，适用于 `一个容器`（content） 相对于 `另外一个容器`（trigger） `定位` 的弹出层组件，如 `Tooltip`, `Select` 组件

## Example

```jsx
import { positionNameConvert } from '../Popover/utils';

const App = () => {
  // 渲染内容
  const renderTooltipContent = (visible: boolean) => {
    return (
      <CSSTransition
        timeout={300}
        in={visible}
        unmountOnExit
        mountOnEnter
        appear
      >
        popover content
      </CSSTransition>
    );
  }

  const { triggerPosition, contentPosition } = positionNameConvert(position);

  return (
    <Popover
      triggerPosition={triggerPosition}
      contentPosition={contentPosition}
      containerSelector='body'
    >
      <Popover.Trigger>popover trigger</Popover.Trigger>
      <Popover.Content>{renderTooltipContent}</Popover.Content>
    </Popover>
  )
}

```

- 在 `catui` 中，定义了 `12` 种 `content` 相对于 `trigger` 的位置（position），为：`top, topLeft, topRight, right, rightTop, rightBottom, bottom, bottomLeft, bottomRight, left, leftTop, leftBottom`。可以通过使用 `positionNameCover(position)` 获取 `Popover` 组件所需要的 `triggerPosition` 和 `contentPosition` 属性（具体使用可参考 `Tooltip` 组件源码）



## Popover

- 用于组合 `Popover.Trigger` 和 `Popover.Content` 组件

|      属性       |                   类型                   |        默认值        |           描述            | 是否必选 |
| :-------------: | :--------------------------------------: | :------------------: | :-----------------------: | :------: |
|    selector     |                 `string`                 |        `body`        | 弹层所在容器的 css 选择器 |    -     |
|     visible     |                `boolean`                 |          -           |       弹层是否可见        |    -     |
|      mode       |                `ModeType`                |       `click`        |         触发类型          |    -     |
| triggerPosition | `[HorizontalPosition, VerticalPosition]` | `['left', 'bottom']` |       trigger 方位        |    是    |
| contentPosition | `[HorizontalPosition, VerticalPosition]` |  `['left', 'top']`   |       content 方位        |    是    |
|     offsetX     |                 `number`                 |         `0`          |    水平方向上的偏移量     |    -     |
|     offsetY     |                 `number`                 |         `0`          |    垂直方向上的偏移量     |    -     |
|    onChange     |       `(visible: boolean) => void`       |          -           |   visible 变化时的回调    |    -     |

```typescript
export type ModeType = Array<'click' | 'hover'> | 'click' | 'hover';

export type HorizontalPosition = 'left' | 'center' | 'right';

export type VerticalPosition = 'top' | 'center' | 'bottom';
```

## Popover.Trigger

- 触发弹出层的容器


|   属性   |         类型         | 默认值 |       描述       | 是否必选 |
| :------: | :------------------: | :----: | :--------------: | :------: |
| children | `React.ReactElement` |   -    | 触发弹出层的容器 |    是    |

## Popover.Content

- 弹出层

|   属性   |                  类型                   | 默认值 |                           描述                           | 是否必选 |
| :------: | :-------------------------------------: | :----: | :------------------------------------------------------: | :------: |
| children | `(visible: boolean) => React.ReactNode` |   -    | 返回弹出层的回调（参数 visible 可以用来显示/隐藏弹出层） |    是    |

- 可以结合 `CSSTransition` 实现显示/隐藏的动画

import UAParser from 'ua-parser-js';

export type ModeType = Array<'click' | 'hover'> | 'click' | 'hover';

export type HorizontalPosition = 'left' | 'center' | 'right';

export type VerticalPosition = 'top' | 'center' | 'bottom';

export type Position = [HorizontalPosition, VerticalPosition];

/**
 * 获取 mode 数组
 *
 * 'click' | ['click'] => ['click']
 * @param mode mode 'click' or ['click']
 *
 * @returns mode 数组
 */
export const getModeArray = (mode: ModeType) => {
  let modeArray: string[] = [];
  if (typeof mode === 'string') {
    modeArray.push(mode);
  } else if (Array.isArray(mode)) {
    modeArray = modeArray.concat(mode);
  }

  return modeArray;
};

/**
 * 获取 trigger 事件对象
 * @param mode trigger 模式
 * @param open 打开的回调
 * @param close 关闭的回调
 */
export const getTriggerEvents = (
  mode: ModeType,
  open: (e: React.MouseEvent) => void,
  close: (e: React.MouseEvent) => void
) => {
  const modeArray = getModeArray(mode);
  let triggerEvents: {
    onClick?: (e: React.MouseEvent) => void;
    onMouseEnter?: (e: React.MouseEvent) => void;
    onMouseLeave?: (e: React.MouseEvent) => void;
  } = {};
  modeArray.forEach(item => {
    switch (item) {
      case 'click': {
        triggerEvents.onClick = open;
        break;
      }
      case 'hover': {
        triggerEvents.onMouseEnter = open;
        triggerEvents.onMouseLeave = close;
        break;
      }
      default: {
        triggerEvents.onClick = open;
        break;
      }
    }
  });
  return triggerEvents;
};

export interface RectObj {
  width: number;
  height: number;
  left: number;
  top: number;
}

const parser = new UAParser();
const bName = parser.getBrowser().name;

/**
 * 获取弹层的位置样式
 * @param triggerDOM trigger dom
 * @param contentDOM content dom
 * @param triggerPosition trigger position
 * @param contentPosition content position
 * @param offsetX x 轴方向上的偏移量
 * @param offsetY y 轴方向上的偏移量
 * @param containerSelector 容器 css 选择器
 */
export const getPosition = (
  triggerDOM: HTMLElement,
  contentDOM: HTMLElement,
  triggerPosition: Position,
  contentPosition: Position,
  offsetX: number,
  offsetY: number,
  containerSelector: string
): { position: 'absolute'; left: number; top: number } => {
  let containerDOM: HTMLElement;
  if (containerSelector === 'body') {
    containerDOM = document.documentElement;
    if (bName === 'Safari') {
      containerDOM = document.body;
    }
  } else {
    containerDOM = document.querySelector(containerSelector);
  }

  const containerRect = containerDOM.getBoundingClientRect();
  const triggerRect = triggerDOM.getBoundingClientRect();
  const contentRect = contentDOM.getBoundingClientRect();

  const triggerObj: RectObj = {
    width: triggerRect.width,
    height: triggerRect.height,
    left: triggerRect.left,
    top: triggerRect.top
  };

  const contentSize: {
    [prop: string]: number;
  } = {
    width: contentRect.width,
    height: contentRect.height
  };

  let left: number = 0,
    top: number = 0,
    position = 'absolute' as 'absolute';

  let baseTop: number = triggerObj.top + containerDOM.scrollTop;
  let baseLeft: number = triggerObj.left + containerDOM.scrollLeft;

  if (containerSelector !== 'body') {
    baseTop -= containerRect.top;
    baseLeft -= containerRect.left;
  }

  // trigger horizontal
  switch (triggerPosition[0]) {
    case 'left': {
      left = 0;
      break;
    }
    case 'center': {
      left = triggerObj.width / 2;
      break;
    }
    case 'right': {
      left = triggerObj.width;
      break;
    }
    default: {
      left = 0;
    }
  }

  // trigger vertical
  switch (triggerPosition[1]) {
    case 'top': {
      top = 0;
      break;
    }
    case 'center': {
      top = triggerObj.height / 2;
      break;
    }
    case 'bottom': {
      top = triggerObj.height;
      break;
    }
    default: {
      top = 0;
    }
  }

  // content horizontal
  switch (contentPosition[0]) {
    case 'left': {
      left += 0;
      break;
    }
    case 'center': {
      left -= contentSize.width / 2;
      break;
    }
    case 'right': {
      left -= contentSize.width;
      break;
    }
    default: {
      left += 0;
    }
  }

  // content vertical
  switch (contentPosition[1]) {
    case 'top': {
      top += 0;
      break;
    }
    case 'center': {
      top -= contentSize.height / 2;
      break;
    }
    case 'bottom': {
      top -= contentSize.height;
      break;
    }
    default: {
      top += 0;
    }
  }

  top += baseTop + offsetY;
  left += baseLeft + offsetX;

  return { position, left, top };
};

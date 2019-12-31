import UAParser from 'ua-parser-js';
import { ModeType, PositionType, PositionNameType } from './interface';
import memoizeOne from 'memoize-one';

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
  triggerPosition: PositionType,
  contentPosition: PositionType,
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
    containerDOM = document.querySelector(containerSelector) as HTMLElement;
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

/**
 * 位置名称转换
 * @param positionName 位置
 */
export const positionNameConvert = memoizeOne(
  (
    positionName: PositionNameType
  ): { triggerPosition: PositionType; contentPosition: PositionType } => {
    let triggerPosition: PositionType, contentPosition: PositionType;

    switch (positionName) {
      case 'top': {
        triggerPosition = ['center', 'top'];
        contentPosition = ['center', 'bottom'];
        break;
      }
      case 'topLeft': {
        triggerPosition = ['left', 'top'];
        contentPosition = ['left', 'bottom'];
        break;
      }
      case 'topRight': {
        triggerPosition = ['right', 'top'];
        contentPosition = ['right', 'bottom'];
        break;
      }
      case 'right': {
        triggerPosition = ['right', 'center'];
        contentPosition = ['left', 'center'];
        break;
      }
      case 'rightTop': {
        triggerPosition = ['right', 'top'];
        contentPosition = ['left', 'top'];
        break;
      }
      case 'rightBottom': {
        triggerPosition = ['right', 'bottom'];
        contentPosition = ['left', 'bottom'];
        break;
      }
      case 'bottom': {
        triggerPosition = ['center', 'bottom'];
        contentPosition = ['center', 'top'];
        break;
      }
      case 'bottomLeft': {
        triggerPosition = ['left', 'bottom'];
        contentPosition = ['left', 'top'];
        break;
      }
      case 'bottomRight': {
        triggerPosition = ['right', 'bottom'];
        contentPosition = ['right', 'top'];
        break;
      }
      case 'left': {
        triggerPosition = ['left', 'center'];
        contentPosition = ['right', 'center'];
        break;
      }
      case 'leftTop': {
        triggerPosition = ['left', 'top'];
        contentPosition = ['right', 'top'];
        break;
      }
      case 'leftBottom': {
        triggerPosition = ['left', 'bottom'];
        contentPosition = ['right', 'bottom'];
        break;
      }
      default: {
        triggerPosition = ['center', 'top'];
        contentPosition = ['center', 'bottom'];
      }
    }

    return { triggerPosition, contentPosition };
  }
);

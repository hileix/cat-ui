export type ModeType = Array<'click' | 'hover'> | 'click' | 'hover';

export type HorizontalPosition = 'left' | 'center' | 'right';

export type VerticalPosition = 'top' | 'center' | 'bottom';

export type Position = [HorizontalPosition, VerticalPosition];

export const getModeArray = (mode: ModeType) => {
  let modeArray: string[] = [];
  if (typeof mode === 'string') {
    modeArray.push(mode);
  } else if (Array.isArray(mode)) {
    modeArray = modeArray.concat(mode);
  }

  return modeArray;
};

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

export const getPosition = (
  triggerDOM: HTMLElement,
  contentDOM: HTMLElement,
  triggerPosition: Position,
  contentPosition: Position,
  offsetX: number,
  offsetY: number,
  containerSelector: string
): { position: string; left: number; top: number } => {
  const containerDOM = document.querySelector(containerSelector);
  const containerRect = containerDOM.getBoundingClientRect();
  const triggerRect = triggerDOM.getBoundingClientRect();
  const contentRect = contentDOM.getBoundingClientRect();

  const triggerObj: RectObj = {
    width: triggerRect.width,
    height: triggerRect.height,
    left: triggerRect.left,
    top: triggerRect.top
  };

  const contentObj: RectObj = {
    width: contentRect.width,
    height: contentRect.height,
    left: contentRect.left,
    top: contentRect.top
  };

  const containerObj: RectObj = {
    width: containerRect.width,
    height: containerRect.height,
    left: containerRect.left,
    top: containerRect.top
  };

  if (containerSelector !== 'body') {
    triggerObj.left -= containerObj.left;
    triggerObj.top -= containerObj.top;

    contentObj.left -= containerRect.left;
    contentObj.top -= containerRect.top;
  }

  let left: number,
    top: number,
    position = 'absolute';

  // trigger horizontal
  switch (triggerPosition[0]) {
    case 'left': {
      left = 0;
      break;
    }
    case 'center': {
      left = triggerRect.width / 2;
      break;
    }
    case 'right': {
      left = triggerRect.width;
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
      top = triggerRect.height / 2;
      break;
    }
    case 'bottom': {
      top = triggerRect.height;
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
      left += (triggerRect.width - contentRect.width) / 2;
      break;
    }
    case 'right': {
      left -= contentRect.width;
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
      top -= contentRect.height / 2;
      break;
    }
    case 'bottom': {
      top -= contentRect.height;
      break;
    }
    default: {
      top += 0;
    }
  }

  left += triggerRect.left + offsetX;
  top += triggerRect.top + offsetY;

  return { position, left, top };
};

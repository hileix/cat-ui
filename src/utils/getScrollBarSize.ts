// 缓存的 scroll bar size
let cachedWidth: number;

/**
 * 获取 scroll bar 的宽度
 */
const getScrollBarWidth = () => {
  if (cachedWidth === undefined) {
    // Creating invisible container
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll'; // forcing scrollbar to appear
    outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
    document.body.appendChild(outer);

    // Creating inner element and placing it in the container
    const inner = document.createElement('div');
    outer.appendChild(inner);

    // Calculating difference between container's full width and the child width
    cachedWidth = (outer.offsetWidth - inner.offsetWidth);

    // Removing temporary elements from the DOM
    outer.parentNode.removeChild(outer);

    return cachedWidth;
  }
  return cachedWidth;
}

export default getScrollBarWidth;

// 参考：https://stackoverflow.com/questions/13382516/getting-scroll-bar-width-using-javascript
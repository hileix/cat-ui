import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Component } from 'react';
import classNames from 'classnames';
import { StyledDrawer } from './styled';
import * as PropTypes from 'prop-types';
import getScrollBarSize from '../../utils/getScrollBarSize';
import { canUseDOM } from '../../utils/index';

export type PlacementType = 'right'

export interface DrawerProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** 是否显示 */
  visible?: boolean;
  /** 获取抽屉所在的 dom 节点 */
  getContainer?: () => HTMLElement;
  /** children */
  children?: React.ReactChildren | string;
  /** 类名前缀 */
  prefix?: string;
  /** 是否显示遮罩 */
  mask?: boolean;
  /** 关闭的回调 */
  onClose?: () => void;
  /** 抽屉所在的位置 */
  placement?: PlacementType;
  /** 关闭时是否销毁 Drawer 里的子元素 */
  destroyOnClose?: boolean;
}


/**
 * 抽屉组件
 */
// const Drawer = ({
//   prefix,
//   visible,
//   getContainer,
//   children,
//   mask,
//   onClose,
//   placement,
//   style,
//   destroyOnClose
// }: DrawerProps) => {
//   // 服务端渲染返回 null
//   if (!canUseDOM()) {
//     return null
//   }
//   const [parentDOM, setParentDOM] = useState(null);
//   const [originStyles, setOriginStyles] = useState(null);

//   // 首次 render
//   useEffect(() => {
//     console.log(1);
//     const parentDOM = getContainer();
//     setParentDOM(parentDOM);
//     const styles = getComputedStyle(parentDOM, null);
//     console.log({ position: styles.position, overflow: styles.overflow });
//     setOriginStyles({ position: styles.position, overflow: styles.overflow, overflowY: styles.overflowY });
//   }, [])

//   // visible 变化时
//   useEffect(() => {
//     console.log(2);
//     if (originStyles) {
//       // 显示，则加上样式
//       if (visible) {
//         console.log({ originStyles });
//         if (originStyles.position === 'static') {
//           parentDOM.style.position = 'relative';
//         }
//         if (originStyles.overflow !== 'hidden') {
//           // 是否有 scroll bar
//           if (['auto', 'scroll'].includes(originStyles.overflowY)) {
//             parentDOM.style.overflow = 'hidden';
//             parentDOM.style.width = `${parentDOM.offsetWidth - getScrollBarSize()}px`;
//           }
//         }
//       } else {
//         // 隐藏，则还原样式
//         parentDOM.style.overflow = originStyles.overflow;
//       }
//     }
//   }, [visible])


//   if (!parentDOM) {
//     return null;
//   }

//   const classes = classNames(`${prefix}-drawer`, {
//     [`${prefix}-drawer--hide`]: !visible
//   });

//   const handleClose = () => {
//     onClose && onClose()
//   }

//   // parentDOM.style.overflow = '';
//   // parentDOM.style.width = '';
//   // if (visible) {
//   //   // 修复父节点滚动条在 drawer 出现时不会消失的 bug
//   //   parentDOM.style.overflow = 'hidden';
//   //   // 修复滚动条由有到无时视图抖动的 bug
//   //   parentDOM.style.width = `${parentDOM.offsetWidth - getScrollBarSize()}px`;
//   // }


//   let contentChildren: React.ReactChildren | string;
//   if (destroyOnClose && !visible) {
//     contentChildren = null;
//   } else {
//     contentChildren = children;
//   }

//   const content = (
//     <StyledDrawer className={classes} style={style}>
//       {mask && (
//         <div
//           className={classNames(`${prefix}-drawer__mask`, {
//             [`${prefix}-drawer__mask--show`]: mask && visible,
//             [`${prefix}-drawer__mask--hide`]: mask && !visible
//           })}
//           onClick={handleClose}
//         />
//       )}

//       <div
//         className={classNames(`${prefix}-drawer__content`, {
//           [`${prefix}-drawer__content--${placement}`]: true,
//           [`${prefix}-drawer__content--hide`]: !visible
//         })}
//       >
//         {contentChildren}
//       </div>
//     </StyledDrawer>
//   )

//   return ReactDOM.createPortal(content, parentDOM)
// }

// Drawer.propTypes = {
//   visible: PropTypes.bool.isRequired,
//   getContainer: PropTypes.func,
//   onClose: PropTypes.func,
//   destroyOnClose: PropTypes.bool,
// }

// Drawer.defaultProps = {
//   getContainer: () => document.body,
//   prefix: 'hmly',
//   mask: true,
//   placement: 'right',
//   destroyOnClose: false
// }


export interface DrawerStateInterface {
  parentDOM: HTMLElement | null;
  originStyles: Object | null;
}


class Drawer extends Component<DrawerProps, DrawerStateInterface> {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    getContainer: PropTypes.func,
    onClose: PropTypes.func,
    destroyOnClose: PropTypes.bool,
  }

  static defaultProps = {
    getContainer: () => document.body,
    prefix: 'hmly',
    mask: true,
    placement: 'right',
    destroyOnClose: false
  }

  readonly state: DrawerStateInterface = {
    parentDOM: null,
    originStyles: null
  }

  handleClose = () => {
    const { onClose } = this.props;
    onClose && onClose();
  }

  componentDidMount = () => {
    const { getContainer } = this.props
    const parentDOM = getContainer();
    const styles = getComputedStyle(parentDOM, null);
    this.setState({
      parentDOM,
      originStyles: { position: styles.position, overflow: styles.overflow, overflowY: styles.overflowY }
    })
  }

  render() {
    if (!canUseDOM()) {
      return null
    }

    const { parentDOM } = this.state
    const { prefix, visible, destroyOnClose, children, style, mask, placement } = this.props

    if (!parentDOM) {
      return null;
    }

    const classes = classNames(`${prefix}-drawer`, {
      [`${prefix}-drawer--hide`]: !visible
    });

    let contentChildren: React.ReactChildren | string;
    if (destroyOnClose && !visible) {
      contentChildren = null;
    } else {
      contentChildren = children;
    }

    const content = (
      <StyledDrawer className={classes} style={style}>
        {mask && (
          <div
            className={classNames(`${prefix}-drawer__mask`, {
              [`${prefix}-drawer__mask--show`]: mask && visible,
              [`${prefix}-drawer__mask--hide`]: mask && !visible
            })}
            onClick={this.handleClose}
          />
        )}

        <div
          className={classNames(`${prefix}-drawer__content`, {
            [`${prefix}-drawer__content--${placement}`]: true,
            [`${prefix}-drawer__content--hide`]: !visible
          })}
        >
          {contentChildren}
        </div>
      </StyledDrawer>
    )

    return ReactDOM.createPortal(content, parentDOM)
  }
}

export default Drawer

import * as React from 'react';
import classNames from 'classnames';
import PurePortal from '../PurePortal';
import Icon from '../Icon';
import * as PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

export type MessageType = 'success' | 'warn' | 'error';

export interface ContentProps {
  /**
   * identifie
   */
  id: string;
  /**
   * message 类型
   */
  type?: MessageType;
  /**
   * message 内容
   */
  content?: React.ReactNode;
  /**
   * message ui 渲染所在的容器 css 选择器
   */
  selector?: string;
  /**
   * 持续时间，单位：ms
   */
  duration?: number;
  /**
   * 关闭后的回调
   */
  onClose?: (id: string | number) => void;
}

export interface ContentState {
  visible: boolean;
}

const IconTypeMap = {
  success: 'success',
  warn: 'warning',
  error: 'error'
};

const TIMEOUT = 300; // ms

class Content extends React.Component<ContentProps, ContentState> {
  static propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    type: PropTypes.oneOf(['success', 'warn', 'error']).isRequired,
    content: PropTypes.node,
    selector: PropTypes.string,
    duration: PropTypes.number,
    onClose: PropTypes.func
  };
  static defaultProps = {
    selector: 'body',
    duration: 3
  };

  state = {
    visible: true
  };

  timer: ReturnType<typeof setTimeout>;

  componentDidMount = () => {
    const { duration, onClose, id } = this.props;
    this.timer = setTimeout(() => {
      this.setState({ visible: false });
      onClose(id);
    }, duration * 1000);
  };

  componentWillUnmount = () => {
    clearTimeout(this.timer);
  };

  render() {
    const { content, type, selector } = this.props;
    const { visible } = this.state;
    const prefix = 'cat-message';
    const classes = classNames(prefix, {
      [`${prefix}--success`]: type === 'success',
      [`${prefix}--warn`]: type === 'warn',
      [`${prefix}--error`]: type === 'error'
    });

    return (
      <PurePortal selector={selector}>
        <CSSTransition
          timeout={TIMEOUT}
          in={visible}
          classNames={prefix}
          unmountOnExit
          mountOnEnter
          appear
        >
          <>
            <div className={classes}>
              <Icon type={IconTypeMap[type]} className={`${prefix}__icon`} />
              {content && <span className={`${prefix}__text`}>{content}</span>}
            </div>
            <br />
          </>
        </CSSTransition>
      </PurePortal>
    );
  }
}

export default Content;

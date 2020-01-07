import React from 'react';
import classNames from 'classnames';
import Icon from '../Icon';
import PurePortal from '../PurePortal';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import { Types } from './interface';

const TIMEOUT = 300; // ms

export interface ContentProps {
  id?: string;
  visible?: boolean;
  prefix?: string;
  className?: string;
  style?: React.CSSProperties;
  title?: React.ReactNode;
  content?: React.ReactNode;
  children?: React.ReactNode;
  type?: Types;
  selector?: string;
  onClose?: (id?: string) => void;
}

export interface ContentState {
  visible: boolean;
}

class Content extends React.Component<ContentProps, ContentState> {
  static displayName = 'Notification';

  static propTypes = {
    id: PropTypes.string,
    visible: PropTypes.bool,
    prefix: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.node,
    content: PropTypes.node,
    type: PropTypes.oneOf(['default', 'success', 'warn', 'error']),
    selector: PropTypes.string,
    onClose: PropTypes.func,
  }

  static defaultProps = {
    prefix: 'cat',
    selector: '.cat-notification-container'
  };

  static getDerivedStateFromProps(props: ContentProps) {
    if ('visible' in props) {
      return {
        visible: props.visible
      }
    }
    return null;
  }

  state = {
    visible: true,
  };

  handleClose = () => {
    this.setState({ visible: false });
    const { onClose, id } = this.props;
    onClose && onClose(id);
  };

  render() {
    const {
      prefix,
      title,
      content,
      className,
      type,
      style,
      selector,
      children,
    } = this.props;
    const classPrefix = `${prefix}-notification`;
    const { visible } = this.state;

    const notificationContent = children || content;

    return (
      <PurePortal selector={selector}>
        <CSSTransition
          timeout={TIMEOUT}
          in={visible}
          classNames={classPrefix}
          unmountOnExit
          mountOnEnter
          appear
        >
          <>
            <div
              className={classNames(
                classPrefix,
                `${classPrefix}--${type}`,
                className
              )}
              style={style}
            >
              {title && <p className={`${classPrefix}__title`}>{title}</p>}
              {notificationContent && <p className={`${classPrefix}__content`}>{notificationContent}</p>}
              <Icon
                type='close'
                className={`${classPrefix}__close`}
                onClick={this.handleClose}
              />
            </div>
            <br />
          </>
        </CSSTransition>
      </PurePortal>
    );
  }
}

export default Content;

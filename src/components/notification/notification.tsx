import * as React from 'react';
import classNames from 'classnames';
import Icon from '../Icon';
import { CSSTransition } from 'react-transition-group';
import PurePortal from '../PurePortal';
import Notice from './Notice';
import * as PropTypes from 'prop-types';

export type Types = 'success' | 'warn' | 'error';

export interface NotificationConfig {
  title?: React.ReactNode;
  content?: React.ReactNode;
}

const TIMEOUT = 300; // ms

export interface NotificationProps {
  id?: string;
  prefix?: string;
  className?: string;
  style?: React.CSSProperties;
  title?: React.ReactNode;
  content?: React.ReactNode;
  type?: Types;
  selector?: string;
  onClose?: (id: string) => void;
}

export interface NotificationInterface {
  open: (type: Types, config: NotificationConfig) => void;
  success: (config: NotificationConfig) => void;
  warn: (config: NotificationConfig) => void;
  error: (config: NotificationConfig) => void;
}

export interface NotificationState {
  visible: boolean;
}

class Notification extends React.Component<
  NotificationProps,
  NotificationState
> {
  static defaultProps = {
    prefix: 'cat'
  };

  state = {
    visible: true
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
      selector
    } = this.props;
    const classPrefix = `${prefix}-notification`;
    const { visible } = this.state;

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
          <div
            className={classNames(
              classPrefix,
              `${classPrefix}--${type}`,
              className
            )}
            style={style}
          >
            {title && <p className={`${classPrefix}__title`}>{title}</p>}
            {content && <p className={`${classPrefix}__content`}>{content}</p>}
            <Icon
              type='close'
              className={`${classPrefix}__close`}
              onClick={this.handleClose}
            />
          </div>
        </CSSTransition>
      </PurePortal>
    );
  }
}

let notificationInstance: any;
function getNotificationInstance() {
  if (notificationInstance) {
    return notificationInstance;
  }
  notificationInstance = new Notice({
    className: 'cat-notification-container',
    animateTime: 0.3
  });
  return notificationInstance;
}

function open(type: Types, config: NotificationConfig) {
  const notificationInstance = getNotificationInstance();
  const props = {
    type,
    title: config.title,
    content: config.content,
    onClose: notificationInstance.remove,
    selector: '.cat-notification-container'
  };
  notificationInstance.render(Notification, props);
}

const notification: NotificationInterface = {
  open,
  success(config: NotificationConfig) {
    this.open('success', config);
  },
  warn(config: NotificationConfig) {
    this.open('warn', config);
  },
  error(config: NotificationConfig) {
    this.open('error', config);
  }
};

export default notification;

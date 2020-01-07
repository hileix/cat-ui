import NotificationContainer from '../../utils/NotificationContainer';
import Content, { ContentProps } from './Content';
import { Types } from './interface';
import withCreateNotificationContainer from '../../hoc/withCreateNotificationContainer';


export interface NotificationConfig {
  /**
   * 标题
   */
  title?: React.ReactNode;
  /**
   * 内容
   */
  content?: React.ReactNode;
  /**
   * 关闭时的回调
   */
  onClose?: () => void;
}

export interface NotificationMethod {
  (config: NotificationConfig): void;
}

export interface NotificationInterface {
  [method: string]: Function;
  open: (type: Types, config: NotificationConfig) => void;
  default: NotificationMethod;
  success: NotificationMethod;
  warn: NotificationMethod;
  error: NotificationMethod;
  Notification: typeof Content;
}

let notificationInstance: NotificationContainer;
function getNotificationInstance() {
  if (notificationInstance) {
    return notificationInstance;
  }
  notificationInstance = new NotificationContainer({
    className: 'cat-notification-container',
    animateTime: 0.3
  });
  return notificationInstance;
}

function open(type: Types, config: NotificationConfig) {
  const notificationInstance = getNotificationInstance();

  function handleClose(id: string): void {
    config.onClose && config.onClose();
    notificationInstance.remove(id);
  }

  const props = {
    type,
    title: config.title,
    content: config.content,
    onClose: handleClose,
    selector: '.cat-notification-container'
  };
  notificationInstance.render(Content, props);
}

const Notification: typeof Content = withCreateNotificationContainer({
  className: 'cat-notification-container'
})(Content);

const notification: NotificationInterface = {
  open,
  default(config: NotificationConfig) {
    this.open('default', config)
  },
  success(config: NotificationConfig) {
    this.open('success', config);
  },
  warn(config: NotificationConfig) {
    this.open('warn', config);
  },
  error(config: NotificationConfig) {
    this.open('error', config);
  },
  Notification
};

export default notification;

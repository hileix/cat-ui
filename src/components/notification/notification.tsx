import NotificationContainer from '../../utils/NotificationContainer';
import Content from './Content';
import { Types } from './interface';


export interface NotificationConfig {
  title?: React.ReactNode;
  content?: React.ReactNode;
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
  const props = {
    type,
    title: config.title,
    content: config.content,
    onClose: notificationInstance.remove,
    selector: '.cat-notification-container'
  };
  notificationInstance.render(Content, props);
}

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
  }
};

export default notification;

import NotificationContainer from '@utils/NotificationContainer';
import Content from './Content';

export type Types = 'success' | 'warn' | 'error';

export interface MessageConfig {
  content: React.ReactNode;
  duration?: number;
  onClose?: () => void;
}

export type MethodType = (options: MessageConfig) => void;

export interface MessageInterface {
  open: (type: Types, config: MessageConfig) => void;
  success: MethodType;
  warn: MethodType;
  error: MethodType;
}

let notificationInstance: any;
function getInstance() {
  if (notificationInstance) {
    return notificationInstance;
  }
  notificationInstance = new NotificationContainer({
    className: 'cat-message-container',
    animateTime: 0.3
  });
  return notificationInstance;
}

function open(type: Types, config: MessageConfig) {
  const notificationInstance = getInstance();
  const props = {
    type,
    content: config.content,
    onClose: (id: string | number) => {
      notificationInstance.remove(id, config.onClose);
    },
    duration: config.duration,
    selector: '.cat-message-container'
  };
  notificationInstance.render(Content, props);
}

const message: MessageInterface = {
  open,
  success(options: MessageConfig) {
    this.open('success', options);
  },
  warn(options: MessageConfig) {
    this.open('warn', options);
  },
  error(options: MessageConfig) {
    this.open('error', options);
  }
};

export default message;

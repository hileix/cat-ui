import NotificationContainer from '../../utils/NotificationContainer';
import Content from './Content';

export type Types = 'success' | 'warn' | 'error';

export interface MessageConfig {
  content: React.ReactNode;
  duration?: number;
  onClose?: () => void;
}

export type MethodType = (options: MessageConfig | string) => void;

export interface MessageInterface {
  open: (type: Types, config: MessageConfig | string) => void;
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

function open(type: Types, config: MessageConfig | string) {
  const notificationInstance = getInstance();
  let _config: MessageConfig = {
    content: ''
  };
  if (typeof config === 'string') {
    _config.content = config;
  } else {
    _config = config;
  }

  const props = {
    type,
    content: _config.content,
    onClose: (id: string | number) => {
      notificationInstance.remove(id, _config.onClose);
    },
    duration: _config.duration,
    selector: '.cat-message-container'
  };
  notificationInstance.render(Content, props);
}

const message: MessageInterface = {
  open,
  success(options: MessageConfig | string) {
    this.open('success', options);
  },
  warn(options: MessageConfig | string) {
    this.open('warn', options);
  },
  error(options: MessageConfig | string) {
    this.open('error', options);
  }
};

export default message;

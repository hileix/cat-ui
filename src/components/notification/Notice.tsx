import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface NoticeOptions {
  /**
   * 容器类名
   */
  className: string;
  /**
   * 动画时间
   */
  animateTime: number;
}

class Notice {
  constructor(options: NoticeOptions) {
    this.options = options;
    const { className } = options;
    const container = document.querySelector(className);
    if (!container) {
      const div = document.createElement('div');
      div.className = className;
      document.body.appendChild(div);
    }
  }

  options: NoticeOptions;

  container: HTMLDivElement;
  index = 0;

  containerMaps: object = {};

  createContainerId = () => {
    return ++this.index;
  };

  remove = (id: string) => {
    const containerObj = this.containerMaps[id];
    if (!containerObj) {
      return;
    }
    const { container } = containerObj;
    setTimeout(() => {
      ReactDOM.unmountComponentAtNode(container);
      delete this.containerMaps[id];
    }, this.options.animateTime * 1000);
  };

  render(Component: any, props: any) {
    const div = document.createElement('div');

    const id = this.createContainerId();

    const cProps = {
      ...props,
      id
    };

    this.containerMaps[id] = { container: div };

    ReactDOM.render(<Component {...cProps} />, div);
  }
}

export default Notice;

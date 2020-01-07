import React from 'react';
import { argumentContainer } from './utils';

export interface Options {
  selector: string;
}

/**
 * 创建 notification 容器的高阶组件
 * @param WrappedComponent 
 */
const withCreateNotificationContainer = (
  options: Options
) => {
  return (WrappedComponent: any) => {
    class withCreateNotificationContainer extends React.Component<any, { didMount: boolean }> {
      state = {
        didMount: false
      }

      componentDidMount = () => {
        const container = document.querySelector(options.selector);
        if (!container) {
          const div = document.createElement('div');
          div.className = options.selector;
          document.body.appendChild(div);
        }
        this.setState({ didMount: true });
      }

      render() {
        if (!this.state.didMount) {
          return null;
        }
        return (
          <WrappedComponent {...this.props} />
        );
      }
    }
    return argumentContainer(
      withCreateNotificationContainer,
      WrappedComponent,
      'withCreateNotificationContainer'
    );
  }
};

export default withCreateNotificationContainer;

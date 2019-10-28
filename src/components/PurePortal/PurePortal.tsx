import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as PropTypes from 'prop-types';

export interface PurePortalProps {
  /**
   * children，即 ReactDOM.createPortal() 的第一个参数
   */
  children?: React.ReactNode;
  /**
   * 作为容器的 css 选择器
   */
  selector?: string;
}

/**
 * RaectDOM.createPortal() 的组件化形式
 */
class PurePortal extends React.Component<PurePortalProps, null> {
  static propTypes = {
    children: PropTypes.node,
    selector: PropTypes.string,
    render: PropTypes.func,
    onMount: PropTypes.func,
    onUnmount: PropTypes.func
  };
  static defaultProps = {
    selector: 'body'
  };

  private container: Element;

  componentDidMount = () => {
    this.getContainer();
  };

  componentWillUnmount = () => {
    this.container = null;
  };

  getContainer = (): void => {
    const { selector } = this.props;
    let container = document.querySelector(selector);
    if (!container) {
      container = document.body;
    }
    this.container = container;
    this.forceUpdate();
  };

  render() {
    if (!this.container) {
      return null;
    }

    return ReactDOM.createPortal(this.props.children, this.container);
  }
}

export default PurePortal;

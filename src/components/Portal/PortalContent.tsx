import * as React from 'react';
import { Component } from 'react';
import classNames from 'classnames';

export interface ProtalProps {
  /** 弹层是否可见 */
  visible?: boolean;
  /** children 被 mount 之后的回调函数 */
  onMount?: () => {};
  /** children 被 unmount 之后的回调函数 */
  onUnmount?: () => {};
}

class PortalContent extends Component<ProtalProps, any> {
  static defaultProps = {
    selector: 'body'
  };

  componentDidMount() {
    const { onMount } = this.props;
    onMount && onMount();
  }

  componentWillUnmount() {
    const { onUnmount } = this.props;
    onUnmount && onUnmount();
  }

  render() {
    const { visible } = this.props;
    const prefix = 'hmly-portal__content';

    return (
      <div
        className={classNames(prefix, {
          [`${prefix}--hide`]: !visible
        })}
      >
        {this.props.children}
      </div>
    );
  }
}

export default PortalContent;

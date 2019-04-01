import * as React from 'react'
import { Component } from 'react'

export interface ProtalProps {
  /** children 被 mount 之后的回调函数 */
  onMount?: () => {};
  /** children 被 unmount 之后的回调函数 */
  onUnmount?: () => {};
}

class PortalContent extends Component<ProtalProps, any> {
  static defaultProps = {
    selector: 'body'
  }

  componentDidMount() {
    const { onMount } = this.props;

    onMount && onMount();
  }

  componentWillUnmount() {
    const { onUnmount } = this.props;

    onUnmount && onUnmount();
  }


  render() {

    return (<React.Fragment>
      {this.props.children}
    </React.Fragment>)
  }
}

export default PortalContent

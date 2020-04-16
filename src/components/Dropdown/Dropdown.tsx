import * as React from 'react'
import { Component } from 'react'
import classNames from 'classnames'
import Popover from '../../components/Popover';
import { positionNameConvert } from '../../components/Popover/utils';

export interface DropdownProps {
  mode: string;
  /** 类名 */
  overlayClassName?: string;
  /** 样式 */
  style?: object;
  overlay: React.ReactElement | JSX.Element;
  children: any;
  /** default bottomLeft */
  position?: string | 'bottomLeft';
  onVisibleChange?: Function;
  selector: string;
  visible?: boolean;
}

/**
 * Dropdown
 */
class Dropdown extends Component<DropdownProps, any> {

  constructor(props: any){
    super(props);
    this.state = {
      visible: props.visible
    }
    this.onChange = this.onChange.bind(this);
  }

  static getDerivedStateFromProps(nextProps: any, prevState: any){
    if (nextProps.visible !== void 0 && nextProps.visible !== prevState.visible) {
      return {
        visible: nextProps.visible
      }
  }
  // 否则，对于state不进行任何操作
  return null;
  }

  onChange (e: any){
    if(this.props.onVisibleChange) {
      this.props.onVisibleChange(e);
    } else {
      this.setState({
        visible: !this.state.visible
      })
    }
      
    
  }

  render() {
    const { children, overlay, position = 'bottomLeft', ...restProps } = this.props
    return (
      <Popover
        {...positionNameConvert(position)}  
        {...restProps}
        visible={this.state.visible}
        onChange = {this.onChange}
      >
        <Popover.Trigger>
          {children }
        </Popover.Trigger>
        <Popover.Content>
          {(visible) => {
            console.log('visiblevisiblevisiblevisible: ', visible);
             let overlayClass = classNames('cat-dropdown-wrap', {
              'cat-dropdown-overlay-hide': !visible
            });
            return (
            <div className={overlayClass}>
              {React.cloneElement(overlay,{onChange: this.onChange})}
            </div>)

          }
          }
        </Popover.Content>
      </Popover>
    )
  }
}

export default Dropdown

import * as React from 'react'
import { Component } from 'react'
import classNames from 'classnames'
import Popover from '@components/Popover';
import { PopoverProps } from '@components/Popover/Popover';
import { positionNameConvert } from '@components/Popover/utils';

export interface DropdownProps {
  mode: string;
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  overlay: React.ReactElement | JSX.Element;
  children: any;
  /** default bottomLeft */
  position?: string | 'bottomLeft';
  onChange?: Function;
  selector: string;
}

/**
 * Dropdown
 */
class Dropdown extends Component<DropdownProps, any> {

  constructor(props: any){
    super(props);
    this.state = {
      show: false
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange (e: any){
    this.setState({
      show: !this.state.show
    })
    this.props.onChange && this.props.onChange(e);
  }

  render() {
    const { children, overlay, position = 'bottomLeft', ...restProps } = this.props
    let overlayClass = classNames('cat-dropdown-wrap', {
      'cat-dropdown-overlay-hide': !this.state.show
    });
    return (
      <Popover
        {...positionNameConvert(position)}  
        {...restProps}
        onChange = {this.onChange}
      >
        <Popover.Trigger>
          {children }
        </Popover.Trigger>
        <Popover.Content>
          {() => (
            <div className={overlayClass}>
              {overlay}
            </div>
            
          )}
        </Popover.Content>
      </Popover>
    )
  }
}

export default Dropdown

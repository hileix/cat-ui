import * as React from 'react';
import { Component } from 'react';

/**
 * Column properties.
 */
export interface IColumnProps {
  /** prop1 description */
  prop1?: string;
  /** prop2 description */
  prop2: number;
  /** prop4 description */
  prop3: 'option1' | 'option2' | 'option3';
}

/**
 * 按钮
 */
class Button extends Component<IColumnProps, {}> {
  render() {
    return <div>Button</div>;
  }
}

export default Button

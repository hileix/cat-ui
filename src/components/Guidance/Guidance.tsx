import * as React from 'react';
import { Component } from 'react';
import * as PropTypes from 'prop-types';
import ElementSelect from '../ElementSelect';
import Step from './Step';

export interface GuidanceProps {
  /**
   * 前缀
   */
  prefix?: string;
  /**
   * 类名
   */
  className?: string;
  /**
   * 样式
   */
  style?: object;
  /**
   * 被激活的 step id
   */
  activeId?: number | string;
  /**
   * 是否显示
   */
  visible?: boolean;
  /**
   * step 改变时的回调
   */
  onChange?: (currentId: number | string) => void;
  /**
   * children
   */
  children?: React.ReactNode;
  /**
   * 下一步按钮文案
   */
  nextText?: string;
  /**
   * 选中的元素的类名
   */
  selectedElementClassName?: string;
  /**
   * 选中的元素的样式
   */
  selectedElementStyle?: object;
}

const DISTANCE_TOP = 12;

/**
 * Guidance 引导
 */
class Guidance extends Component<GuidanceProps, null> {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    activeId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    visible: PropTypes.bool,
    onChange: PropTypes.func,
    nextText: PropTypes.string,
    selectedElementStyle: PropTypes.object,
    selectedElementClassName: PropTypes.string
  };

  static defaultProps = {
    prefix: 'cat',
    nextText: 'Next',
    visible: false
  };

  private activeId: number | string; // 激活步骤的 id

  handleNextClick = () => {
    const { onChange } = this.props;
    onChange && onChange(this.activeId);
  };

  renderExtraContent = (sizeAndPos, content: React.ReactNode) => {
    const style: React.CSSProperties = {
      top: sizeAndPos.top + sizeAndPos.height + DISTANCE_TOP,
      right: sizeAndPos.right
    };
    const { prefix, nextText } = this.props;
    const classPrefix = `${prefix}-guidance__extra-content`;
    return (
      <div className={classPrefix} style={style}>
        <div className={`${classPrefix}-text`}>{content}</div>
        <div className={`${classPrefix}-footer`}>
          <button onClick={this.handleNextClick}>{nextText}</button>
        </div>
      </div>
    );
  };

  getActiveGuidaneStep = (): {
    content: React.ReactNode;
    selector: string;
  } => {
    const { children, activeId } = this.props;
    let ret = { content: null, selector: '' };
    React.Children.forEach(children, (child: React.ReactElement) => {
      const isElemet = React.isValidElement(child);
      if (!isElemet || activeId !== child.props.id) {
        return;
      }
      this.activeId = child.props.id;
      ret = {
        content: child.props.children,
        selector: child.props.selector
      };
    });
    return ret;
  };

  render() {
    const {
      prefix,
      visible,
      className,
      selectedElementStyle,
      selectedElementClassName,
      ...restProps
    } = this.props;
    if (!visible) {
      return null;
    }

    const step = this.getActiveGuidaneStep();

    if (!step.content || !step.selector) {
      return null;
    }

    return (
      <ElementSelect
        selector={step.selector}
        visible={visible}
        selectedElementStyle={selectedElementStyle}
        selectedElementClassName={selectedElementClassName}
        extraContent={sizeAndPos =>
          this.renderExtraContent(sizeAndPos, step.content)
        }
      />
    );
  }
}

export default Guidance;

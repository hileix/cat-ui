import * as React from 'react';
import * as PropTypes from 'prop-types';
import throttle from "lodash/throttle";
import classNames from 'classnames';

interface ScrollProps {
  targetNode?: string;
  offset?: number;
  prefix?: string;
  className?: string;
  onPageIndexChange?: (index: number) => void;
  style?: object;
  children: React.ReactNode[];
  wait?: number;
}

type PageHeight = {
  height: number,
  index: number
}

export default class Scroll extends React.Component<ScrollProps, {}> {
  static propTypes = {
    targetNode: PropTypes.string,
    offset: PropTypes.number,
    prefix: PropTypes.string,
    className: PropTypes.string,
    onPageIndexChange: PropTypes.func,
    style: PropTypes.object,
    children: PropTypes.array.isRequired,
    wait: PropTypes.number,
  };


  static defaultProps = {
    prefix: 'cat-scroll',
    targetNode: "target-dom-point",
    offset: 0,
    wait: 250
  };

  private targetNode: string;
  private pageHeights: PageHeight[];

  constructor(props) {
    super(props);
    this.targetNode = this.props.targetNode;
    this.scrollHandler = this.scrollHandler.bind(this);
    this.initPageHeight = this.initPageHeight.bind(this);
  }

  componentDidMount() {
    this.initPageHeight();
    window.addEventListener("scroll", this.scrollHandler, {
      passive: true
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollHandler);
  }

  initPageHeight() {
    const targetNodes = document.querySelectorAll(`.${this.targetNode}`);
    const targetHeights = Array.from(targetNodes).map(node => {
      return node.getBoundingClientRect().height;
    });

    let sum = 0;
    this.pageHeights = targetHeights.map((height, index) => {
      sum += height;
      return {
        height: sum,
        index: index + 1
      };
    });
  }

  scrollHandler = throttle(() => {
    const { offset, onPageIndexChange } = this.props;

    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    let pageIndex = 0;

    this.pageHeights.forEach(page => {
      if (scrollTop + offset > page.height) {
        pageIndex = page.index;
      }
    });
    onPageIndexChange && onPageIndexChange(pageIndex);
  }, this.props.wait);

  render() {
    const {
      prefix,
      className,
      style,
    } = this.props;

    const classes = classNames(prefix, className);

    const children = this.props.children.map((child, index) => {
      return (
        <li className={this.targetNode} key={index}>
          {child}
        </li>
      );
    });
    return <ul className={classes} prefix={prefix} style={style}>{children}</ul>;
  }
}

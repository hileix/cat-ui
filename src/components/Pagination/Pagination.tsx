import React from 'react';
import { PureComponent } from 'react';
import classNames from 'classnames';
import memoizeOne from 'memoize-one';
import isNumber from 'lodash/isNumber';
import PageItem from './PageItem';
import Icon from '../Icon';
import PropTypes from 'prop-types';

export interface PaginationProps {
  /**
   * 类名前缀
   */
  prefix: string;
  /** 
   * 类名
   */
  className?: string;
  /** 
   * 样式
   */
  style?: React.CSSProperties;
  /** 
   * 当前页数
   */
  current: number;
  /** 
   * 数据总数
   */
  total: number;
  /** 
   * 每页条数
   */
  pageSize: number;
  /** 
   * 页码改变的回调。参数是改变后的页码及每页条数
   */
  onChange?: (page: number, pageSize: number) => void;
}

/**
 * 分页
 */
class Pagination extends PureComponent<PaginationProps> {
  static displayName = 'Pagination';

  static propTypes = {
    prefix: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    current: PropTypes.number,
    total: PropTypes.number,
    pageSize: PropTypes.number,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    prefix: 'cat',
    current: 1,
    pageSize: 10,
  };

  handlePageItemClick = (value: number) => {
    const { onChange, pageSize } = this.props;
    onChange && onChange(value, pageSize);
  };

  onPrevClick = () => {
    const { onChange, pageSize, current } = this.props;
    // 不是第一个
    if (current > 1) {
      onChange && onChange(current - 1, pageSize);
    }
  };

  onNextClick = () => {
    const { onChange, pageSize, current, total } = this.props;
    const pageNum = Math.ceil((total) / (pageSize));
    // 不是最后一个
    if (current < pageNum) {
      onChange && onChange(current + 1, pageSize);
    }
  };

  // 计算带省略号的页码
  calculateShowPages = (
    current: number,
    pageNum: number,
    bufferSize: number
  ): Array<number | string> => {
    let res: Array<number | string> = [current];
    for (let i = 1; i <= bufferSize; i++) {
      if (current - i > 1) {
        res = [current - i, ...res];
      }
      if (current + i < pageNum) {
        res = [...res, current + i];
      }
    }
    if (current - (bufferSize + 1) > 1) {
      res = ['...', ...res];
    }
    if (current > 1) {
      res = [1, ...res];
    }
    if (current + bufferSize + 1 < pageNum) {
      res = [...res, ' ...'];
    }
    if (current < pageNum) {
      res = [...res, pageNum];
    }
    return res;
  };

  renderItems = memoizeOne(
    (classPrefix: string, current: number, pageNum: number) => {
      const pageArr = this.calculateShowPages(current, pageNum, 2);
      return pageArr.map((page, index) => {
        if (isNumber(page)) {
          return (
            <PageItem
              prefix={classPrefix}
              key={page}
              value={page}
              active={current === page}
              onClick={this.handlePageItemClick}
            >
              {page}
            </PageItem>
          );
        }

        return <span className={classNames(`${classPrefix}__item`, `${classPrefix}__item--no-hover`)} key={`omit${index}`}>…</ span>;
      });
    }
  );

  render() {
    const { prefix, className, style, current, total, pageSize } = this.props;
    const classPrefix = `${prefix}-pagination`;
    const classes = classNames(`${classPrefix}`, className);
    const pageNum = Math.ceil(total / pageSize);

    return (
      <div className={classes} style={style}>
        <Icon
          className={classNames(`${classPrefix}__prev`, {
            [`${classPrefix}__prev--disabled`]: current === 1
          })}
          type="prev"
          onClick={this.onPrevClick}
        />
        {this.renderItems(classPrefix, current, pageNum)}
        <Icon
          className={classNames(`${classPrefix}__next`, {
            [`${classPrefix}__next--disabled`]: current === pageNum
          })}
          type="next"
          onClick={this.onNextClick}
        />
      </div>
    );
  }
}

export default Pagination;

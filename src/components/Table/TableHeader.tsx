import React from 'react';
import { Component } from 'react';
import classNames from 'classnames';
import { ColumnProps } from './interface';
import PropTypes from 'prop-types';
import { Align } from './interface';


export interface TableHeaderProps<T> {
  /** 
   * 列定义数据 
   */
  columns: Array<ColumnProps<T>>;
  /** 
   * 对齐 
   */
  align: Align;
}

/**
 * TableHeader
 */
class TableHeader<T> extends Component<TableHeaderProps<T>> {
  static propTypes = {
    columns: PropTypes.array.isRequired,
    align: PropTypes.oneOf(['left', 'center', 'right']).isRequired,
  }

  static defaultProps = {
    align: 'left'
  }

  renderTds = () => {
    const { columns } = this.props;
    return columns.map((column: ColumnProps<T>) => {
      const title =
        typeof column.title === 'function' ? column.title() : column.title;
      const prefix = 'cat-table__header-th';
      return (
        <th key={column.id} className={prefix}>
          <span className={`${prefix}-inner`}>
            {title}
          </span>
        </th>
      );
    });
  };

  render() {
    const { align } = this.props;

    const prefix = 'cat-table__header';
    const trPrefix = 'cat-table__header-tr';
    const trClasses = classNames(trPrefix, `${trPrefix}--${align}`);

    return (
      <thead className={classNames(prefix, `${prefix}--${align}`)}>
        <tr className={trClasses}>{this.renderTds()}</tr>
      </thead>
    );
  }
}

export default TableHeader;

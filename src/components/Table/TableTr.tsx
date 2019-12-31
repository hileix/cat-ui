import React from 'react';
import { Component } from 'react';
import classNames from 'classnames';
import { ColumnProps, Align } from './interface';
import PropTypes from 'prop-types';

export interface TableTrProps<T> {
  /** 
   * 每一列需要的所有数据
   */
  columns: Array<ColumnProps<T>>;
  /** 
   * 每一行的数据
   */
  record: any;
  /** 
   * 对齐 */
  align: Align;
  /** 
   * 是否可拖拽的
   */
  draggable?: boolean;
  /** 
   * id
   */
  id?: string | number;
  /** 
   * order 
   */
  order: number;
  /** 
   * onDragStart
   */
  onDragStart?: any;
  /** 
   * onDragEnd
   */
  onDragEnd?: any;
}

/**
 * TableTr
 */
class TableTr<T> extends Component<TableTrProps<T>, any> {
  static propTypes = {
    columns: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.node.isRequired,
      render: PropTypes.func,
    })
  }

  static defaultProps = {
    align: 'left'
  }

  constructor(props: TableTrProps<T>) {
    super(props);
    this.state = {
      dragging: false
    };
  }

  handleDragStart = (e: any) => {
    const { onDragStart } = this.props;
    onDragStart && onDragStart(e);
    this.setState({ dragging: true });
  };

  handleDragEnd = (e: any) => {
    const { onDragEnd, record } = this.props;
    const { id } = record;
    onDragEnd && onDragEnd(e, id);
    this.setState({ dragging: false });
  };

  renderTds = () => {
    const { columns, record, order } = this.props;
    const prefix = 'cat-table__col';
    return columns.map((column: ColumnProps<T>) => {
      const id = column.id;
      /**
       * dataSource = [
       *   {
       *     name: 'zhangsan',
       *     age: 18,
       *   },
       *   {
       *     name: 'lisi',
       *     age: () => 19
       *   }
       * ]
       */
      const value = typeof record[id] === 'function' ? record[id]() : record[id];
      return (
        <td key={id} className={prefix}>
          {typeof column.render === 'function' ? (
            column.render(value, record, order - 1)
          ) : (
              <div className="cat-table__col-inner" >{value}</div>
            )}
        </td>
      );
    });
  };

  render() {
    const { dragging } = this.state;
    const { align, draggable, order } = this.props;

    const prefix = 'cat-table__row';
    const classes = classNames(prefix, `${prefix}--${align}`, {
      [`${prefix}-dragging`]: dragging,
      [`${prefix}--draggable`]: draggable
    });

    return (
      <tr
        draggable={draggable}
        data-order={order}
        onDragStart={this.handleDragStart}
        onDragEnd={this.handleDragEnd}
        className={classes}
      >
        {this.renderTds()}
      </tr>
    );
  }
}

export default TableTr;

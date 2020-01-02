import React from 'react';
import { Component } from 'react';
import classNames from 'classnames';
import isEmpty from 'lodash/isEmpty';
import { ColumnProps, PaginationProps, Align } from './interface';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import Pagination from '../Pagination';
import PropTypes from 'prop-types';
import Loading from '../Loading';

export interface TableProps<T = {}> {
  /** 
   * 类名
   */
  className?: string;
  /** 
   * 样式 
   */
  style?: React.CSSProperties;
  /** 
   * 每一列需要的所有数据
   */
  columns: ColumnProps<T>[];
  /** 
   * 每一行需要展示的数据
   */
  dataSource: Array<T>;
  /** 
   * 对齐
   */
  align: Align;
  /** 
   * 分页参数
   */
  pagination?: PaginationProps;
  /** 
   * 自定义的空模板 
   */
  empty?: React.ReactNode;
  /**
   * 行对应的 key 值
   */
  rowKey: string;
  /**
   * 加载状态
   */
  loading?: boolean;
  /** 
   * 是否可拖拽的
   */
  draggable?: boolean;
  /** 
   * 获取被拖拽的元素
   */
  draggedElement?: any;
  /**  
   * 
   */
  onDragStart?: any;
  /**  
   * 
   */
  onDragOver?: any;
  /**  
   * 
   */
  onDragEnd?: any;
  /** 
   * 筛选栏的回调函数
   */
  onFilterChange?: (id?: any, key?: any) => void;
  /** 
   * 翻页的回调函数
   */
  onPageChange?: (page?: number) => void;
  /** 
   * 返回排序后的id列表
   */
  onSort?: (sortedIds?: Array<any>, activeId?: any) => void;
}

export interface TableState {

}

/**
 * 获取当前页数据
 * @param dataSource 表格记录
 * @param page 页码
 * @param pageSize 每页数量
 */
export const getCurrentPageData = <T extends {}>(dataSource: Array<T>, page: number = 1, pageSize: number = 10) => {
  if (dataSource.length <= pageSize) {
    return dataSource;
  }
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  return dataSource.slice(start, end);
}

/**
 * 表格（列表）
 */
class Table<T> extends Component<TableProps<T>, any> {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    columns: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.node.isRequired,
      render: PropTypes.func,
    })),
    dataSource: PropTypes.array,
    align: PropTypes.oneOf(['left', 'center', 'right']),
    pagination: PropTypes.shape({
      current: PropTypes.number,
      total: PropTypes.number,
      pageSize: PropTypes.number,
      onChange: PropTypes.func,
    }), // 需调整
    empty: PropTypes.node,
    rowKey: PropTypes.string,
  }

  static defaultProps = {
    dataSource: [],
    align: 'left',
    empty: 'No Data',
    rowKey: 'key',
    draggable: false,
    loading: false,
  };

  hasPagination = () => {
    return !isEmpty(this.props.pagination);
  };

  // 拖拽事件之后的回调
  onDragChange = (nodes: any) => {
    this.setState({ currentPageData: nodes });
  };

  render() {
    const {
      className,
      style,
      columns,
      align,
      draggable,
      pagination,
      empty,
      draggedElement,
      onDragEnd,
      onSort,
      dataSource,
      rowKey,
      loading,
    } = this.props;
    const prefix = 'cat-table';
    const classes = classNames(prefix, className);
    const showPagination = this.hasPagination() && dataSource.length > 0;
    const currentPageData = getCurrentPageData(
      dataSource,
      pagination && pagination.current,
      pagination && pagination.pageSize
    );

    return (
      <div className={classes} style={style}>
        <table className={`${prefix}__table`}>
          <TableHeader
            align={align}
            columns={columns}
          />
          <TableBody
            rowKey={rowKey}
            align={align}
            columns={columns}
            draggable={draggable}
            currentPageData={currentPageData}
            empty={empty}
            draggedElement={draggedElement}
            onSort={onSort}
            onDragEnd={onDragEnd}
            onDragChange={this.onDragChange}
          />
        </table>
        {showPagination && (
          <div className={classNames(`${prefix}__pagination`)}>
            <Pagination {...pagination as PaginationProps} />
          </div>
        )}
        <div
          className={classNames(`${prefix}__loading`, {
            [`${prefix}__loading--hide`]: !loading
          })}
        >
          <div
            className={classNames(`${prefix}__loading-mask`, {
              [`${prefix}__loading-mask--hide`]: !loading
            })}
          />
          <Loading
            visible={loading}
            className={`${prefix}__loading-inner`}
          />
        </div>
      </div>
    );
  }
}

export default Table;

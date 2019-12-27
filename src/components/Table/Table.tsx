import React from 'react';
import { Component } from 'react';
import classNames from 'classnames';
import isEmpty from 'lodash/isEmpty';
import isEqual from 'lodash/isEqual';
import { ColumnProps, PaginationProps, Align } from './interface';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import Pagination from '../Pagination';
import PropTypes from 'prop-types';


export interface TableProps<T> {
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
  align?: Align;
  /** 
   * 是否可拖拽的
   */
  draggable?: boolean;
  /** 
   * 分页参数
   */
  pagination: PaginationProps;
  /** 
   * 自定义的空模板 
   */
  empty?: React.ReactNode;
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
  /**
   * 行对应的 key 值
   */
  rowKey?: string;
}

/**
 * 表格（列表）
 */
class Table<T> extends Component<TableProps<T>, any> {
  static propTypes = {

  }

  static defaultProps = {
    align: 'left',
    pagination: {},
    draggable: false
  };

  constructor(props: TableProps<T>) {
    super(props);
    this.state = {
      filterKeys: {},
      pageTotal: 0,
      filterDataSource: props.dataSource,
      currentPageData: props.dataSource
    };
  }

  // static getDerivedStateFromProps(nextProps: TableProps) {
  //   if ('dataSource' in nextProps) {
  //     return {
  //       filterDataSource: nextProps.dataSource,
  //       currentPageData: nextProps.dataSource
  //     }
  //   }
  //   return null
  // }

  componentDidMount() {
    if (this.hasPagination()) {
      const { pagination } = this.props;
      const { total = 0 } = pagination;
      this.setState({ pageTotal: total });
      // 暂时注释掉内部分页
      // this.pagingDataSource()
    }
  }

  componentDidUpdate(prevProps: TableProps<T>) {
    const { dataSource } = this.props;
    const { dataSource: prevDataSource } = prevProps;
    // 比对两次dataSource
    if (!isEqual(dataSource, prevDataSource)) {
      this.setState({
        filterDataSource: dataSource,
        currentPageData: dataSource
      });
    }
  }

  hasPagination = () => {
    return !isEmpty(this.props.pagination);
  };

  // 对数据进行分页
  pagingDataSource = (currentArg?: number) => {
    const { pagination } = this.props;
    const { filterDataSource } = this.state;
    const { current, pageSize } = pagination;
    // 优先采用传入的current
    const currentPage = currentArg || current;
    const begin = (currentPage - 1) * pageSize;
    // 分页后当前页面显示的数据
    const currentPageData = filterDataSource.slice(begin, begin + pageSize);
    if (this.hasPagination()) {
      this.setState({ currentPageData: currentPageData });
    }
  };

  // 分页点击之后的回调函数
  onPaginationChange = (page: number) => {
    const { pagination, onPageChange } = this.props;
    onPageChange && onPageChange(page);
    // 暂时注释掉Table内部翻页
    const { onChange } = pagination;
    onChange && onChange(page);
    this.pagingDataSource(page);
  };

  // 拖拽事件之后的回调
  onDragChange = (nodes: any) => {
    this.setState({ currentPageData: nodes });
  };

  render() {
    const { filterKeys, currentPageData, pageTotal } = this.state;
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
      rowKey
    } = this.props;
    const { current, pageSize } = pagination;
    const prefix = 'cat-table';
    const classes = classNames(prefix, className);
    const showPagination = this.hasPagination() && dataSource.length > 0;

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
            <Pagination
              current={current}
              total={pageTotal}
              pageSize={pageSize}
              onChange={this.onPaginationChange}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Table;

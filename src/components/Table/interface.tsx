import * as React from 'react'

export interface ColumnProps {
  id: string;
  /** 表头显示文字 */
  title: string | React.ReactNode;
  /** 生成复杂数据的渲染函数 */
  render?: string | React.ReactNode;
   /** 选择全部的文案 */
  filterAllText?: string;
  /** 表头的筛选菜单项 */
  filters?: Array<any>;
  /** 本地模式下，确定筛选的运行函数 */
  onFilter?: any;
}

export interface EmptyInnerProps {
  image: string;
}

export interface StyledTableHeaderProps {
  align?: string;
}

export interface FilterKeysProps {
  id?: string | number;
  value?: string | number;
}

export interface PaginationProps {
  /** 当前页数 */
  current?: number;
  /** 数据总数 */
  total?: number;
  /** 每页条数 */
  pageSize?: number;
  /** 分页大小改变时候的回调函数 */
  onPageSizeChange?: (current: number) => void;
  /** 每页条数 */
  onChange?: (page: number, pageSize?: number) => void;
}

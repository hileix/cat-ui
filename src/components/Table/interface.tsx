import * as React from 'react'

export interface ColumnProps<T> {
  id: string;
  /** 
   * 表头显示文字 
   */
  title: React.ReactNode;
  /** 
   * 自定义渲染
   */
  render?: (value?: any, record?: T, index?: number) => React.ReactNode;
  /** 
   * 表头的筛选菜单项
   */
  filters?: Array<any>;
  /**
   *  本地模式下，确定筛选的运行函数
   */
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
  key?: string | number;
}

export interface StyledFilterProps {
  active?: boolean;
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

export type Align = 'left' | 'center' | 'right';

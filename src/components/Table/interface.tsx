import * as React from 'react'

export interface ColumnProps {
  id: string;
  /** 生成复杂数据的渲染函数 */
  render: string | React.ReactNode;
  /** 表头的筛选菜单项 */
  filters?: Array<any>;
  /** 是否多选 */
  filterMultiple: boolean;
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

import React from 'react';
import { PureComponent } from 'react';
import PropTypes from 'prop-types';


export interface EmptyProps {
  /** 
   * 空单元格可横跨的列数 
   */
  colSpan: number;
  /** 
   * 自定义的空模板 
   */
  empty?: React.ReactNode;
}

/**
 * Empty
 */
const Empty = ({ colSpan, empty }: EmptyProps) => {
  const prefix = 'cat-table__empty';

  return (
    <tr className={prefix}>
      <td colSpan={colSpan} className={`${prefix}-td`}>
        {empty ? empty : 'No Data'}
      </td>
    </tr>
  );
}

export default Empty;

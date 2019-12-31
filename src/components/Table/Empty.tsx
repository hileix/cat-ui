import React from 'react';
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
const Empty: FComponent<EmptyProps> = ({ colSpan, empty }) => {
  const prefix = 'cat-table__empty';

  return (
    <tr className={prefix}>
      <td colSpan={colSpan} className={`${prefix}-td`}>
        {empty}
      </td>
    </tr>
  );
}

Empty.displayName = 'Empty';

Empty.propTypes = {
  colSpan: PropTypes.string.isRequired,
  empty: PropTypes.node,
}

Empty.defaultProps = {
  empty: 'No Data'
}

export default Empty;

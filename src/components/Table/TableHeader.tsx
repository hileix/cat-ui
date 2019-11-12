import * as React from 'react';
import { Component } from 'react';
import classNames from 'classnames';
import { ColumnProps, FilterKeysProps } from './interface';
import * as isEmpty from 'lodash/isEmpty';
import Popover from '../Popover';
import Menu from '../Menu';
import Radio from '../Radio';
import Icon from '../Icon';

export interface TableHeaderProps {
  /** 每一列需要的所有数据 */
  columns: Array<ColumnProps>;
  /** 对齐 */
  align?: string;
  /** onFilterSelect */
  onFilterSelect?: any;
  /** 筛选的keys */
  filterKeys: FilterKeysProps;
}

/**
 * TableHeader
 */
class TableHeader extends Component<TableHeaderProps, any> {
  onFilterClick = (id: any, key: any) => {
    const { onFilterSelect } = this.props;
    onFilterSelect && onFilterSelect(id, key);
  };

  renderTds = () => {
    const self = this;
    const { columns, filterKeys } = this.props;
    const { id = '', key = '' } = filterKeys;

    return columns.map((elem: any) => {
      // 渲染字符串或函数返回的DOM
      const elementTitle =
        typeof elem.title === 'function' ? elem.title() : elem.title;
      const hasFilters = !isEmpty(elem.filters);
      const isUseDFKey = id !== elem.id && 'defaultFilterKey' in elem;
      const checkedKey = isUseDFKey ? elem.defaultFilterKey : key;
      const isFilterActive = !(isUseDFKey || elem.defaultFilterKey === key);

      const prefix = 'cat-table__header-th';
      return (
        <th key={elem.id} className={`${prefix}`}>
          <span className={`${prefix}-inner`}>
            {elementTitle}
            {hasFilters && (
              <Popover mode="click">
                <Popover.Trigger>
                  <Icon
                    type="filter"
                    className={classNames('cat-table__header-filter-icon', {
                      'cat-table__header-filter-icon--active': isFilterActive
                    })}
                  />
                </Popover.Trigger>
                <Popover.Content>
                  <div className="pop-content-menu">
                    <Menu key={checkedKey} mode="pop" className="menu1">
                      {elem.filters.map((item: any) => {
                        const filterChecked = item.key === checkedKey;
                        return (
                          <Menu.Item
                            key={item.key}
                            onClick={() => {
                              self.onFilterClick(elem.id, item.key);
                            }}
                          >
                            <Radio checked={filterChecked} value={item.key}>
                              {item.text}
                            </Radio>
                          </Menu.Item>
                        );
                      })}
                    </Menu>
                  </div>
                </Popover.Content>
              </Popover>
            )}
          </span>
        </th>
      );
    });
  };

  render() {
    const { align } = this.props;
    const trPrefix = 'cat-table__header-tr';
    const trClasses = classNames(trPrefix, `${trPrefix}--${align}`);
    const tds = this.renderTds();
    const prefix = 'cat-header';

    return (
      <thead className={classNames(prefix, `${prefix}--${align}`)}>
        <tr className={trClasses}>{tds}</tr>
      </thead>
    );
  }
}

export default TableHeader;

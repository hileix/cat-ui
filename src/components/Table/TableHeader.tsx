import * as React from 'react';
import { Component } from 'react';
import classNames from 'classnames';
import { ColumnProps, FilterKeysProps } from './interface';
import isEmpty from 'lodash/isEmpty';
import Popover from '../Popover';
import Menu from '../Menu';
import Radio from '../Radio';
import Icon from '../Icon';
import { CSSTransition } from 'react-transition-group';


export interface TableHeaderProps {
  /** 
   * 每一列需要的所有数据 
   */
  columns: Array<ColumnProps>;
  /** 
   * 对齐 
   */
  align?: string;
  /** 
   * onFilterSelect 
   */
  onFilterSelect?: any;
  /** 
   * 筛选的 keys 
   */
  filterKeys: FilterKeysProps;
}

/**
 * TableHeader
 */
class TableHeader extends Component<TableHeaderProps> {
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
              <Popover mode='hover'>
                <Popover.Trigger>
                  <Icon
                    type='filter'
                    className={classNames('cat-table__header-filter-icon', {
                      'cat-table__header-filter-icon--active': isFilterActive
                    })}
                  />
                </Popover.Trigger>
                <Popover.Content>
                  {function (visible: boolean) {
                    return (
                      <CSSTransition
                        timeout={0}
                        in={visible}
                        classNames='pop-content-menu'
                        unmountOnExit
                        mountOnEnter
                        appear
                      >
                        <div className='pop-content-menu'>
                          <Menu key={checkedKey} mode='pop' className='menu1'>
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
                      </CSSTransition>
                    );
                  }}
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

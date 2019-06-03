import * as React from 'react'
import { Component } from 'react'
import classNames from 'classnames'
import { StyledTh, StyledTableHeader, StyledFilter } from './styled'
import { ColumnProps, FilterKeysProps } from './interface'
import * as isEmpty from 'lodash/isEmpty'
import Popover from '../Popover'
import Menu from '../Menu'
import Radio from '../Radio'

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
    const { onFilterSelect } = this.props
    onFilterSelect && onFilterSelect(id, key)
  }

  renderTds = () => {
    const self = this
    const { columns, filterKeys } = this.props
    const { id = '', key = '' } = filterKeys

    console.log('renderTds:filterKeys', filterKeys)

    return columns.map((elem: any) => {
      // 渲染字符串或函数返回的DOM
      const elementTitle = typeof elem.title === 'function' ? elem.title() : elem.title
      const hasFilters = !isEmpty(elem.filters)
      const isUseDFKey = ((id !== elem.id) && ('defaultFilterKey' in elem))
      const checkedKey = isUseDFKey ? elem.defaultFilterKey : key
      const isFilterActive = !(isUseDFKey || (elem.defaultFilterKey === key))

      console.log('renderTds:columns', elem.filters)

      return (
        <StyledTh key={elem.id} className='table-th'>
          <span className='th-inner'>
            {elementTitle}
            {hasFilters &&
              <Popover mode='click'>
                <Popover.Trigger>
                  <StyledFilter type='filter' active={isFilterActive} />
                </Popover.Trigger>
                <Popover.Content>
                  <div className='pop-content-menu'>
                    <Menu key={checkedKey} mode='pop' className='menu1'>
                      {elem.filters.map((item: any) => {
                        const filterChecked = item.key === checkedKey
                        console.log('elem.filters:map', item)
                        return (<Menu.Item
                          key={item.key}
                          onClick={() => {self.onFilterClick(elem.id, item.key)}}>
                            <Radio
                              checked={filterChecked}
                              value={item.key}>
                              {item.text}
                            </Radio>
                          </Menu.Item>)
                      })}
                    </Menu>
                  </div>
                </Popover.Content>
              </Popover>
            }
          </span>
        </StyledTh>
      )
    })
  }

  render() {
    const { align } = this.props
    const trClasses = classNames('hmly-table-row', `hmly-table-row-${align}`)
    const tds = this.renderTds()

    return (
      <StyledTableHeader align={align}>
        <tr className={trClasses}>
          {tds}
        </tr>
      </StyledTableHeader>
    )
  }
}

export default TableHeader

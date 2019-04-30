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

  onFilterClick = (id: any, value: any) => {
    const { onFilterSelect } = this.props
    onFilterSelect && onFilterSelect(id, value)
  }

  renderTds = () => {
    const self = this
    const { columns, filterKeys } = this.props
    const { id = '', value = '' } = filterKeys
    const isAllSelect = value === ''

    return columns.map((elem: any) => {
      // 渲染字符串或函数返回的DOM
      const elementRender = typeof elem.render === 'function' ? elem.render() : elem.render
      const hasFilters = !isEmpty(elem.filters)

      return (
        <StyledTh key={elem.id} className='table-th'>
          <span className='th-inner'>
            {elementRender}
            {hasFilters &&
              <Popover mode='click'>
                <Popover.Trigger>
                  <StyledFilter type='filter' />
                </Popover.Trigger>
                <Popover.Content>
                  <div className='pop-content-menu'>
                    <Menu mode='pop' className='menu1'>
                      {elem.filters.map((item: any) => {
                        const filterChecked = item.value === value
                        return (<Menu.Item
                          key={item.value}
                          onClick={() => {self.onFilterClick(elem.id, item.value)}}>
                            <Radio checked={filterChecked} value={item.value}>
                              {item.text}
                            </Radio>
                          </Menu.Item>)
                      })}
                      <Menu.Item
                        key='all'
                        onClick={() => {self.onFilterClick(elem.id, '')}}>
                          <Radio checked={isAllSelect} value='all'>
                            {elem.filterAllText}
                          </Radio>
                        </Menu.Item>
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

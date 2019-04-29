import * as React from 'react'
import { Component } from 'react'
import classNames from 'classnames'
import { StyledTh, StyledTableHeader, StyledFilter } from './styled'
import { ColumnProps } from './interface'
import * as _ from 'lodash'
import { isEmpty } from 'lodash'
import Popover from '../Popover'
import Menu from '../Menu'
import Radio from '../Radio'

export interface TableHeaderProps {
  /** 每一列需要的所有数据 */
  columns: Array<ColumnProps>;
  /** 对齐 */
  align?: string;
}

/**
 * TableHeader
 */
class TableHeader extends Component<TableHeaderProps, any> {

  onFilterClick = () => {
    console.log('onFilterClick')
  }

  renderTds = () => {
    const self = this
    const { columns } = this.props
    return columns.map((elem: any) => {
      // 渲染字符串或函数返回的DOM
      const result = typeof elem.render === 'function' ? elem.render() : elem.render
      console.log('filters', elem.filters)

      return (
        <StyledTh key={elem.id} className='table-th'>
          <span className='th-inner'>
            {result}
            {!isEmpty(elem.filters) &&
              <Popover mode='click'>
                <Popover.Trigger>
                  <StyledFilter onClick={self.onFilterClick} type='filter' />
                </Popover.Trigger>
                <Popover.Content>
                  <div className='pop-content-menu'>
                    <Menu mode='pop' className='menu1'>
                      {elem.filters.map((item: any) => {
                        return (<Menu.Item key={item.value}>
                            <Radio value={item.value}>{item.text}</Radio>
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

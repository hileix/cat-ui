import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Search from '../Search';
import { ISearchProps } from '../Search';
import Button from '../../Button'
import markdown from '../README.md';
import '../../../styles/search.scss';
import './style.scss'

const Option = Search.Option

class Demo extends React.Component<ISearchProps, any> {
  constructor(props: ISearchProps) {
    super(props)
    this.state = {
      dataSource1: [
        '选项1',
        '选项2',
        '选项3',
        '选项4',
        '选项5'
      ],
      dataSource2: [
        {
          value: '选项 1',
          render: (
            <Button type='primary' size='md' className='button-stories__button'>
              Medium
            </Button>
          )
        },
        {
          value: '选项 2',
          render: <h3 style={{width: '100%'}}>content h3</h3>
        },
        {
          value: '选项 3',
          render: <input />
        },
        {
          value: '选项 4',
          render: <p>content p</p>
        },
      ],
      dataSource3: [
        '选项1',
        '选项2',
        '选项3',
        '选项4',
        '选项5'
      ],
    }
  }

  generateData = () => {
    let dataSource1 = []
    for (let i = 0, l = 5; i < l; i++) {
      dataSource1.push(`随机数据: ${Math.ceil(Math.random() * 1000)}`)
    }

    return dataSource1
  }

  handleChange = (value: any) => {
    console.log('handleChange', value)
    this.setState({
      dataSource1: this.generateData()
    })
  }

  handleSelect = (value: any) => {
    console.log('handleSelect', value)
  }

  handleSearch = (value: any) => {
    console.log('handleSearch', value)
  }

  handleChange2 = (value: any) => {
    console.log('handleChange 2', value)
  }

  handleSelect2 = (value: any) => {
    console.log('handleSelect 2', value)
  }

  handleSearch2 = (value: any) => {
    console.log('handleSearch 2', value)
  }

  handleChange3 = (value: any) => {
    console.log('handleChange 3', value)
  }

  handleSelect3 = (value: any) => {
    console.log('handleSelect 3', value)
  }

  handleSearch3 = (value: any) => {
    console.log('handleSearch 3', value)
  }

  render () {
    const { dataSource1, dataSource2, dataSource3 } = this.state
    return (
      <div className='search-demo'>
        <Search
          className='my-search'
          selectionClassName='my-selection'
          placeholder='Find more beauty 1'
          dataSource={dataSource1}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
          onSearch={this.handleSearch}
        />

        <Search
          className='my-search-2'
          placeholder='Find more beauty 2'
          dataSource={dataSource2}
          onChange={this.handleChange2}
          onSelect={this.handleSelect2}
          onSearch={this.handleSearch2}
        />

        <Search
          className='my-search-3'
          placeholder='Find more beauty 3'
          onChange={this.handleChange3}
          onSelect={this.handleSelect3}
          onSearch={this.handleSearch3}
        >
          <Option value='选项 1'>
            选项 1
          </Option>
          <Option value='选项 2'>
            选项 2
          </Option>
          <Option value='选项 3'>
            <input type="text" placeholder='选项 3' />
          </Option>
        </Search>
      </div>
    )
  }
}

storiesOf('Search 搜索', module)
.add(
  'Search',
  () => <Demo />,
  {
    info: {
      text: markdown
    }
  }
)

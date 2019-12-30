import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Search from '../Search';
import { ISearchProps } from '../Search' 
import markdown from '../README.md';
import '../../../styles/index.scss';
import '../../../styles/search.scss';

class Demo extends React.Component<ISearchProps, any> {
  constructor(props: ISearchProps) {
    super(props)
    this.state = {
      dataSource: [
        '选项1',
        '选项2',
        '选项3',
        '选项4',
        '选项5'
      ]
    }
  }

  handleChange = (value: any) => {
    console.log('handleChange', value)
    this.setState({
      dataSource: this.generateData()
    })
  }

  generateData = () => {
    let dataSource = []
    for (let i = 0, l = 5; i < l; i++) {
      dataSource.push(`随机数据: ${Math.ceil(Math.random() * 1000)}`)
    }

    return dataSource
  }

  handleSelect = (value: any) => {
    console.log('handleSelect', value)
  }

  handleSearch = (value: any) => {
    console.log('handleSearch', value)
  }

  render () {
    const { dataSource } = this.state
    return (
      <Search
        placeholder='Find more beauty'
        dataSource={dataSource}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
        onSearch={this.handleSearch}
      />
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

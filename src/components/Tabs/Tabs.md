Example

```jsx
import TabPanel from './TabPanel';

class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      activeId1: 'a',
      activeId2: 'd'
    }
    this.onTabChange1 = this.onTabChange1.bind(this)
    this.onTabChange2 = this.onTabChange2.bind(this)
  }

  onTabChange1 (id) {
    this.setState({
      activeId1: id
    });
  }

  onTabChange2 (id) {
    this.setState({
      activeId2: id
    });
  }

  render () {
    const { activeId1, activeId2 } = this.state

    return (<div>
      <h3>基础Tabs</h3>
      <Tabs 
        activeId={activeId1}
        onChange={this.onTabChange1}>
        <TabPanel 
          id='a'
          tab='选项A'>
          <div>选项A的内容11111</div>
        </TabPanel>
        <TabPanel 
          id='b'
          tab='选项B'>
          <div>选项B的内容2222222</div>
        </TabPanel>
        <TabPanel 
          id='c'
          tab='选项C'>
          <div>选项C的内容333333</div>
        </TabPanel>
      </Tabs>

      <h3>TabPanel的tab属性为dom && TabPanel的children为空</h3>

      <Tabs 
        activeId={activeId2}
        onChange={this.onTabChange2}>
        <TabPanel 
          id='d'
          tab={(<a href='/#table'>选项table</a>)}>
        </TabPanel>
        <TabPanel 
          id='e'
          tab={(<a href='/#slider'>选项slider</a>)}>
        </TabPanel>
        <TabPanel 
          id='f'
          tab={(<span href='/#tooltip'>选项<span>tooltip</span></span>)}>
        </TabPanel>
      </Tabs>

      <style>
        {`

        `}
      </style>
    </div>
    )
  }
}

<Example />
```


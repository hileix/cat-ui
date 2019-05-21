Example

```jsx
class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      checked1: false,
      groupValue1: ['C'],
      groupValue2: ['C', 'D']
    }
    this.onCheckbox1Change = this.onCheckbox1Change.bind(this)
    this.onGroup1Change = this.onGroup1Change.bind(this)
  }

  onCheckbox1Change (e) {
    const isChecked = e.target.checked
    const value = e.target.value
    console.log('Example:onCheckbox1Change', isChecked, value)
    this.setState({ checked1: !isChecked })
  }

  onGroup1Change (value) {
    console.log('Example:onGroup1Change', value)
    this.setState({ groupValue1: value })
  }

  render () {
    const { checked1, groupValue1, groupValue2 } = this.state
    
    return (<div className='checkbox-box'>
      <h3>单独使用</h3>
      <Checkbox 
        checked={checked1} 
        onChange={this.onCheckbox1Change} 
        value={'A'}>
        A
      </Checkbox>
      <Checkbox 
        checked
        disabled
        value={'B'}>
        B
      </Checkbox>
      
      <h3>Checkbox.Group</h3>
      <Checkbox.Group value={groupValue1} onChange={this.onGroup1Change}>
        <Checkbox value={'A'}>A</Checkbox>
        <Checkbox value={'B'}>B</Checkbox>
        <Checkbox value={'C'}>C</Checkbox>
        <Checkbox disabled value='D'>D</Checkbox>
        <Checkbox value={'E'}>E</Checkbox>
      </Checkbox.Group>

      <h3>Checkbox.Group禁用</h3>
      <Checkbox.Group disabled value={groupValue2} onChange={this.onGroup2Change}>
        <Checkbox value={'A'}>A</Checkbox>
        <Checkbox value={'B'}>B</Checkbox>
        <Checkbox value={'C'}>C</Checkbox>
        <Checkbox disabled value='D'>D</Checkbox>
        <Checkbox value={'E'}>E</Checkbox>
      </Checkbox.Group>

      <h3>没有value值的Checkbox.Group</h3>
      <Checkbox.Group>
        <Checkbox value={'A'}>A</Checkbox>
        <Checkbox value={'B'}>B</Checkbox>
        <Checkbox value={'C'}>C</Checkbox>
        <Checkbox disabled value='D'>D</Checkbox>
        <Checkbox value={'E'}>E</Checkbox>
      </Checkbox.Group>

      <style>
        {`
          .checkbox-box {
            padding: 5px;
          }
        `}
      </style>
    </div>
    )
  }
}

<Example />
```

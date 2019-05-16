Example

```jsx
const Option = Select.Option;

class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = { 
      value1: '',
      value2: 'b',
      value3: 'c'
    }
    this.onChange1 = this.onChange1.bind(this)
    this.onChange2 = this.onChange2.bind(this)
    this.onChange3 = this.onChange3.bind(this)
  }

  onChange1 (value, text) {
    console.log('Example:onChange1', value, text)
    this.setState({ value1: value })
  }

  onChange2 (value, text) {
    console.log('Example:onChange2', value, text)
    this.setState({ value2: value })
  }

   onChange3 (value, text) {
    console.log('Example:onChange3', value, text)
    this.setState({ value3: value })
  }

  render () {
    const { value1, value2, value3 } = this.state

    return (<div className='select-box'>
      <Select 
        className='select1' 
        placeholder='Choose Price'
        value={value1}
        onChange={this.onChange1}>
        <Option value='1'>Option 1</Option>
        <Option value='2'>Option 2</Option>
        <Option value='3'>Option 3</Option>
      </Select>
      <div className='select2-box'>
        <Select 
          className='select2' 
          placeholder='Choose Price'
          value={value2}
          onChange={this.onChange2}>
          <Option value='a'>Option A</Option>
          <Option value='b'>Option B</Option>
          <Option value='c'>Option C</Option>
        </Select>
      </div>
      <div className='select3-box'>
        <Select 
          className='select3' 
          placeholder='Choose Price'
          value={value3}
          onChange={this.onChange3}>
          <Option value='a'><div>Option A</div></Option>
          <Option value='b'>Option B</Option>
          <Option value='c'>Option C</Option>
        </Select>
      </div>

      <style>
        {`
          .select-box .select1 {
            width: 316px;
          }
          .select-box .select2 {
            width: 200px;
          }
         
          .select-box .select2-box,
          .select-box .select3-box {
            display: inline-block;
            margin-left: 20px;
          }
        `}
      </style>
    </div>
    )
  }
}

<Example />
```

Select.Option 设置onOptionClick

```jsx
const Option = Select.Option;

class Example2 extends React.Component {
  constructor (props) {
    super(props)
    this.state = { 
      value: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onOptionClick = this.onOptionClick.bind(this)
  }

  onOptionClick (value, child) {
    alert(`This is Custom onOptionClick & value is : ${value} & will callback false`)
    return false
  }

  onChange (value, text) {
    console.log('Example2:onChange', value, text)
    this.setState({ value: value })
  }


  render () {
    const { value} = this.state

    return (<div className='select-box'>
      <Select 
        className='select' 
        placeholder='Choose Price'
        value={value}
        onChange={this.onChange}>
        <Option value='1' >Option 1</Option>
        <Option value='2' >Option 2</Option>
        <Option value='3' className="not-allow" onOptionClick={this.onOptionClick}>Option 3</Option>
      </Select>
      
      <style>
        {`
          .select-box .select {
            width: 316px;
            color: #ddf;
          }
          .hmly-select.not-allow {
            cursor: not-allowed;
            color: #ddd;
          }
        `}
      </style>
    </div>
    )
  }
}

<Example2 />
```

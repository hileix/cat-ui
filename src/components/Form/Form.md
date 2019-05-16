Example

```jsx
import Button from '../Button';
import Checkbox from '../Checkbox';
import Input from '../Input';
import Radio from '../Radio';

class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      field1: '1',
      field2: '',
      field3: []
    }
    this.onField1Change = this.onField1Change.bind(this)
    this.onField2Change = this.onField2Change.bind(this)
    this.onField3Change = this.onField3Change.bind(this)
    this.checkField1 = this.checkField1.bind(this)
    this.checkField2 = this.checkField2.bind(this)
    this.checkField3 = this.checkField3.bind(this)
  }

  onField1Change (e) {
    console.log('Example:onField1Change', e.target.value)
    this.setState({ field1: e.target.value })
  }

  onField2Change (value) {
    console.log('Example:onField2Change', value)
    this.setState({ field2: value })
  }

  onField3Change (value) {
    console.log('Example:onField3Change', value)
    this.setState({ field3: value })
  }

  checkField1 (field1) {
    let error = ''
    if (field1.length === 0) {
      error = '不能为空'
    } else if (field1.length > 10) {
      error = '长度不能大于10'
    }
    return error
  }

  checkField2 (field2) {
    let error = ''
    if (field2.length === 0) {
      error = '不能为空'
    } else if (field2.length > 10) {
      error = '长度不能大于10'
    }
    return error
  }

  checkField3 (field3) {
    let error = ''
    if (field3.length === 0) {
      error = '不能为空'
    } else if (field3.length > 10) {
      error = '长度不能大于10'
    }
    return error
  }

  render () {
    const { field1, field2, field3 } = this.state
    const field1Error = this.checkField1(field1)
    const field2Error = this.checkField2(field2)
    const field3Error = this.checkField3(field3)

    return (<div className='form-box'>
      <Form 
        className='form1'
        labelWidth='200px'>

        <Form.Item
          label='field1'
          desc='How much would you like to charge your fans?'
          tips='field1 tips text'
          error={field1Error}>
          <Input value={field1} onChange={this.onField1Change} />
        </Form.Item>

        <Form.Item
          required
          label='field2'
          error={field2Error}>
          <Radio.Group 
            value={field2} 
            onChange={this.onField2Change}>
            <Radio value={1}>1</Radio>
            <Radio value={2}>2</Radio>
            <Radio value={3}>3</Radio>
            <Radio disabled value={4}>4</Radio>
            <Radio value={5} shape='hook'>5</Radio>
          </Radio.Group>
        </Form.Item>
        
        <Form.Item
          label='field3'
          desc='field3 help text'
          error={field3Error}>
          <Checkbox.Group 
            value={field3} 
            onChange= {this.onField3Change}>
            <Checkbox value={'A'}>A</Checkbox>
            <Checkbox value={'B'}>B</Checkbox>
            <Checkbox value={'C'}>C</Checkbox>
            <Checkbox disabled value='D'>D</Checkbox>
            <Checkbox value={'E'}>E</Checkbox>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item>
          <Button size='md' onClick={this.onSubmit}>
            Submit
          </Button>
        </Form.Item>
      </Form>

      <style>
        {`
          .form-box {
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

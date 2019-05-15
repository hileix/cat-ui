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
      field3: ''
    }
    this.onField1Change = this.onField1Change.bind(this)
    this.onField2Change = this.onField2Change.bind(this)
    this.onField3Change = this.onField3Change.bind(this)
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

  render () {
    const { field1, field2, field3 } = this.state
    let field1Error = ''
    const field1Rule = (field1) => {
      if (field1.length === 0) {
        field1Error = '不能为空'
      }
      if (field1.length > 10) {
        field1Error = '长度不能大于10'
      }
    }

    return (<div className='form-box'>
      <Form 
        className='form1'
        labelCol={{span: 3, offset: 12}}
        labelAlign='left'>

        <Form.Item
          label='field1'
          error={field1Error}>
          <Input value={field1} onChange={this.onField1Change} />
        </Form.Item>

        <Form.Item
          required
          label='field2'
          error='field2 is not valid.'>
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
          help='field3 help text'
          label='field3'
          error='field3 is not valid.'>
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

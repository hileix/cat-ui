Example

```jsx
import _ from 'lodash'
import Button from '../Button';
import Checkbox from '../Checkbox';
import Input from '../Input';
import Radio from '../Radio';
import Select from '../Select';
import Tooltip from '../Tooltip';

const Option = Select.Option;

class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      field1: '',
      field2: '',
      field3: [],
      field4: '',
      field5: '',
      fieldError: {}
    }
    this.onField2Change = this.onField2Change.bind(this)
    this.checkField1 = this.checkField1.bind(this)
    this.checkField2 = this.checkField2.bind(this)
    this.checkField3 = this.checkField3.bind(this)
    this.checkField4 = this.checkField4.bind(this)
    this.checkField5 = this.checkField5.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onField2Change (value) {
    console.log('onField2Change', value)
  }

  checkField1 (field1) {
    const isInvalid = value.length === 0 || value.length > 10
    const error = isInvalid ? '长度不能大于10' : ''
    return error
  }

  checkField2 (value) {
    const isInvalid = value === 3
    const error = isInvalid ? '不能选择3' : ''
    return error
  }

  checkField3 (value) {
    const isInvalid = value.length > 10
    const error = isInvalid ? '长度不能大于10' : ''
    return error
  }

  checkField4 (value) {
    const isInvalid = value.length > 10
    const error = isInvalid ? '长度不能大于10' : ''
    return error
  }

  checkField5 (value) {
    const isInvalid = value.length > 10
    const error = isInvalid ? '长度不能大于10' : ''
    return error
  }

  onSubmit () {
    const { field1, field2, field3, field4, field5 } = this.state
    const params = { field1, field2, field3, field4, field5 }
   
    // if (!isInvalid) {
    //   alert(`onSubmit ${JSON.stringify(params)}`)
    // }
    console.log('onSubmit', params)
  }

  render () {
    const { field1, field2, field3, field4, field5, fieldError } = this.state
    const { field1Error, field4Error } = fieldError

    const isFullField3 = field2 === 3
    const isShowField4 = field2 === 1

    return (<div className='form-box'>
      <h3>不禁用提交按钮</h3>
      <Form 
        className='form1'
        labelWidth='200px'>

        <Form.Item
          label='field1'
          desc='How much would you like to charge your fans?'
          tips='field1 tips text'
          required
          check={this.checkField1}>
          <Input error={field1Error} />
        </Form.Item>

        <Form.Item
          required
          label='field2'
          tips='field2 tips text field2 tips text'
          check={this.checkField2}>
          <Radio.Group 
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
          check={this.checkField3}>
          <Checkbox.Group>
            <Checkbox value={'A'}>A</Checkbox>
            <Checkbox value={'B'}>B</Checkbox>
            <Checkbox value={'C'}>C</Checkbox>
            {isFullField3 && <React.Fragment>
              <Checkbox disabled value='D'>D</Checkbox>
              <Checkbox value={'E'}>E</Checkbox>
            </React.Fragment>}
            <Checkbox value={'F'}>F</Checkbox>
          </Checkbox.Group>
        </Form.Item>

        {isShowField4 &&
          <Form.Item
            label='field4'
            desc='How much would you like to charge your fans?'
            tips='tips'
            check={this.checkField4}>
            <Input error={field4Error} />
          </Form.Item>
        }

        <Form.Item
          label='field5'
          desc='How much would you like to charge your fans?'
          tips='tips'
          check={this.checkField5}>
          <Select 
            className='select' 
            placeholder='Choose Price'>
            <Option value='1' >Option 1</Option>
            <Option value='2' >Option 2</Option>
            <Option value='3' disable>Option 3</Option>
            <Option value='4'>Option 4</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button 
            size='md' 
            onClick={this.onSubmit}>
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

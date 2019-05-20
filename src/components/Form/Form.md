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
    this.onFieldChange = this.onFieldChange.bind(this)
    this.onField2Change = this.onField2Change.bind(this)
    this.checkField1 = this.checkField1.bind(this)
    this.checkField2 = this.checkField2.bind(this)
    this.checkField3 = this.checkField3.bind(this)
    this.checkField4 = this.checkField4.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.checkFunc = this.checkFunc.bind(this)
  }

  // 字段及校验函数的映射
  checkFunc (field) {
    return {
      field1: this.checkField1,
      field2: this.checkField2,
      field3: this.checkField3,
      field4: this.checkField4,
    }[field] || _.noop
  }

  // 字段改变的通用回调函数
  onFieldChange (field, value) {
    const { fieldError } = this.state
    const errorType = field + 'Error'
    const errorMsg = this.checkFunc(field)(value)
    const newFieldError = { 
      ...fieldError, 
      [errorType]: errorMsg
    }
    this.setState({ 
      [field]: value, 
      fieldError: newFieldError 
    })
  }

  onField2Change (value) {
    console.log('do other things...')
    this.onFieldChange('field2', value)
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
    const error = field3.length > 10 ? '长度不能大于10' : ''
    return error
  }

  checkField4 (field4) {
    const error = field4.length > 10 ? '长度不能大于10' : ''
    return error
  }

  onSubmit () {
    const { field1, field2, field3, field4, field5 } = this.state
    const params = { field1, field2, field3, field4, field5 }
    const fieldError = {
      field1Error: this.checkField1(field1),
      field2Error: this.checkField2(field2),
      field3Error: this.checkField3(field3),
      field4Error: this.checkField4(field4),
    }
    const isInvalid = _.some(fieldError, function(error) { 
      return Boolean(error)
    })
    this.setState({ fieldError: fieldError })
    
    if (!isInvalid) {
      alert(`onSubmit ${JSON.stringify(params)}`)
    }
    console.log('onSubmit', params, isInvalid)
  }

  render () {
    const { field1, field2, field3, field4, field5, fieldError } = this.state
    const { field1Error, field2Error, field3Error, field4Error, field5Error } = fieldError

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
          error={field1Error}>
          <Input 
            value={field1} 
            error={field1Error}
            onChange={(e) => {this.onFieldChange('field1', e.target.value)}} />
        </Form.Item>

        <Form.Item
          required
          label='field2'
          tips='field2 tips text field2 tips text'
          error={field2Error}>
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
          error={field3Error}>
          <Checkbox.Group 
            value={field3} 
            onChange={(value) => {this.onFieldChange('field3',value)}}>
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
            error={field4Error}>
            <Input 
              value={field4}
              error={field4Error} 
              onChange={(e) => {this.onFieldChange('field4', e.target.value)}} />
          </Form.Item>
        }

        <Form.Item
          label='field5'
          desc='How much would you like to charge your fans?'
          tips='tips'
          error={field5Error}>
          <Select 
            className='select' 
            placeholder='Choose Price'
            value={field5}
            onChange={(value) => {this.onFieldChange('field5',value)}}>
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

import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import { actions } from '@storybook/addon-actions'
import Button from '../Button'
import '../styled/Button.scss'
import { withInfo } from '@storybook/addon-info'

addDecorator(withInfo)

storiesOf('Button 按钮', module)
  .add('sm', () => <Button size="sm">sm</Button>)
  .add('md', () => <Button size="md">md</Button>)
  .add('lg', () => <Button size="lg">lg</Button>)
  .add('primary', () => <Button theme='primary'>primary</Button>)
  .add('primary-up', () => <Button theme='primary-up'>primary-up</Button>)
  .add('yellow', () => <Button theme='yellow'>yellow</Button>)
  .add('white-primary', () => <Button theme='white-primary'>white-primary</Button>)
  .add('white-cyan', () => <Button theme='white-cyan'>white-cyan</Button>)
  .add('borderless', () => <Button theme='borderless'>borderless</Button>)
  .add('block', () => <Button style={{ width: 300 }} block>block</Button>)
  .add('disabled', () => <Button disabled>disabled</Button>)

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Modal } from '@components/index';
import '../../../styles/index.scss';
import './style.scss';
import Button from '../../Button';
import markdown from '../README.md';


const { useState } = React;

const Demo1 = () => {
  const [visible3, setvisible3] = useState(false);



  return (
    <div className='modal-box'>
      <Button className='modal-button' onClick={() => setvisible3(true)}>
        关闭 Modal 后自动销毁 children 的 Modal（请打开控制台，查看 DOM）
      </Button>





    </div>
  );
};


const BaseModal = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button className='modal-button' onClick={() => setVisible(true)}>
        基础 Modal
      </Button>
      <Modal
        title='Enter the amount you want to redeem'
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <p>
          Please ensure that the amount you are redeeming does not exceed the
          remaining total amount.
        </p>
      </Modal>
    </>
  )
}

const FooterModal = () => {
  const [visible, setVisible] = useState(false);

  const footer = (
    <div className='footer' style={{ textAlign: 'center' }}>
      <Button type='primary' onClick={() => setVisible(false)}>
        Submit
      </Button>
    </div>
  );

  return (
    <>
      <Button className='modal-button' onClick={() => setVisible(true)}>
        自定义 footer 的 Modal
      </Button>
      <Modal
        title='Enter the amount you want to redeem'
        visible={visible}
        footer={footer}
        onClose={() => setVisible(false)}
      >
        <p>
          Please ensure that the amount you are redeeming does not exceed the
          remaining total amount.
        </p>
      </Modal>
    </>
  )
}

const NoMaskModal = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button className='modal-button' onClick={() => setVisible(true)}>
        没有遮罩
      </Button>
      <Modal
        title='Enter the amount you want to redeem'
        visible={visible}
        onClose={() => setVisible(false)}
        mask={false}
      >
        <p>
          Please ensure that the amount you are redeeming does not exceed the
          remaining total amount.
        </p>
      </Modal>
    </>
  )
}

const DestroyOnCloseModal = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button className='modal-button' onClick={() => setVisible(true)}>
        关闭 Modal 后自动销毁 children 的 Modal（请打开控制台，查看 DOM）
      </Button>
      <Modal
        title='Enter the amount you want to redeem'
        visible={visible}
        onClose={() => setVisible(false)}
        destroyOnClose
      >
        <p>
          Please ensure that the amount you are redeeming does not exceed the
          remaining total amount.
        </p>
      </Modal>
    </>
  )
}

storiesOf('Modal 模态窗', module)
  .add('基础 Modal', () => <BaseModal />, {
    info: {
      text: markdown
    }
  })
  .add('自定义 footer', () => <FooterModal />, {
    info: {
      text: markdown
    }
  })
  .add('无遮罩', () => <NoMaskModal />, {
    info: {
      text: markdown
    }
  })
  .add('关闭 Modal 后自动销毁 children', () => <DestroyOnCloseModal />, {
    info: {
      text: markdown
    }
  })

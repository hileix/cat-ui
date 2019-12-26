import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Modal } from '@components/index';
import '../../../styles/index.scss';
import './style.scss';
import Button from '../../Button';

const { useState } = React;

const Demo1 = () => {
  const [visible1, setvisible1] = useState(false);
  const [visible2, setvisible2] = useState(false);
  const [visible3, setvisible3] = useState(false);
  const [visible4, setvisible4] = useState(false);

  const footer = (
    <div className='footer' style={{ textAlign: 'center' }}>
      <Button type='primary' onClick={() => setvisible2(false)}>
        Submit
      </Button>
    </div>
  );

  return (
    <div className='modal-box'>
      <Button className='modal-button' onClick={() => setvisible1(true)}>
        基础 Modal
      </Button>
      <Button className='modal-button' onClick={() => setvisible2(true)}>
        自定义 footer 的Modal
      </Button>
      <Button className='modal-button' onClick={() => setvisible3(true)}>
        关闭 Modal 后自动销毁 children 的 Modal（请打开控制台，查看 DOM）
      </Button>
      <Button className='modal-button' onClick={() => setvisible4(true)}>
        没有遮罩
      </Button>

      <Modal
        title='Enter the amount you want to redeem'
        visible={visible1}
        onClose={() => setvisible1(false)}
      >
        <p>
          Please ensure that the amount you are redeeming does not exceed the
          remaining total amount.
        </p>
      </Modal>
      <Modal
        title='Enter the amount you want to redeem'
        visible={visible2}
        footer={footer}
        onClose={() => setvisible2(false)}
      >
        <p>
          Please ensure that the amount you are redeeming does not exceed the
          remaining total amount.
        </p>
      </Modal>
      <Modal
        title='Enter the amount you want to redeem'
        visible={visible3}
        onClose={() => setvisible3(false)}
        destroyOnClose
      >
        <p>
          Please ensure that the amount you are redeeming does not exceed the
          remaining total amount.
        </p>
      </Modal>
      <Modal
        title='Enter the amount you want to redeem'
        visible={visible4}
        onClose={() => setvisible4(false)}
        mask={false}
      >
        <p>
          Please ensure that the amount you are redeeming does not exceed the
          remaining total amount.
        </p>
      </Modal>
    </div>
  );
};

storiesOf('Modal 模态窗', module).add('Modal', () => <Demo1 />);

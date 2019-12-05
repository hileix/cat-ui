import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Row, Col } from '@components/index';
import './style.scss';
import markdown from '../README.md';
import DemoWrapper from '@utils/DemoWrapper';

const { Fragment } = React;

const Demo = () => {
  return (
    <Fragment>
      <DemoWrapper title='Grid 栅格布局' desc='栅格系统中每一行分为 24 列'>
        <Row className='grid-stories__row'>
          <Col className='grid-stories__col grid-stories__col-1-1' span={12}>
            col-12
          </Col>
          <Col className='grid-stories__col grid-stories__col-1-2' span={12}>
            col-12
          </Col>
        </Row>
        <Row className='grid-stories__row'>
          <Col className='grid-stories__col grid-stories__col-2-1' span={8}>
            col-8
          </Col>
          <Col className='grid-stories__col grid-stories__col-2-2' span={8}>
            col-8
          </Col>
          <Col className='grid-stories__col grid-stories__col-2-3' span={8}>
            col-8
          </Col>
        </Row>
      </DemoWrapper>

      <DemoWrapper title='offset' desc='offset=8'>
        <Row className='grid-stories__row'>
          <Col className='grid-stories__col grid-stories__col-2-1' span={8}>
            col-8
          </Col>
          <Col
            className='grid-stories__col grid-stories__col-2-3'
            span={8}
            offset={8}
          >
            col-8 offset-8
          </Col>
        </Row>
      </DemoWrapper>

      <DemoWrapper title='order' desc='order'>
        <Row className='grid-stories__row'>
          <Col
            className='grid-stories__col grid-stories__col-4-1'
            span={8}
            order={2}
          >
            col-8 order-2
          </Col>
          <Col
            className='grid-stories__col grid-stories__col-4-2'
            span={8}
            order={1}
          >
            col-8 order-1
          </Col>
        </Row>
      </DemoWrapper>

      <DemoWrapper title='justify' desc='justify=center'>
        <Row className='grid-stories__row' justify='center'>
          <Col className='grid-stories__col grid-stories__col-5-1' span={6}>
            justify=center col-6
          </Col>
          <Col className='grid-stories__col grid-stories__col-5-2' span={6}>
            justify=center col-6
          </Col>
          <Col className='grid-stories__col grid-stories__col-5-3' span={6}>
            justify=center col-6
          </Col>
        </Row>
      </DemoWrapper>

      <DemoWrapper title='align' desc='align=center'>
        <Row className='grid-stories__row' align='center'>
          <Col className='grid-stories__col grid-stories__col-6-1' span={6}>
            align=center col-2
          </Col>
          <Col className='grid-stories__col grid-stories__col-6-2' span={6}>
            align=center col-2
          </Col>
          <Col className='grid-stories__col grid-stories__col-6-3' span={6}>
            align=center col-2
          </Col>
        </Row>
      </DemoWrapper>

      <DemoWrapper
        title='响应式'
        desc='参照 Bootstrap 的 响应式设计，预设 7 个响应尺寸：xs sm md lg xl  xxl fhd'
      >
        <Row className='grid-stories__row'>
          <Col
            className='grid-stories__col grid-stories__col-7-1'
            xs={{ span: 6 }}
            sm={{ span: 12 }}
          >
            {`
              xs={ span: 6 }
              sm={ span: 12 }
            `}
          </Col>
          <Col
            className='grid-stories__col grid-stories__col-7-2'
            xs={{ span: 6 }}
            sm={{ span: 12 }}
          >
            {`
              xs={ span: 6 }
              sm={ span: 12 }
            `}
          </Col>
        </Row>
      </DemoWrapper>
    </Fragment>
  );
};

storiesOf('Grid 栅格系统', module).add('Row', () => <Demo />, {
  info: {
    text: markdown
  }
});

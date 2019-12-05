import * as React from 'react';
import { render } from 'enzyme';
import { Row, Col } from '../index';

describe('Button', () => {
  test('renders correctly', () => {
    const wrapper1 = render(
      <Row>
        <Col span={12}>col-12</Col>
        <Col span={12}>col-12</Col>
      </Row>
    );
    expect(wrapper1).toMatchSnapshot();
    const wrapper2 = render(
      <Row>
        <Col xs={{ span: 6, order: 1 }} sm={{ span: 6, order: 2, offset: 1 }}>
          col-12
        </Col>
        <Col xs={{ span: 6, offset: 1, order: 2 }} sm={{ span: 6, order: 1 }}>
          col-12
        </Col>
      </Row>
    );
    expect(wrapper2).toMatchSnapshot();
  });
});

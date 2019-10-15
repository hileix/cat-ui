import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import Card from '../Card';
import '../../../styles/card.scss';
import { withInfo } from '@storybook/addon-info';

addDecorator(withInfo);

storiesOf('Card 卡片', module).add('Card', () => (
  <Card>
    Card component
  </Card>
));

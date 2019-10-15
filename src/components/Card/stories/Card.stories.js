import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import Card from '../Card';
import '../../../styles/card.scss';
import { withInfo } from '@storybook/addon-info';
import markdown from '../README.md';


addDecorator(withInfo);

storiesOf('Card 卡片', module).add('Card', () => (
  <Card>
    Card component
  </Card>
), {
  notes: {
    markdown
  }
});

import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import Card from '../Card';
import '../../../styles/card.scss';
import markdown from '../README.md';

storiesOf('Card 卡片', module).add('Card', () => (
  <Card>
    Card component
  </Card>
), {
  notes: {
    markdown
  }
});

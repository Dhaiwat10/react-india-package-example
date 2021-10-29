import React from 'react';
import { storiesOf } from '@storybook/react';
import { Heading } from './Heading';
import { Provider } from '..';

storiesOf('Heading', module)
  .add('Default', () => (
    <Provider>
      <Heading>Hello!</Heading>
    </Provider>
  ))
  .add('Color', () => <Heading color='red'>This should be red</Heading>);

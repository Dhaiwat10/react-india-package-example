import React from 'react';
import { storiesOf } from '@storybook/react';
import { Heading } from './Heading';

storiesOf('Heading', module)
  .add('Default', () => <Heading>Hello!</Heading>)
  .add('Color', () => <Heading color='red'>This should be red</Heading>);

import React from 'react';
import { storiesOf } from '@storybook/react';
import { Input } from './Input';

storiesOf('Input', module)
  .add('Default', () => {
    const [value, setValue] = React.useState('');
    return <Input value={value} onChange={setValue} />;
  })
  .add('With Label', () => {
    const [value, setValue] = React.useState('');
    return <Input value={value} onChange={setValue} label='First name' />;
  });

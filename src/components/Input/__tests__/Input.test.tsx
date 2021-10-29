import React from 'react';
import { Input } from '..';
import { render, fireEvent } from '@testing-library/react';

const SetupInput: React.FC<{ label: string }> = (props) => {
  const [value, setValue] = React.useState('');

  return <Input {...props} value={value} onChange={setValue} />;
};

const setup = () => {
  const utils = render(<SetupInput label='Test' />);
  const input = utils.getByLabelText('Test') as HTMLInputElement;
  return {
    input,
    ...utils,
  };
};

test('It should take in inputs correctly', () => {
  const { input } = setup();
  fireEvent.change(input, { target: { value: '23' } });
  expect(input.value).toBe('23');
});

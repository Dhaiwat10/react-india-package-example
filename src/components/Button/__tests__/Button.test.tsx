import React from 'react';
import { Button } from '..';
import { render } from '@testing-library/react';

describe('Button', () => {
  it('renders', () => {
    const { getByText } = render(<Button>Dhaiwat</Button>);
    const button = getByText('Dhaiwat');
    expect(button).toBeTruthy();
  });
});

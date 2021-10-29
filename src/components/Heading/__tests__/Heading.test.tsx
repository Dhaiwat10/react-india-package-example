import React from 'react';
import { Heading } from '..';
import { render } from '@testing-library/react';

describe('Heading', () => {
  it('renders', () => {
    const { getByText } = render(<Heading>Dhaiwat</Heading>);
    const heading = getByText('Dhaiwat');
    expect(heading).toBeTruthy();
  });

  it('_color_ prop', () => {
    const { getByText } = render(<Heading color='red'>Dhaiwat</Heading>);
    const heading = getByText('Dhaiwat');
    expect(heading).toBeTruthy();
    expect(heading.style.color).toBe('red');
  });
});

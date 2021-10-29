import React from 'react';
import { Provider, ProviderProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: ProviderProps = {
  
};

const setup = (props = defaultProps) => render(<Provider {...props} />);

describe('Provider', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});

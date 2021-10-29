import React from 'react';
import { Heading, HeadingProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: HeadingProps = {
  
};

const setup = (props = defaultProps) => render(<Heading {...props} />);

describe('Heading', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});

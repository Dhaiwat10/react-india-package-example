import React from 'react';
import './heading.scss';

export interface HeadingProps {
  color?: string;
}

export const Heading: React.FC<HeadingProps> = ({ children, color }) => {
  return (
    <h1 className='heading' style={{ color }}>
      {children}
    </h1>
  );
};

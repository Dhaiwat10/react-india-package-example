import React from 'react';
import './button.scss';

export interface ButtonProps {
}

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className='button'>
      {children}
    </button>
  );
};

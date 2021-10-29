import React from 'react';
import './input.scss';

export interface InputProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  required?: boolean;
}

export const Input: React.FC<InputProps> = ({ value, onChange, label, required = false }) => {
  return (
    <div className='input-container'>
      {label && <label htmlFor={label}>{label}</label>}
      <input
        id={label}
        type='text'
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
      />
    </div>
  );
};

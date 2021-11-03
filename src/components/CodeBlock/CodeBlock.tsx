import React from 'react';
import './codeBlock.scss';

export interface CodeBlockProps {}

export const CodeBlock: React.FC<CodeBlockProps> = ({ children }) => {
  return <code className='code-block'>{children}</code>;
};

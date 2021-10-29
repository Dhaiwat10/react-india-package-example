import React from 'react';
import '@fontsource/inter';
import '@fontsource/inter/800.css';

export interface ProviderProps {}

export const Provider: React.FC<ProviderProps> = ({ children }) => {
  return <>{children}</>;
};

import React, { FunctionComponent } from 'react';
import { SymbolProps } from './types';

export const Symbol: FunctionComponent<SymbolProps> = ({
  path,
  color = 'currentColor',
  size = 24,
  viewBoxSize = 24,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
    strokeWidth="1.25"
    stroke={color}
    width={size}
    height={size}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d={path} />
  </svg>
);

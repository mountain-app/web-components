import React, { FunctionComponent } from 'react';
import { SpinnerInternalProps, spinnerSizeMap } from './types';

export const Spinner: FunctionComponent<SpinnerInternalProps> = ({
  size: sizeKey = 'medium',
  ...props
}) => {
  const size = spinnerSizeMap[sizeKey];

  return (
    <svg height={size} width={size} viewBox="0 0 16 16" fill="none" {...props}>
      <circle
        cx="8"
        cy="8"
        r="7"
        stroke="currentColor"
        strokeOpacity="0.25"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M15 8a7.002 7.002 0 00-7-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
};

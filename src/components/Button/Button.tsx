import React, { FunctionComponent } from 'react';
import { ButtonProps } from './types';
import { getButtonStyles } from './styles';

export const Button: FunctionComponent<ButtonProps> = ({
  variant = 'secondary-light',
  size = 'medium',
  expanded,
  sx,
  ...rest
}) => {
  const styles = getButtonStyles(variant, size, expanded, sx);

  return (
    <button className={styles} {...rest}>
      Click me!
    </button>
  );
};

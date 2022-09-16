import React, { FunctionComponent } from 'react';
import { ButtonProps } from './types';
import { getButtonStyles } from './styles';

const Button: FunctionComponent<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  sx,
  ...rest
}) => {
  const styles = getButtonStyles(variant, size, sx);

  return (
    <button className={styles} {...rest}>
      Click me!
    </button>
  );
};

export default Button;

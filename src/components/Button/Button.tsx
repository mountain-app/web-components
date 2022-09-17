import React, { FunctionComponent } from 'react';
import { ButtonProps } from './types';
import { getButtonStyles } from './styles';
import { Symbol } from '../..';

export const Button: FunctionComponent<ButtonProps> = ({
  variant = 'secondary-light',
  size = 'medium',
  expanded,
  leadingIcon,
  trailingIcon,
  sx,
  ...rest
}) => {
  const styles = getButtonStyles(variant, size, expanded, sx);

  return (
    <button className={styles} {...rest}>
      {leadingIcon && <Symbol path={leadingIcon} />}
      <span>Click me!</span>
      {trailingIcon && <Symbol path={trailingIcon} />}
    </button>
  );
};

import React, { forwardRef } from 'react';
import { ButtonProps } from './types';
import { getButtonStyles, getIconSize } from './styles';
import { Symbol } from '../Symbol';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'secondary-light',
      size = 'medium',
      expanded,
      leadingIcon,
      trailingIcon,
      children,
      sx,
      ...rest
    },
    forwardedRef
  ) => {
    const styles = getButtonStyles(variant, size, expanded, sx);
    const iconSize = getIconSize(size);

    return (
      <button ref={forwardedRef} className={styles} {...rest}>
        {leadingIcon && <Symbol path={leadingIcon} size={iconSize} />}
        <span>{children}</span>
        {trailingIcon && <Symbol path={trailingIcon} size={iconSize} />}
      </button>
    );
  }
);

Button.displayName = 'Button';

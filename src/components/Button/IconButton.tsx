import React, { forwardRef } from 'react';
import { getIconButtonStyles, getIconSize } from './styles';
import { IconButtonProps } from './types';
import { Symbol } from '../Symbol';

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    { variant = 'primary', size = 'medium', icon, sx, ...rest },
    forwardedRef
  ) => {
    const styles = getIconButtonStyles(variant, size, sx);
    const iconSize = getIconSize(size);

    return (
      <button ref={forwardedRef} className={styles} {...rest}>
        <Symbol path={icon} size={iconSize} />
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';

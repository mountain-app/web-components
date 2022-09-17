import React, { FunctionComponent } from 'react';
import { getIconButtonStyles } from './styles';
import { IconButtonProps } from './types';
import { Symbol } from '../Symbol';

export const IconButton: FunctionComponent<IconButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  icon,
  sx,
  ...rest
}) => {
  const styles = getIconButtonStyles(variant, size, sx);
  const iconSize = size === 'small' ? '16' : size === 'medium' ? '20' : '24';

  return (
    <button className={styles} {...rest}>
      <Symbol path={icon} size={iconSize} />
    </button>
  );
};

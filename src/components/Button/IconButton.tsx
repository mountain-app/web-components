import React, { FunctionComponent } from 'react';
import { getIconButtonStyles } from './styles';
import { IconButtonProps } from './types';

export const IconButton: FunctionComponent<IconButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  icon,
  sx,
  ...rest
}) => {
  const styles = getIconButtonStyles(variant, size, sx);

  return (
    <button className={styles} {...rest}>
      {icon}
    </button>
  );
};

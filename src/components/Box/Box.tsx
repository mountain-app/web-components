import React, { FunctionComponent, ReactNode } from 'react';
import { A11yProps, StyledComponentProps } from '../types';

export const Box: FunctionComponent<
  StyledComponentProps &
    A11yProps & {
      children?: ReactNode;
    }
> = ({ sx, children, ...rest }) => (
  <div className={sx} role="none" {...rest}>
    {children}
  </div>
);

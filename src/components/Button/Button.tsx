import React, { FunctionComponent } from 'react';
import StyledButton from './Button.styles';
import { ButtonProps } from './types';

const Button: FunctionComponent<ButtonProps> = ({
  onClick,
  children,
  ...rest
}) => (
  <StyledButton type="button" onClick={onClick} {...rest}>
    {children}
  </StyledButton>
);

export default Button;

import React, { FunctionComponent } from 'react';
import StyledButton from './Button.styles';
import { ButtonProps } from './types';

export const Button: FunctionComponent<ButtonProps> = ({
  text,
  onClick,
  ...rest
}) => (
  <StyledButton type="button" onClick={onClick} {...rest}>
    {text}
  </StyledButton>
);

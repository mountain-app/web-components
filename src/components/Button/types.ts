import { HTMLAttributes, ReactNode } from 'react';
import { StyledComponentProps } from '../types';

export type ButtonVariant =
  | 'invisible'
  | 'tertiary'
  | 'secondary-light'
  | 'secondary'
  | 'primary';

export type ButtonSize = 'small' | 'medium' | 'large';

interface BaseButtonProps
  extends StyledComponentProps,
    HTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
}

export interface ButtonProps extends BaseButtonProps {
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  expanded?: boolean;
  children?: ReactNode;
}

export interface IconButtonProps extends ButtonProps {
  icon: ReactNode; // @TODO: use icon type
}

export interface LinkButtonProps extends BaseButtonProps {}

import { HTMLAttributes, ReactNode } from 'react';
import { Icon } from '../../icons';
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
  leadingIcon?: Icon;
  trailingIcon?: Icon;
  expanded?: boolean;
  children?: ReactNode;
}

export interface IconButtonProps extends BaseButtonProps {
  icon: Icon; // @TODO: use icon type
}

export interface LinkButtonProps extends BaseButtonProps {}

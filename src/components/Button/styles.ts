import { ButtonSize, ButtonVariant } from './types';
import { twMerge } from 'tailwind-merge';

const sizeToStyles: {
  [key in ButtonSize]: string;
} = {
  small: 'h-32 px-12 text-sm gap-6',
  medium: 'h-40 px-12 text-sm gap-6',
  large: 'h-48 px-16 text-base gap-8',
};

export const variantToDisabledStyles: {
  [key in ButtonVariant]: string;
} = {
  primary: `
    disabled:bg-gray-3
    disabled:border-gray-3
    disabled:hover:opacity-100
    disabled:active:scale-100
    `,
  'secondary-light': `
    disabled:bg-gray-1
    disabled:border-gray-3
    disabled:text-gray-3
    `,
  secondary: `
    disabled:bg-gray-1
    disabled:border-gray-3
    disabled:text-gray-3
    `,
  tertiary: `
    disabled:bg-gray-3
    disabled:border-gray-3
    `,
  invisible: `
    disabled:bg-white
    disabled:border-white
    disabled:text-gray-3
    `,
};

export const variantToStyles: {
  [key in ButtonVariant]: string;
} = {
  primary: `
    bg-brand-primary 
    border-brand-primary
    text-white
    hover:opacity-90
    active:scale-95
    `,
  'secondary-light': `
    bg-white 
    border-gray-2
    text-gray-9
    hover:bg-gray-1
    hover:border-gray-4
    `,
  secondary: `
    bg-white
    border-gray-10
    text-gray-9
    hover:bg-gray-1
    `,
  tertiary: `
    bg-gray-9
    border-gray-9
    text-white
    `,
  invisible: `
    bg-transparent
    border-transparent
    text-gray-9
    hover:bg-gray-1
    hover:border-gray-1
    `,
};

export const getButtonStyles = (
  variant: ButtonVariant,
  size: ButtonSize,
  sx?: string
) => {
  const baseStyles = `
    border
    rounded-lg
    font-medium
    duration-150
  `;

  const disabledStyles = `disabled:cursor-not-allowed ${variantToDisabledStyles[variant]}`;
  const variantStyles = variantToStyles[variant];
  const sizeStyles = sizeToStyles[size];

  return twMerge(baseStyles, disabledStyles, variantStyles, sizeStyles, sx);
};

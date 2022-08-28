export type SpinnerSize = 'small' | 'medium' | 'large';

export const spinnerSizeMap: {
  [key in SpinnerSize]: string;
} = {
  small: '16px',
  medium: '32px',
  large: '64px',
};

export interface SpinnerInternalProps {
  size?: SpinnerSize;
}

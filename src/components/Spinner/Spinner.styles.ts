import { ComponentProps } from 'react';
import styled from 'styled-components';
import { Spinner } from './Spinner';

export type SpinnerProps = ComponentProps<typeof StyledSpinner>;

const StyledSpinner = styled(Spinner)`
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }

  animation: spin 1s linear infinite;
`;

StyledSpinner.displayName = 'Spinner';

export default StyledSpinner;

import styled from 'styled-components';
import { ButtonProps } from './types';

const StyledButton = styled.button<ButtonProps>`
  color: blue;
  background-color: green;
`;

export default StyledButton;

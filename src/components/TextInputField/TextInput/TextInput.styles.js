// vendors
import styled, { css } from 'styled-components';
import { em, rem } from 'polished';

export const errorStyle = css`
  --color-border-input: var(--color-error);
`;

export const defaultStyle = css`
  --color-border-input: var(--color-border-primary);

  position: relative;
  z-index: 1;

  padding: ${em(14)} ${em(12)};

  font-family: inherit;
  font-size: ${rem(16)};
  line-height: ${24 / 16};

  border: 0;
  border-radius: var(--radius-small);

  box-shadow: inset 0 0 0 1px var(--color-border-input);

  transition: box-shadow var(--animation-speed-fast) ease;

  &:focus {
    outline: 0;
  }

  &:focus,
  &:hover {
    box-shadow: inset 0 0 0 2px var(--color-border-input);
  }

  appearance: none;

  &:disabled {
  }

  ${({ error }) => error && errorStyle};
`;

const StyledTextInput = styled.input`
  ${defaultStyle}
`;

export default StyledTextInput;

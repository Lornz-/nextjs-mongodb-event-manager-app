// vendors
import { rem } from 'polished';
import styled from 'styled-components';

export const IconContainer = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconWrapper = styled.div``;

export const TextWrapper = styled.span``;

/* Default button styled */
const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: var(--btn-padding);

  color: var(--color-primary);
  font-size: ${rem(16)};
  font-weight: 600;
  letter-spacing: var(--letter-spacing-xxs);

  text-align: center;
  text-decoration: none;

  background-color: var(--color-accent);

  border: 2px solid var(--color-accent);
  border-radius: var(--btn-radius-base);
  outline: 0;
  cursor: pointer;

  appearance: none;

  &.active,
  &:focus,
  &:hover:not([disabled]) {
  }

  &[disabled] {
    cursor: not-allowed;
  }
`;

export default StyledButton;

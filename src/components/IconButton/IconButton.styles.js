import { css, styled } from 'styled-components';

export const primaryStyle = css`
  background-color: var(--color-accent);
`;

export const StyledIconButton = styled.button`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  cursor: pointer;

  color: var(--color-primary);

  appearance: none;
  background: none;
  border: 0;
`;

export const IconWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;

  background-color: var(--color-light-grey);
  border-radius: 50px;

  > * {
    height: 24px;
    width: 24px;
  }

  ${({ $primary }) => $primary && primaryStyle}
`;

export const Label = styled.span`
  font-size: var(--font-size-14);
  font-weight: 600;
  letter-spacing: var(--letter-spacing-sm);
`;

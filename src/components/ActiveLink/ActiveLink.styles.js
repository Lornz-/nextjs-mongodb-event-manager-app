import Link from 'next/link';
import { styled } from 'styled-components';

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 12px 16px;

  color: inherit;

  &.active {
    color: var(--color-secondary);
  }
`;

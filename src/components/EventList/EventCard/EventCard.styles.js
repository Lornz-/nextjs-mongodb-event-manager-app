// vendors
import { styled } from 'styled-components';

// components
import Paper from '@/components/Paper';

export const Container = styled.div`
  display: grid;
  grid-template-columns:
    auto minmax(min(200px, 100%), 1fr) minmax(min(200px, 100%), auto)
    minmax(min(200px, 100%), auto);
  /* grid-template-columns: repeat('auto-fit', minmax(min(250px, 100%), 1fr)); */
  gap: var(--container-gutters);
`;

export const StyledEventCard = styled.div``;

export const Wrapper = styled(Paper)`
  &::before {
    background-color: transparent;

    @media (prefers-reduced-motion: no-preference) {
      transition: background-color var(--animation-speed-default) ease;
    }
  }

  &:hover,
  &:focus {
    &::before {
      background-color: var(--color-light-grey);
    }
  }
`;

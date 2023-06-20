// vendors
import { css, styled } from 'styled-components';
import { em, rem } from 'polished';

// components
import Paper from '@/components/Paper';

export const fadedStyle = css`
  opacity: 0.5;

  @media (prefers-reduced-motion: no-preference) {
    transition: opacity var(--animation-speed-default) ease;
  }

  &:hover,
  &:focus {
    opacity: 1;
  }
`;

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

  ${({ $faded }) => $faded && fadedStyle};
`;

export const Description = styled.p`
  font-size: ${rem(15)};
  font-weight: 400;
  line-height: ${18 / 14};

  margin-top: ${em(4)};
`;

export const Date = styled.div`
  font-size: var(--font-size-20);
  font-weight: 600;
`;

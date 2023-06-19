// vendors
import styled from 'styled-components';

// images
import IconPlus from '@/images/IconPlus';

export const Button = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0;
  padding: 0;

  color: currentColor;

  background: none;
  border: 0;
  cursor: pointer;

  appearance: none;

  &:focus {
    outline: 0;
  }

  &::before {
    position: absolute;

    width: calc(100% + 10px);
    height: calc(100% + 10px);

    border: 3px solid;
    border-radius: 50%;
    transform: scale(1.5);

    cursor: default;

    opacity: 0;

    transition: transform var(--animation-speed-fast),
      opacity var(--animation-speed-fast);

    content: '';

    will-change: transform, opacity;
  }

  &:focus::before {
    transform: scale(1);

    opacity: 1;
  }

  span {
    position: absolute;

    word-break: keep-all;

    transform: translateX(-38px);
    opacity: 0;

    transition: transform var(--animation-speed-fast),
      opacity var(--animation-speed-fast);
    transition-delay: var(--animation-speed-fast);

    will-change: transform, opacity;

    @media screen and (prefers-reduced-motion: reduce) {
      transition: none;
    }
  }

  &:hover span,
  &:focus span {
    transform: translateX(-50px);
    opacity: 1;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const IconCross = styled(IconPlus)`
  transform: rotate(45deg);
`;

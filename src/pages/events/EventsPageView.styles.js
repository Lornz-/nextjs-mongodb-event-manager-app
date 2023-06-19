import { css, styled } from 'styled-components';

export const Title = styled.div`
  padding: 16px 0;
  margin: 0 0 16px;

  box-shadow: inset 0 -1px 0 0 var(--color-border-neutral);
`;

export const ModalHeader = styled.header`
  padding: 24px;

  box-shadow: inset 0 -1px 0 0 var(--color-border-neutral);
`;

export const ModalContent = styled.div`
  padding: 24px;
`;

export const modalTitleStyle = css`
  font-size: 1.125rem;
`;

export const h2Style = css`
  font-size: 14px;
`;

export const wrapperStyle = css`
  padding: 40px;

  transform: translate3d(0, -20%, 0);

  transition: transform var(--animation-speed-default) ease;
`;

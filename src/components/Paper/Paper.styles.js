// vendors
import styled, { css } from 'styled-components';

// components
import Box from '../LayoutSections/Box';

const roundedStyle = css`
  border-radius: 16px;
`;

const overlaidStyle = css`
  background-color: transparent;

  &::before {
    background-color: ${({ lightColor, darkColor, invert }) =>
      invert ? darkColor : lightColor};
  }
`;

const elevationStyle = css`
  box-shadow: ${({ $elevation }) => $elevation};
`;

const Container = styled(Box)`
  position: relative;

  &::before {
    position: absolute;
    top: 0;
    left: 0;

    z-index: -1;

    width: 100%;
    height: 100%;

    border-radius: inherit;

    content: '';
  }

  ${({ $rounded }) => $rounded && roundedStyle};

  ${({ $overlaid }) => $overlaid && overlaidStyle};

  ${({ $elevation }) => $elevation && elevationStyle};
`;

export default Container;

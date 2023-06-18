// vendors
import { createGlobalStyle } from 'styled-components';
import { css } from 'styled-components';

// styles
import colors from './colors';
import typography from './typography';
import zIndexes from './zIndexes';
import animations from './animations';

export const rootStyle = css`
  ${colors};

  ${typography};

  ${zIndexes};

  ${animations};

  --container-max-width: 1440px;
  --container-gutters: 16px;
  --header-height: 200px;
  --radius-small: 10px;
  --radius-medium: 16px;
  --radius-large: 24px;

  --foreground-rgb: 0, 0, 0;
  --background-start-rgb: 214, 219, 220;
  --background-end-rgb: 255, 255, 255;

  // button
  --btn-padding: 11px 24px;
  --btn-xs-padding: 1px 8px;
  --btn-sm-padding: 3px 16px;
  --btn-lg-padding: 19px 24px;
  --btn-radius-base: 9999px;
`;

export const htmlStyle = css`
  position: relative;

  width: 100%;

  margin: 0;
  padding: 0;

  /* Do not add overflow: hidden on html style which causing issue with sticky header */
  scroll-behavior: smooth;
`;

export const bodyStyle = css`
  color: rgb(var(--foreground-rgb));
  font-family: var(--font-sans-serif);
  letter-spacing: var(--letter-spacing);

  background-color: white;

  /* &.Modal--open {
    overflow: hidden;
  } */
`;

export const h1Style = css`
  font-size: 2rem;
`;

export const unstyledListStyle = css`
  margin: 0;
  padding: 0;

  list-style: none;
`;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :root {
    ${rootStyle}
  }

  html,
  body {
    max-width: 100vw;
    /* overflow-x: hidden; */
  }

  body {
    ${bodyStyle}
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  /* @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
  } */
`;

export default GlobalStyle;

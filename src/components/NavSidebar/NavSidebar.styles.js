// vendors
import { styled } from 'styled-components';

export const Container = styled.aside`
  position: sticky;
  top: 0;
  height: 100%;
  flex-basis: 240px;
`;

export const Top = styled.div`
  height: 150px;
`;

export const NavWrapper = styled.div``;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;

  svg {
    width: 24px;
    height: 24px;
  }
`;

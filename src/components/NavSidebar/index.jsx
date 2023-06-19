// vendors
import React from 'react';
import Link from 'next/link';

// images
import IconHome from '@/images/IconHome';

// styles
import { Container, Nav, NavWrapper, Top } from './NavSidebar.styles';

const NavSidebar = () => {
  return (
    <Container>
      <Top />

      <NavWrapper>
        <Nav>
          <Link href="/">
            <IconHome />
            <span>Home</span>
          </Link>
        </Nav>
      </NavWrapper>
    </Container>
  );
};

export default NavSidebar;

// vendors
import React from 'react';

// images
import IconCalendar from '@/images/IconCalendar';
import IconHome from '@/images/IconHome';

// components
import ActiveLink from '../ActiveLink';

// styles
import { Container, Nav, NavWrapper, Top } from './NavSidebar.styles';

const NavSidebar = () => {
  return (
    <Container>
      <Top />

      <NavWrapper>
        <Nav>
          <ActiveLink href="/">
            <IconHome />
            <span>Home</span>
          </ActiveLink>
          <ActiveLink href="/events">
            <IconCalendar />
            <span>Events</span>
          </ActiveLink>
        </Nav>
      </NavWrapper>
    </Container>
  );
};

export default NavSidebar;

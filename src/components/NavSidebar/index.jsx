// vendors
import React from 'react';
import Link from 'next/link';

// images
import IconCalendar from '@/images/IconCalendar';
import IconHome from '@/images/IconHome';

// styles
import { Container, Nav, NavWrapper, Top } from './NavSidebar.styles';
import ActiveLink from '../ActiveLink';

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

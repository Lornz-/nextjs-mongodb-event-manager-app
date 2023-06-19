// components
import NavSidebar from '../NavSidebar';
import Navbar from '../Navbar';

// styles
import { Container, ContentWrapper, Wrapper } from './Layout.styles';

const Layout = ({ children }) => {
  return (
    <>
      <Wrapper
        maxWidth="var(--container-max-width)"
        gutters="var(--container-gutters)"
      >
        <Container>
          <NavSidebar />

          <ContentWrapper
            maxWidth="1016px"
            gutters="calc(var(--container-gutters) * 4)"
          >
            <Navbar />

            <main>{children}</main>
          </ContentWrapper>
        </Container>
      </Wrapper>
    </>
  );
};

export default Layout;

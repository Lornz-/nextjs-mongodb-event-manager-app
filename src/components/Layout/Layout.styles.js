// vendors
import { styled } from 'styled-components';

// components
import Center from '../LayoutSections/Center';

export const Wrapper = styled(Center)`
  min-height: 100vh;
`;

export const Container = styled.div`
  display: flex;
`;

export const ContentWrapper = styled(Center)`
  width: 100%;
  box-sizing: border-box;
`;

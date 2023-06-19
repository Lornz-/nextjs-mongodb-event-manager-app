// vendors
import { styled } from 'styled-components';
import { em } from 'polished';

// images
import IconChevron from '@/images/IconChevron';
import { defaultStyle } from '../../TextInputField/TextInput/TextInput.styles';

export const Wrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
`;

export const StyledSelect = styled.select`
  ${defaultStyle};

  background-color: var(--color-white);

  z-index: 0;
  flex-grow: 1;

  width: 100%;
`;

export const Chevron = styled(IconChevron)`
  position: absolute;
  right: 0;
  z-index: 1;

  margin: ${em(14)} ${em(12)};

  width: 15px;
  height: 15px;

  pointer-events: none;
`;

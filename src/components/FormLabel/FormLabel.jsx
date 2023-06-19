// vendors
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { em } from 'polished';

const FormLabel = styled.label`
  position: relative;

  span:first-of-type {
    padding: 0 0 4px;
    font-size: ${em(14)};
  }
`;

FormLabel.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
};
FormLabel.defaultProps = {
  disabled: false,
};

export default FormLabel;

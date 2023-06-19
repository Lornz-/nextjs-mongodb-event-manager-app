// vendors
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledOption = styled.option`
  background-color: var(--color-white);
  color: var(--color-black);

  :disabled {
    /* color: ... */
  }
`;

const SelectOption = ({
  children,
  name,
  value,
  hidden,
  disabled,
  placeholder,
  ...rest
}) => (
  <StyledOption
    name={name}
    value={value}
    hidden={hidden || placeholder}
    disabled={disabled || placeholder}
    {...rest}
  >
    {children}
  </StyledOption>
);

SelectOption.propTypes = {
  value: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  name: PropTypes.string,
  hidden: PropTypes.bool,
  disabled: PropTypes.bool,
  placeholder: PropTypes.bool,
};

SelectOption.defaultProps = {
  name: undefined,
  hidden: false,
  disabled: false,
  placeholder: false,
};

export default SelectOption;

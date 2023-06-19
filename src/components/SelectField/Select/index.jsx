// vendors
import React from 'react';
import PropTypes from 'prop-types';

// styles
import { Chevron, StyledSelect, Wrapper } from './Select.styles';

const Select = ({
  id,
  children,
  name,
  value,
  error,
  disabled,
  multiple,
  onChange,
  onBlur,
  ...rest
}) => {
  const isPlaceholded = children.find(
    ({ props: { value: optionValue, hidden } }) => {
      return hidden && optionValue === value;
    }
  );

  return (
    <Wrapper error={error} {...rest}>
      <StyledSelect
        id={id}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        name={name}
        disabled={disabled}
        error={error}
        isPlaceholder={isPlaceholded}
        multiple={multiple}
      >
        {children}
      </StyledSelect>

      <Chevron aria-hidden />
    </Wrapper>
  );
};

Select.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  multiple: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.string.isRequired,
};

Select.defaultProps = {
  id: null,
  error: false,
  disabled: false,
  multiple: false,
  onChange: () => {},
  onBlur: () => {},
};

export default Select;

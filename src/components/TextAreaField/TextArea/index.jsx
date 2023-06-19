import React from 'react';
import PropTypes from 'prop-types';

import StyledTextArea from './TextArea.styles';

const TextArea = ({
  name,
  value,
  onChange,
  onBlur,
  disabled,
  error,
  placeholder,
  ...props
}) => (
  <StyledTextArea
    name={name}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
    disabled={disabled}
    error={error}
    placeholder={placeholder}
    {...props}
  />
);

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  placeholder: PropTypes.string,
};

TextArea.defaultProps = {
  onChange: () => {},
  onBlur: () => {},
  disabled: false,
  error: false,
  placeholder: null,
};

export default TextArea;

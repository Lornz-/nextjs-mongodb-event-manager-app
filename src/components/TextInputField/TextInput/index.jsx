// vendors
import React from 'react';
import PropTypes from 'prop-types';

// styles
import StyledTextInput from './TextInput.styles';

const TextInput = ({
  inputRef,
  name,
  value,
  onChange,
  onBlur,
  disabled,
  error,
  placeholder,
  type,
  ...props
}) => (
  <StyledTextInput
    ref={inputRef}
    type={type}
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

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'text',
    'email',
    'password',
    'number',
    'phone',
    'url',
    'date',
    'datetime-local',
  ]),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  placeholder: PropTypes.string,
  inputRef: PropTypes.shape({}),
};

TextInput.defaultProps = {
  onChange: undefined,
  onBlur: undefined,
  type: 'text',
  disabled: false,
  error: false,
  placeholder: null,
  inputRef: undefined,
};

export default TextInput;

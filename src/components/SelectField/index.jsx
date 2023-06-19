// vendors
import React from 'react';
import PropTypes from 'prop-types';

// utils
import randomString from '@/utils/math/randomString';

// components
import FormHelperText from '@/components/FormHelperText';
import FormLabel from '@/components/FormLabel';
import Select from './Select';

const SelectField = ({
  label,
  id,
  name,
  value,
  onChange,
  onBlur,
  disabled,
  error,
  placeholder,
  helperText,
  children,
  ...rest
}) => {
  const selectId = id || randomString();
  const helperTextId = helperText ? randomString() : undefined;

  return (
    <>
      <FormLabel
        htmlFor={selectId}
        disabled={disabled}
        css={`
          display: flex;
          flex-flow: column;
        `}
        {...rest}
      >
        <span>{label}</span>

        <Select
          id={selectId}
          aria-describedby={helperTextId}
          name={name}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          error={error}
          onChange={onChange}
          onBlur={onBlur}
        >
          {children}
        </Select>
      </FormLabel>

      {helperText && (
        <FormHelperText id={helperTextId} disabled={disabled} error={error}>
          {helperText}
        </FormHelperText>
      )}
    </>
  );
};

SelectField.propTypes = {
  label: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string,
  type: PropTypes.oneOf([
    'text',
    'email',
    'password',
    'number',
    'phone',
    'url',
  ]),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  error: PropTypes.bool,
  placeholder: PropTypes.string,
  helperText: PropTypes.string,
  maxLength: PropTypes.string,
  inputRef: PropTypes.shape({}),
};

SelectField.defaultProps = {
  onChange: undefined,
  onBlur: undefined,
  type: 'text',
  id: undefined,
  disabled: false,
  required: false,
  error: false,
  placeholder: null,
  helperText: null,
  maxLength: undefined,
  inputRef: undefined,
};

export default SelectField;

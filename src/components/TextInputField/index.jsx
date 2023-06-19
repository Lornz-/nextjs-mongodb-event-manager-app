// vendors
import React from 'react';
import PropTypes from 'prop-types';

// utils
import randomString from '@/utils/math/randomString';

// components
import FormHelperText from '@/components/FormHelperText';
import FormLabel from '@/components/FormLabel';
import TextInput from './TextInput';

const TextInputField = ({
  label,
  inputRef,
  id,
  type,
  name,
  value,
  maxLength,
  onChange,
  onBlur,
  disabled,
  error,
  placeholder,
  helperText,
  ...rest
}) => {
  const inputId = id || randomString();
  const helperTextId = helperText ? randomString() : undefined;

  return (
    <>
      <FormLabel
        htmlFor={inputId}
        disabled={disabled}
        css={`
          display: flex;
          flex-flow: column;
        `}
        {...rest}
      >
        <span>{label}</span>

        <TextInput
          inputRef={inputRef}
          id={inputId}
          aria-describedby={helperTextId}
          type={type}
          name={name}
          value={value}
          maxLength={maxLength}
          placeholder={placeholder}
          disabled={disabled}
          error={error}
          onChange={onChange}
          onBlur={onBlur}
        />
      </FormLabel>

      {helperText ? (
        <FormHelperText id={helperTextId} disabled={disabled} error={error}>
          {helperText}
        </FormHelperText>
      ) : undefined}
    </>
  );
};

TextInputField.propTypes = {
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
    'date',
    'datetime-local',
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

TextInputField.defaultProps = {
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

export default TextInputField;

// vendors
import React from 'react';
import PropTypes from 'prop-types';

// utils
import randomString from '@/utils/math/randomString';

// components
import FormHelperText from '../FormHelperText';
import FormLabel, { formLabelStyles } from '../FormLabel';
import TextArea from './TextArea';

const TextAreaField = ({
  label,
  id,
  name,
  value,
  rows,
  cols,
  wrap,
  minLength,
  maxLength,
  onChange,
  onBlur,
  disabled,
  required,
  error,
  placeholder,
  helperText,
  ...rest
}) => {
  const textAreaId = id || randomString();
  const helperTextId = helperText ? randomString() : undefined;

  return (
    <>
      <FormLabel
        htmlFor={textAreaId}
        disabled={disabled}
        css={`
          display: flex;
          flex-flow: column;

          ${formLabelStyles.floatingLabelStyle};
        `}
        {...rest}
      >
        <span>{label}</span>

        <TextArea
          id={textAreaId}
          name={name}
          value={value}
          rows={rows}
          cols={cols}
          wrap={wrap}
          minLength={minLength}
          maxLength={maxLength}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          error={error}
          placeholder={placeholder}
          required={required}
        />
      </FormLabel>

      {helperText && (
        <FormHelperText id={helperTextId} disabled={disabled} error={error}>
          {helperText}
        </FormHelperText>
      )}
    </>
  );
};

TextAreaField.propTypes = {
  label: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string,
  rows: PropTypes.string,
  cols: PropTypes.string,
  minLength: PropTypes.string,
  maxLength: PropTypes.string,
  wrap: PropTypes.oneOf(['hard', 'soft', 'off']),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  error: PropTypes.bool,
  placeholder: PropTypes.string,
  helperText: PropTypes.string,
};

TextAreaField.defaultProps = {
  onChange: () => {},
  onBlur: () => {},
  id: undefined,
  rows: undefined,
  cols: undefined,
  minLength: undefined,
  maxLength: undefined,
  wrap: undefined,
  disabled: false,
  required: false,
  error: false,
  placeholder: null,
  helperText: null,
};

export default TextAreaField;

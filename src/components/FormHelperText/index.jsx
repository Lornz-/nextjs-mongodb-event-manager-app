// vendors
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { rem } from 'polished';

const errorStyle = css`
  --color-helper-text: var(--color-error);
`;

const disabledStyle = css``;

const errorDisabledStyle = css``;

const FormHelperText = styled.p`
  --color-helper-text: currentColor;

  margin-top: 8px;
  margin-bottom: 0;

  color: var(--color-helper-text);
  font-size: ${rem(14)};

  ${({ disabled }) => disabled && disabledStyle}

  ${({ error }) => error && errorStyle}

  ${({ error, disabled }) => error && disabled && errorDisabledStyle}
`;

export default FormHelperText;

FormHelperText.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
};

FormHelperText.defaultProps = {
  disabled: false,
  error: false,
};

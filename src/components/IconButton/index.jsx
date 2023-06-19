// vendors
import React from 'react';
import PropTypes from 'prop-types';

// styles
import { IconWrapper, Label, StyledIconButton } from './IconButton.styles';

const IconButton = ({ type, label, renderIcon, primary, ...rest }) => {
  const props = {
    type: type || `button`,
    ...rest,
  };
  return (
    <StyledIconButton aria-labelledby="btn-label" {...props}>
      <IconWrapper $primary={primary}>{renderIcon}</IconWrapper>

      <Label id="btn-label">{label}</Label>
    </StyledIconButton>
  );
};

IconButton.propTypes = {
  /**
   * Specifies the type of button
   */
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  /**
   * Specifies the label of the button
   */
  label: PropTypes.string,
  /**
   * Specifies the icon element applied to the button
   */
  renderIcon: PropTypes.node,
  /**
   * Specifies the button should have primary style
   */
  primary: PropTypes.bool,
};

IconButton.defaultProps = {
  type: undefined,
  label: '',
  renderIcon: undefined,
  primary: false,
};

export default IconButton;

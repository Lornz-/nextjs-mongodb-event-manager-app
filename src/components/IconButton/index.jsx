import React from 'react';
import PropTypes from 'prop-types';
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

IconButton.propTypes = {};

export default IconButton;

// vendors
import React from 'react';
import PropTypes from 'prop-types';

// utils
import randomString from '@/utils/math/randomString';

// styles
import { Button, IconCross } from './CloseButton.styles';

const CloseButton = ({ id, onClose, ...rest }) => {
  const buttonId = id || randomString();

  return (
    <Button aria-labelledby={buttonId} onClick={onClose} {...rest}>
      <span id={buttonId}>Close</span>

      <IconCross aria-hidden="true" focusable="false" />
    </Button>
  );
};

CloseButton.propTypes = {
  /**
   * Specifies the id of the button
   */
  id: PropTypes.string,
  /**
   * Specifies the function to be called on close
   */
  onClose: PropTypes.func.isRequired,
};

CloseButton.defaultProps = {
  id: undefined,
};

export default CloseButton;

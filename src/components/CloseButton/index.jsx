// vendors
import React from 'react';
import PropTypes from 'prop-types';

// utils
import randomString from '@/utils/math/randomString';

// styles
import { Button, IconCross } from './CloseButton.styles';

const CloseButton = ({ onClose, ...rest }) => {
  const labelId = randomString();

  return (
    <Button aria-labelledby={labelId} onClick={onClose} {...rest}>
      <span id={labelId}>Close</span>

      <IconCross aria-hidden="true" focusable="false" />
    </Button>
  );
};

CloseButton.propTypes = {
  /**
   * Specifies the function to be called on close
   */
  onClose: PropTypes.func.isRequired,
};

export default CloseButton;

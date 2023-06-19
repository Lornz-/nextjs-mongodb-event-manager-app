// vendors
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// components
import CloseButton from '../CloseButton';

// styles
import colors from '../../styles/colors';
import { StyledModal, ContentWrapper } from './Modal.styles';

const Modal = ({
  fullScreen,
  noBorder,
  noClose,
  noTransition,
  borderWidth,
  bgColor,
  color,
  invert,
  round,
  isOpen,
  onDismiss,
  onClose,
  children,
  ...props
}) => {
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = 'hidden';
    }

    return () => {
      document.documentElement.removeAttribute('style');
    };
  });

  return (
    <StyledModal
      isOpen={isOpen}
      onRequestClose={onDismiss}
      $fullScreen={fullScreen}
      $noBorder={noBorder}
      $noTransition={noTransition}
      $borderWidth={borderWidth}
      $round={round}
      $bgColor={bgColor}
      $color={color}
      $invert={invert}
      preventScroll
      {...props}
    >
      {!noClose && <CloseButton onClose={onClose} darked={bgColor} />}

      <ContentWrapper>{children}</ContentWrapper>
    </StyledModal>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onDismiss: PropTypes.func,
  onClose: PropTypes.func,
  fullScreen: PropTypes.bool,
  round: PropTypes.bool,
  noBorder: PropTypes.bool,
  noClose: PropTypes.bool,
  noTransition: PropTypes.bool,
  borderWidth: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  invert: PropTypes.bool,
};
Modal.defaultProps = {
  onDismiss: () => {},
  onClose: () => {},
  fullScreen: false,
  round: false,
  noBorder: false,
  noClose: false,
  noTransition: false,
  borderWidth: '1px',
  bgColor: undefined,
  color: colors.bleu,
  invert: false,
};

export default Modal;

/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import ReactModal from 'react-modal';

const ReactModalAdapter = ({
  className,
  modalClassName,
  bodyOpenClassName,
  ...props
}) => {
  useEffect(() => {
    ReactModal.setAppElement('#__next');
  });

  return (
    <ReactModal
      className={modalClassName}
      portalClassName={className}
      bodyOpenClassName={bodyOpenClassName}
      {...props}
    />
  );
};

export default ReactModalAdapter;

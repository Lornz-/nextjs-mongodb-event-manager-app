import React, { useMemo, useState, useContext } from 'react';
import PropTypes from 'prop-types';

export const ModalContext = React.createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const value = useMemo(() => ({ open, close, isOpen }), [isOpen]);

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

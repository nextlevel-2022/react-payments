import React from 'react';
import * as Styled from './style.js';

export const Modal = ({ handleModalClose, children }) => {
  const closeModal = (e) => {
    if (e.target !== e.currentTarget) return;

    handleModalClose();
  };

  return (
    <Styled.Modal onClick={closeModal}>
      <Styled.ModalInner>{children}</Styled.ModalInner>
    </Styled.Modal>
  );
};

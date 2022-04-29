import { MouseEventHandler, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

interface RootPortalProps {
  children: ReactNode;
  closeModal: () => void;
}
export default function RootPortal({ children, closeModal }: RootPortalProps) {
  if (typeof window === 'undefined') return null;

  const $rootPortal = document.getElementById('root-portal');

  if (!$rootPortal) return null;

  const onCloseModal: MouseEventHandler<HTMLDivElement> = (event): void => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return createPortal(
    <ModalDimmed onClick={onCloseModal}>
      <ModalContainer>{children}</ModalContainer>
    </ModalDimmed>,
    $rootPortal,
  );
}

const ModalDimmed = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: absolute;

  top: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.5);

  border-radius: 15px;

  z-index: 5;
`;

const ModalContainer = styled.div`
  width: 100%;
  height: 220px;

  border-radius: 5px 5px 15px 15px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  background: #fff;
  z-index: 10;

  animation: bottomUp 0.8s ease;

  @keyframes bottomUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
`;

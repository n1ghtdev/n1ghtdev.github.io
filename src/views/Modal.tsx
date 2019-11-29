import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

export type IModal = {
  children?: any;
  isOpen: boolean;
  closeModal: () => void;
};

export const useModal = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return {
    isOpen,
    openModal,
    closeModal,
  };
};

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

/* DONE: disable scroll
 * document.body.style.overflow = 'hidden';
 * document.body.style.overflow = 'unset';
 * TODO: safari touch event
 */
export const Modal = (props: IModal) => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    document.body.style.paddingRight = `${window.innerWidth -
      document.body.clientWidth}px`;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = 'unset';
    };
  }, []);
  return createPortal(
    <Overlay
      ref={ref}
      onClick={(e: any): void => {
        if (e.target === ref.current) {
          props.closeModal();
        }
      }}
    >
      {props.children}
    </Overlay>,
    document.body,
  );
};

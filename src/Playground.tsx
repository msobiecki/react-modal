import React, { useRef } from 'react';

import Modal from './Modal';

type ModalRefType = {
  openModal: () => void;
  closeModal: () => void;
};

const Playground = () => {
  const modalRef = useRef<ModalRefType>(null);

  return (
    <>
      <button
        onClick={() => {
          if (modalRef.current) modalRef.current.openModal();
        }}
      >
        Open modal
      </button>
      <button
        onClick={() => {
          if (modalRef.current) modalRef.current.closeModal();
        }}
      >
        Close modal
      </button>
      <Modal
        ref={modalRef}
        options={{
          openingDuration: 5000,
          closingDuration: 3000,
          zIndex: 100,
          isOverlay: true,
          isOverlayClosing: true,
          overlayBackground: 'rgba(133,133,233,0.5)',
        }}
        onOpenStart={() => {
          console.log('OPEN_MODAL_START');
        }}
        onOpenEnd={() => {
          console.log('OPEN_MODAL_END');
        }}
        onCloseStart={() => {
          console.log('CLOSE_MODAL_START');
        }}
        onCloseEnd={() => {
          console.log('CLOSE_MODAL_END');
        }}
      >
        test
      </Modal>
    </>
  );
};

export default Playground;

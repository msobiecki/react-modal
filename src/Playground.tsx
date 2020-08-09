import React, { useRef } from 'react';

import Modal from './Modal';

type ModalRefType = {
  openModal: () => void;
  closeModal: () => void;
};

const Playground = () => {
  const modalRef = useRef<ModalRefType>(null);

  console.log(modalRef);

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
        openingDuration={1000}
        closingDuration={1000}
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

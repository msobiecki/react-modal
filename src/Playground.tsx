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
        <div style={{ maxWidth: '640px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          pretium orci eu semper blandit. Fusce bibendum odio eu dolor
          elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris
          lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis
          id diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec
          orci ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus
          enim, eget maximus lorem. Vestibulum ante ipsum primis in faucibus
          orci luctus et ultrices posuere cubilia curae; Pellentesque varius
          eget enim at varius. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Vestibulum pretium orci eu semper blandit. Fusce
          bibendum odio eu dolor elementum, accumsan rhoncus mauris luctus. Sed
          feugiat iaculis mauris lobortis semper. Phasellus ut libero quis quam
          ornare tincidunt quis id diam. Pellentesque luctus libero ut dignissim
          iaculis. Quisque nec orci ullamcorper, pretium quam eu, gravida ipsum.
          Morbi at faucibus enim, eget maximus lorem. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Pellentesque varius eget enim at varius. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Vestibulum pretium orci eu semper
          blandit. Fusce bibendum odio eu dolor elementum, accumsan rhoncus
          mauris luctus. Sed feugiat iaculis mauris lobortis semper. Phasellus
          ut libero quis quam ornare tincidunt quis id diam. Pellentesque luctus
          libero ut dignissim iaculis. Quisque nec orci ullamcorper, pretium
          quam eu, gravida ipsum. Morbi at faucibus enim, eget maximus lorem.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Pellentesque varius eget enim at varius. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium
          orci eu semper blandit. Fusce bibendum odio eu dolor elementum,
          accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris lobortis
          semper. Phasellus ut libero quis quam ornare tincidunt quis id diam.
          Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci
          ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim,
          eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Pellentesque varius eget
          enim at varius.
        </div>
      </Modal>
    </>
  );
};

export default Playground;

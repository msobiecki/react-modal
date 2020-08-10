import React from 'react';
import Modal from './Modal';

export default {
  title: 'Modal',
  component: Modal,
};

function ModalWrapper(props) {
  const modalRef = React.useRef(null);
  return (
    <>
      <button
        onClick={() => {
          if (modalRef.current) modalRef.current.openModal();
        }}
      >
        Open modal
      </button>
      <Modal ref={modalRef} {...props}>
        TEST CONTENT MODAL TEST CONTENT MODAL
      </Modal>
    </>
  );
}

export const MODAL_INITIAL = () => <ModalWrapper />;

MODAL_INITIAL.story = {
  name: '[1] Initial',
};

export const MODAL_CUSTOM_DURATION = () => (
  <ModalWrapper
    options={{
      openingDuration: 5000,
      closingDuration: 3000,
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
  />
);

MODAL_CUSTOM_DURATION.story = {
  name: '[2] Custom duration',
};

export const MODAL_CUSTOM_Z_INDEX = () => (
  <ModalWrapper
    options={{
      zIndex: 10,
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
  />
);

MODAL_CUSTOM_Z_INDEX.story = {
  name: '[3] Custom z index',
};

export const MODAL_WITH_OVERLAY = () => (
  <ModalWrapper
    options={{
      isOverlay: true,
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
  />
);

MODAL_WITH_OVERLAY.story = {
  name: '[4] With overlay',
};

export const MODAL_WITH_CUSTOM_OVERLAY = () => (
  <ModalWrapper
    options={{
      isOverlay: true,
      overlayPadding: '20px 10px 30px 40px',
      overlayBackground: 'rgba(111, 222, 121, 0.8)',
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
  />
);

MODAL_WITH_CUSTOM_OVERLAY.story = {
  name: '[5] With custom overlay',
};

export const MODAL_WITH_PREVENT_CLOSE_OVERLAY = () => (
  <ModalWrapper
    options={{
      isOverlay: true,
      isOverlayClosing: false,
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
  />
);

MODAL_WITH_PREVENT_CLOSE_OVERLAY.story = {
  name: '[6] With prevent close overlay',
};

export const MODAL_WITH_CUSTOM_PANEL = () => (
  <ModalWrapper
    options={{
      panelBorderRadius: '20px 30px 10px 40px',
      panelBorder: '5px solid #332321',
      panelBackground: 'rgba(155,155,155,1)',
      panelBoxShadow: '0 0 5px 0 rgba(0, 0, 0, .2)',
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
  />
);

MODAL_WITH_CUSTOM_PANEL.story = {
  name: '[7] With custom panel',
};

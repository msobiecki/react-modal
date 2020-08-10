import React from 'react';
import Modal from './Modal';

export default {
  title: 'Modal',
  component: Modal,
};

function ModalContent({ children }) {
  return (
    <>
      {children ? (
        children
      ) : (
        <>
          TEST MODAL CONTENT TEST MODAL CONTENT
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          TEST MODAL CONTENT TEST MODAL CONTENT
        </>
      )}
    </>
  );
}

function ModalWrapper({ children, ...rest }) {
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
      <Modal ref={modalRef} {...rest}>
        {children}
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
  >
    <ModalContent />
  </ModalWrapper>
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
  >
    <ModalContent />
  </ModalWrapper>
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
  >
    <ModalContent />
  </ModalWrapper>
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
  >
    <ModalContent />
  </ModalWrapper>
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
  >
    <ModalContent />
  </ModalWrapper>
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
  >
    <ModalContent />
  </ModalWrapper>
);

MODAL_WITH_CUSTOM_PANEL.story = {
  name: '[7] With custom panel',
};

export const MODAL_WITH_RESTRICTED_CHILDREN_WIDTH = () => (
  <ModalWrapper
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
    <ModalContent>
      <div style={{ width: '100%', maxWidth: '640px' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        pretium orci eu semper blandit. Fusce bibendum odio eu dolor elementum,
        accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris lobortis
        semper. Phasellus ut libero quis quam ornare tincidunt quis id diam.
        Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci
        ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim,
        eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci luctus
        et ultrices posuere cubilia curae; Pellentesque varius eget enim at
        varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vestibulum pretium orci eu semper blandit. Fusce bibendum odio eu dolor
        elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris
        lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis id
        diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci
        ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim,
        eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci luctus
        et ultrices posuere cubilia curae; Pellentesque varius eget enim at
        varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vestibulum pretium orci eu semper blandit. Fusce bibendum odio eu dolor
        elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris
        lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis id
        diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci
        ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim,
        eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci luctus
        et ultrices posuere cubilia curae; Pellentesque varius eget enim at
        varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vestibulum pretium orci eu semper blandit. Fusce bibendum odio eu dolor
        elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris
        lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis id
        diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci
        ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim,
        eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci luctus
        et ultrices posuere cubilia curae; Pellentesque varius eget enim at
        varius.
      </div>
    </ModalContent>
  </ModalWrapper>
);

MODAL_WITH_RESTRICTED_CHILDREN_WIDTH.story = {
  name: '[8] With restricted children width',
};

export const MODAL_WITH_OVERLAY_WITH_RESTRICTED_CHILDREN_WIDTH = () => (
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
  >
    <ModalContent>
      <div style={{ width: '100%', maxWidth: '640px' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        pretium orci eu semper blandit. Fusce bibendum odio eu dolor elementum,
        accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris lobortis
        semper. Phasellus ut libero quis quam ornare tincidunt quis id diam.
        Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci
        ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim,
        eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci luctus
        et ultrices posuere cubilia curae; Pellentesque varius eget enim at
        varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vestibulum pretium orci eu semper blandit. Fusce bibendum odio eu dolor
        elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris
        lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis id
        diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci
        ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim,
        eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci luctus
        et ultrices posuere cubilia curae; Pellentesque varius eget enim at
        varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vestibulum pretium orci eu semper blandit. Fusce bibendum odio eu dolor
        elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris
        lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis id
        diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci
        ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim,
        eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci luctus
        et ultrices posuere cubilia curae; Pellentesque varius eget enim at
        varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vestibulum pretium orci eu semper blandit. Fusce bibendum odio eu dolor
        elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris
        lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis id
        diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci
        ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim,
        eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci luctus
        et ultrices posuere cubilia curae; Pellentesque varius eget enim at
        varius.
      </div>
    </ModalContent>
  </ModalWrapper>
);

MODAL_WITH_OVERLAY_WITH_RESTRICTED_CHILDREN_WIDTH.story = {
  name: '[9] With overlay with restricted children width',
};

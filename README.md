# React modal

A beautiful, materialized and flexible React Modal component

### Usage

```
import Modal from '@salimike/react-modal'

() => (
  <Modal
    options={{
      openingDuration: 200,
      closingDuration: 200,
      zIndex: 9999,
      isOverlay: false,
      isOverlayClosing: true,
      overlayPadding: '20px',
      overlayBackground: 'rgba(0,0,0,.25)',
      isPanelCloseButton: true,
      isPanelRestrictedSize: false,
      panelRestrictedWidth: '100%',
      panelRestrictedHeight: '100%',
      panelWidth: 'initial',
      panelHeight: 'initial',
      panelBorderRadius: '25px',
      panelBorder: 'none',
      panelBackground: 'rgba(255,255,255,1)',
      panelBoxShadow: '0 3px 6px 0 rgba(0,0,0,.15)',
      panelPadding: '25px',
    }}
    onOpenStart={() => {
      // On open start modal trigger
      console.log("OPEN_MODAL_START");
    }}
    onOpenEnd={() => {
      // On open end modal trigger
      console.log("OPEN_MODAL_END");
    }}
    onCloseStart={() => {
      // On close start modal trigger
      console.log("CLOSE_MODAL_START");
    }}
    onCloseEnd={() => {
      // On close end modal trigger
      console.log("CLOSE_MODAL_END");
    }}
  >
    // Modal content
  </Modal>
)
```

## Examples

![https://i.imgur.com/jAGTYr5.gif]

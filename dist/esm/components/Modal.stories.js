function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from "react";
import { Modal } from "./Modal";
export default {
  title: "Modal",
  component: Modal
};

function ModalContent({
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, children ? children : /*#__PURE__*/React.createElement(React.Fragment, null, "TEST MODAL CONTENT TEST MODAL CONTENT", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "TEST MODAL CONTENT TEST MODAL CONTENT"));
}

function ModalWrapper(_ref) {
  let {
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children"]);

  const modalRef = React.useRef(null);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      if (modalRef.current) modalRef.current.openModal();
    }
  }, "Open modal"), /*#__PURE__*/React.createElement(Modal, _extends({
    ref: modalRef
  }, rest), children));
}

export const MODAL_INITIAL = () => /*#__PURE__*/React.createElement(ModalWrapper, null, /*#__PURE__*/React.createElement(ModalContent, null));
MODAL_INITIAL.story = {
  name: "[1] Initial"
};
export const MODAL_CUSTOM_DURATION = () => /*#__PURE__*/React.createElement(ModalWrapper, {
  options: {
    openingDuration: 5000,
    closingDuration: 3000
  },
  onOpenStart: () => {
    console.log("OPEN_MODAL_START");
  },
  onOpenEnd: () => {
    console.log("OPEN_MODAL_END");
  },
  onCloseStart: () => {
    console.log("CLOSE_MODAL_START");
  },
  onCloseEnd: () => {
    console.log("CLOSE_MODAL_END");
  }
}, /*#__PURE__*/React.createElement(ModalContent, null));
MODAL_CUSTOM_DURATION.story = {
  name: "[2] Custom duration"
};
export const MODAL_CUSTOM_Z_INDEX = () => /*#__PURE__*/React.createElement(ModalWrapper, {
  options: {
    zIndex: 10
  },
  onOpenStart: () => {
    console.log("OPEN_MODAL_START");
  },
  onOpenEnd: () => {
    console.log("OPEN_MODAL_END");
  },
  onCloseStart: () => {
    console.log("CLOSE_MODAL_START");
  },
  onCloseEnd: () => {
    console.log("CLOSE_MODAL_END");
  }
}, /*#__PURE__*/React.createElement(ModalContent, null));
MODAL_CUSTOM_Z_INDEX.story = {
  name: "[3] Custom z index"
};
export const MODAL_WITH_OVERLAY = () => /*#__PURE__*/React.createElement(ModalWrapper, {
  options: {
    isOverlay: true,
    openingDuration: 5000,
    closingDuration: 3000
  },
  onOpenStart: () => {
    console.log("OPEN_MODAL_START");
  },
  onOpenEnd: () => {
    console.log("OPEN_MODAL_END");
  },
  onCloseStart: () => {
    console.log("CLOSE_MODAL_START");
  },
  onCloseEnd: () => {
    console.log("CLOSE_MODAL_END");
  }
}, /*#__PURE__*/React.createElement(ModalContent, null));
MODAL_WITH_OVERLAY.story = {
  name: "[4] With overlay"
};
export const MODAL_WITH_CUSTOM_OVERLAY = () => /*#__PURE__*/React.createElement(ModalWrapper, {
  options: {
    isOverlay: true,
    overlayPadding: "20px 10px 30px 40px",
    overlayBackground: "rgba(111, 222, 121, 0.8)"
  },
  onOpenStart: () => {
    console.log("OPEN_MODAL_START");
  },
  onOpenEnd: () => {
    console.log("OPEN_MODAL_END");
  },
  onCloseStart: () => {
    console.log("CLOSE_MODAL_START");
  },
  onCloseEnd: () => {
    console.log("CLOSE_MODAL_END");
  }
}, /*#__PURE__*/React.createElement(ModalContent, null));
MODAL_WITH_CUSTOM_OVERLAY.story = {
  name: "[5] With custom overlay"
};
export const MODAL_WITH_PREVENT_CLOSE_OVERLAY = () => /*#__PURE__*/React.createElement(ModalWrapper, {
  options: {
    isOverlay: true,
    isOverlayClosing: false
  },
  onOpenStart: () => {
    console.log("OPEN_MODAL_START");
  },
  onOpenEnd: () => {
    console.log("OPEN_MODAL_END");
  },
  onCloseStart: () => {
    console.log("CLOSE_MODAL_START");
  },
  onCloseEnd: () => {
    console.log("CLOSE_MODAL_END");
  }
}, /*#__PURE__*/React.createElement(ModalContent, null));
MODAL_WITH_PREVENT_CLOSE_OVERLAY.story = {
  name: "[6] With prevent close overlay"
};
export const MODAL_WITH_CUSTOM_PANEL = () => /*#__PURE__*/React.createElement(ModalWrapper, {
  options: {
    panelBorderRadius: "20px 30px 10px 40px",
    panelBorder: "5px solid #332321",
    panelBackground: "rgba(155,155,155,1)",
    panelBoxShadow: "0 0 5px 0 rgba(0, 0, 0, .2)"
  },
  onOpenStart: () => {
    console.log("OPEN_MODAL_START");
  },
  onOpenEnd: () => {
    console.log("OPEN_MODAL_END");
  },
  onCloseStart: () => {
    console.log("CLOSE_MODAL_START");
  },
  onCloseEnd: () => {
    console.log("CLOSE_MODAL_END");
  }
}, /*#__PURE__*/React.createElement(ModalContent, null));
MODAL_WITH_CUSTOM_PANEL.story = {
  name: "[7] With custom panel"
};
export const MODAL_WITH_RESTRICTED_CHILDREN_WIDTH = () => /*#__PURE__*/React.createElement(ModalWrapper, {
  onOpenStart: () => {
    console.log("OPEN_MODAL_START");
  },
  onOpenEnd: () => {
    console.log("OPEN_MODAL_END");
  },
  onCloseStart: () => {
    console.log("CLOSE_MODAL_START");
  },
  onCloseEnd: () => {
    console.log("CLOSE_MODAL_END");
  }
}, /*#__PURE__*/React.createElement(ModalContent, null, /*#__PURE__*/React.createElement("div", {
  style: {
    width: "100%",
    maxWidth: "640px"
  }
}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium orci eu semper blandit. Fusce bibendum odio eu dolor elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis id diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim, eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque varius eget enim at varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium orci eu semper blandit. Fusce bibendum odio eu dolor elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis id diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim, eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque varius eget enim at varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium orci eu semper blandit. Fusce bibendum odio eu dolor elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis id diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim, eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque varius eget enim at varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium orci eu semper blandit. Fusce bibendum odio eu dolor elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis id diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim, eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque varius eget enim at varius.")));
MODAL_WITH_RESTRICTED_CHILDREN_WIDTH.story = {
  name: "[8] With restricted children width"
};
export const MODAL_WITH_OVERLAY_WITH_RESTRICTED_CHILDREN_WIDTH = () => /*#__PURE__*/React.createElement(ModalWrapper, {
  options: {
    isOverlay: true
  },
  onOpenStart: () => {
    console.log("OPEN_MODAL_START");
  },
  onOpenEnd: () => {
    console.log("OPEN_MODAL_END");
  },
  onCloseStart: () => {
    console.log("CLOSE_MODAL_START");
  },
  onCloseEnd: () => {
    console.log("CLOSE_MODAL_END");
  }
}, /*#__PURE__*/React.createElement(ModalContent, null, /*#__PURE__*/React.createElement("div", {
  style: {
    width: "100%",
    maxWidth: "640px"
  }
}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium orci eu semper blandit. Fusce bibendum odio eu dolor elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis id diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim, eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque varius eget enim at varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium orci eu semper blandit. Fusce bibendum odio eu dolor elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis id diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim, eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque varius eget enim at varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium orci eu semper blandit. Fusce bibendum odio eu dolor elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis id diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim, eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque varius eget enim at varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium orci eu semper blandit. Fusce bibendum odio eu dolor elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis id diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim, eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque varius eget enim at varius.")));
MODAL_WITH_OVERLAY_WITH_RESTRICTED_CHILDREN_WIDTH.story = {
  name: "[9] With overlay with restricted children width"
};
export const MODAL_WITH_RESTRICTED_CHILDREN_WIDTH_WITH_RESTRICTED_PANEL_SIZE = () => /*#__PURE__*/React.createElement(ModalWrapper, {
  options: {
    isPanelRestrictedSize: true
  },
  onOpenStart: () => {
    console.log("OPEN_MODAL_START");
  },
  onOpenEnd: () => {
    console.log("OPEN_MODAL_END");
  },
  onCloseStart: () => {
    console.log("CLOSE_MODAL_START");
  },
  onCloseEnd: () => {
    console.log("CLOSE_MODAL_END");
  }
}, /*#__PURE__*/React.createElement(ModalContent, null, /*#__PURE__*/React.createElement("div", {
  style: {
    width: "100%",
    maxWidth: "640px"
  }
}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium orci eu semper blandit. Fusce bibendum odio eu dolor elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis id diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim, eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque varius eget enim at varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium orci eu semper blandit. Fusce bibendum odio eu dolor elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis id diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim, eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque varius eget enim at varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium orci eu semper blandit. Fusce bibendum odio eu dolor elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis id diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim, eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque varius eget enim at varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium orci eu semper blandit. Fusce bibendum odio eu dolor elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis id diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim, eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque varius eget enim at varius.")));
MODAL_WITH_RESTRICTED_CHILDREN_WIDTH_WITH_RESTRICTED_PANEL_SIZE.story = {
  name: "[10] With restricted children width with restricted panel size"
};
export const MODAL_WITH_OVERLAY_WITH_RESTRICTED_CHILDREN_WIDTH_WITH_RESTRICTED_PANEL_SIZE = () => /*#__PURE__*/React.createElement(ModalWrapper, {
  options: {
    isOverlay: true,
    isPanelRestrictedSize: true
  },
  onOpenStart: () => {
    console.log("OPEN_MODAL_START");
  },
  onOpenEnd: () => {
    console.log("OPEN_MODAL_END");
  },
  onCloseStart: () => {
    console.log("CLOSE_MODAL_START");
  },
  onCloseEnd: () => {
    console.log("CLOSE_MODAL_END");
  }
}, /*#__PURE__*/React.createElement(ModalContent, null, /*#__PURE__*/React.createElement("div", {
  style: {
    width: "100%",
    maxWidth: "640px"
  }
}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium orci eu semper blandit. Fusce bibendum odio eu dolor elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis id diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim, eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque varius eget enim at varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium orci eu semper blandit. Fusce bibendum odio eu dolor elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis id diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim, eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque varius eget enim at varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium orci eu semper blandit. Fusce bibendum odio eu dolor elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis id diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim, eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque varius eget enim at varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium orci eu semper blandit. Fusce bibendum odio eu dolor elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis id diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim, eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque varius eget enim at varius.")));
MODAL_WITH_OVERLAY_WITH_RESTRICTED_CHILDREN_WIDTH_WITH_RESTRICTED_PANEL_SIZE.story = {
  name: "[11] With overlay with restricted children width with restricted panel size"
};
export const MODAL_WITH_FULLSCREN_PANEL_WIDTH_AND_HEIGHT_WITH_RESTRICTED_PANEL_SIZE = () => /*#__PURE__*/React.createElement(ModalWrapper, {
  options: {
    isPanelRestrictedSize: true,
    panelWidth: "100%",
    panelHeight: "100%"
  },
  onOpenStart: () => {
    console.log("OPEN_MODAL_START");
  },
  onOpenEnd: () => {
    console.log("OPEN_MODAL_END");
  },
  onCloseStart: () => {
    console.log("CLOSE_MODAL_START");
  },
  onCloseEnd: () => {
    console.log("CLOSE_MODAL_END");
  }
}, /*#__PURE__*/React.createElement(ModalContent, null, /*#__PURE__*/React.createElement("div", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium orci eu semper blandit. Fusce bibendum odio eu dolor elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis id diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim, eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque varius eget enim at varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium orci eu semper blandit. Fusce bibendum odio eu dolor elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis id diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim, eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque varius eget enim at varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium orci eu semper blandit. Fusce bibendum odio eu dolor elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis id diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim, eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque varius eget enim at varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium orci eu semper blandit. Fusce bibendum odio eu dolor elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis id diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim, eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque varius eget enim at varius.")));
MODAL_WITH_FULLSCREN_PANEL_WIDTH_AND_HEIGHT_WITH_RESTRICTED_PANEL_SIZE.story = {
  name: "[12] With fullscreen panel width and height with restricted panel size"
};
export const MODAL_WITH_OVERLAY_WITH_FULLSCREEN_PANEL_WIDTH_AND_HEIGHT_WITH_RESTRICTED_PANEL_SIZE = () => /*#__PURE__*/React.createElement(ModalWrapper, {
  options: {
    isOverlay: true,
    isPanelRestrictedSize: true,
    panelWidth: "100%",
    panelHeight: "100%"
  },
  onOpenStart: () => {
    console.log("OPEN_MODAL_START");
  },
  onOpenEnd: () => {
    console.log("OPEN_MODAL_END");
  },
  onCloseStart: () => {
    console.log("CLOSE_MODAL_START");
  },
  onCloseEnd: () => {
    console.log("CLOSE_MODAL_END");
  }
}, /*#__PURE__*/React.createElement(ModalContent, null, /*#__PURE__*/React.createElement("div", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium orci eu semper blandit. Fusce bibendum odio eu dolor elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis id diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim, eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque varius eget enim at varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium orci eu semper blandit. Fusce bibendum odio eu dolor elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis id diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim, eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque varius eget enim at varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium orci eu semper blandit. Fusce bibendum odio eu dolor elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis id diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim, eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque varius eget enim at varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium orci eu semper blandit. Fusce bibendum odio eu dolor elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis id diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim, eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque varius eget enim at varius.")));
MODAL_WITH_OVERLAY_WITH_FULLSCREEN_PANEL_WIDTH_AND_HEIGHT_WITH_RESTRICTED_PANEL_SIZE.story = {
  name: "[13] With overlay with fullcreen panel width and height with restricted panel size"
};
export const MODAL_WITHOUT_CLOSE_BUTTON = () => /*#__PURE__*/React.createElement(ModalWrapper, {
  options: {
    isPanelCloseButton: false
  },
  onOpenStart: () => {
    console.log("OPEN_MODAL_START");
  },
  onOpenEnd: () => {
    console.log("OPEN_MODAL_END");
  },
  onCloseStart: () => {
    console.log("CLOSE_MODAL_START");
  },
  onCloseEnd: () => {
    console.log("CLOSE_MODAL_END");
  }
}, /*#__PURE__*/React.createElement(ModalContent, null));
MODAL_WITHOUT_CLOSE_BUTTON.story = {
  name: "[14] Without close button"
};
//# sourceMappingURL=Modal.stories.js.map
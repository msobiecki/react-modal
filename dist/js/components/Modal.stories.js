"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MODAL_WITHOUT_CLOSE_BUTTON = exports.MODAL_WITH_OVERLAY_WITH_FULLSCREEN_PANEL_WIDTH_AND_HEIGHT_WITH_RESTRICTED_PANEL_SIZE = exports.MODAL_WITH_FULLSCREN_PANEL_WIDTH_AND_HEIGHT_WITH_RESTRICTED_PANEL_SIZE = exports.MODAL_WITH_OVERLAY_WITH_RESTRICTED_CHILDREN_WIDTH_WITH_RESTRICTED_PANEL_SIZE = exports.MODAL_WITH_RESTRICTED_CHILDREN_WIDTH_WITH_RESTRICTED_PANEL_SIZE = exports.MODAL_WITH_OVERLAY_WITH_RESTRICTED_CHILDREN_WIDTH = exports.MODAL_WITH_RESTRICTED_CHILDREN_WIDTH = exports.MODAL_WITH_CUSTOM_PANEL = exports.MODAL_WITH_PREVENT_CLOSE_OVERLAY = exports.MODAL_WITH_CUSTOM_OVERLAY = exports.MODAL_WITH_OVERLAY = exports.MODAL_CUSTOM_Z_INDEX = exports.MODAL_CUSTOM_DURATION = exports.MODAL_INITIAL = exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Modal = require("./Modal");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _default = {
  title: "Modal",
  component: _Modal.Modal
};
exports.default = _default;

function ModalContent(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(React.Fragment, null, children ? children : /*#__PURE__*/React.createElement(React.Fragment, null, "TEST MODAL CONTENT TEST MODAL CONTENT", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "TEST MODAL CONTENT TEST MODAL CONTENT"));
}

function ModalWrapper(_ref2) {
  var children = _ref2.children,
      rest = _objectWithoutProperties(_ref2, ["children"]);

  var modalRef = React.useRef(null);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      if (modalRef.current) modalRef.current.openModal();
    }
  }, "Open modal"), /*#__PURE__*/React.createElement(_Modal.Modal, _extends({
    ref: modalRef
  }, rest), children));
}

var MODAL_INITIAL = function MODAL_INITIAL() {
  return /*#__PURE__*/React.createElement(ModalWrapper, null, /*#__PURE__*/React.createElement(ModalContent, null));
};

exports.MODAL_INITIAL = MODAL_INITIAL;
MODAL_INITIAL.story = {
  name: "[1] Initial"
};

var MODAL_CUSTOM_DURATION = function MODAL_CUSTOM_DURATION() {
  return /*#__PURE__*/React.createElement(ModalWrapper, {
    options: {
      openingDuration: 5000,
      closingDuration: 3000
    },
    onOpenStart: function onOpenStart() {
      console.log("OPEN_MODAL_START");
    },
    onOpenEnd: function onOpenEnd() {
      console.log("OPEN_MODAL_END");
    },
    onCloseStart: function onCloseStart() {
      console.log("CLOSE_MODAL_START");
    },
    onCloseEnd: function onCloseEnd() {
      console.log("CLOSE_MODAL_END");
    }
  }, /*#__PURE__*/React.createElement(ModalContent, null));
};

exports.MODAL_CUSTOM_DURATION = MODAL_CUSTOM_DURATION;
MODAL_CUSTOM_DURATION.story = {
  name: "[2] Custom duration"
};

var MODAL_CUSTOM_Z_INDEX = function MODAL_CUSTOM_Z_INDEX() {
  return /*#__PURE__*/React.createElement(ModalWrapper, {
    options: {
      zIndex: 10
    },
    onOpenStart: function onOpenStart() {
      console.log("OPEN_MODAL_START");
    },
    onOpenEnd: function onOpenEnd() {
      console.log("OPEN_MODAL_END");
    },
    onCloseStart: function onCloseStart() {
      console.log("CLOSE_MODAL_START");
    },
    onCloseEnd: function onCloseEnd() {
      console.log("CLOSE_MODAL_END");
    }
  }, /*#__PURE__*/React.createElement(ModalContent, null));
};

exports.MODAL_CUSTOM_Z_INDEX = MODAL_CUSTOM_Z_INDEX;
MODAL_CUSTOM_Z_INDEX.story = {
  name: "[3] Custom z index"
};

var MODAL_WITH_OVERLAY = function MODAL_WITH_OVERLAY() {
  return /*#__PURE__*/React.createElement(ModalWrapper, {
    options: {
      isOverlay: true,
      openingDuration: 5000,
      closingDuration: 3000
    },
    onOpenStart: function onOpenStart() {
      console.log("OPEN_MODAL_START");
    },
    onOpenEnd: function onOpenEnd() {
      console.log("OPEN_MODAL_END");
    },
    onCloseStart: function onCloseStart() {
      console.log("CLOSE_MODAL_START");
    },
    onCloseEnd: function onCloseEnd() {
      console.log("CLOSE_MODAL_END");
    }
  }, /*#__PURE__*/React.createElement(ModalContent, null));
};

exports.MODAL_WITH_OVERLAY = MODAL_WITH_OVERLAY;
MODAL_WITH_OVERLAY.story = {
  name: "[4] With overlay"
};

var MODAL_WITH_CUSTOM_OVERLAY = function MODAL_WITH_CUSTOM_OVERLAY() {
  return /*#__PURE__*/React.createElement(ModalWrapper, {
    options: {
      isOverlay: true,
      overlayPadding: "20px 10px 30px 40px",
      overlayBackground: "rgba(111, 222, 121, 0.8)"
    },
    onOpenStart: function onOpenStart() {
      console.log("OPEN_MODAL_START");
    },
    onOpenEnd: function onOpenEnd() {
      console.log("OPEN_MODAL_END");
    },
    onCloseStart: function onCloseStart() {
      console.log("CLOSE_MODAL_START");
    },
    onCloseEnd: function onCloseEnd() {
      console.log("CLOSE_MODAL_END");
    }
  }, /*#__PURE__*/React.createElement(ModalContent, null));
};

exports.MODAL_WITH_CUSTOM_OVERLAY = MODAL_WITH_CUSTOM_OVERLAY;
MODAL_WITH_CUSTOM_OVERLAY.story = {
  name: "[5] With custom overlay"
};

var MODAL_WITH_PREVENT_CLOSE_OVERLAY = function MODAL_WITH_PREVENT_CLOSE_OVERLAY() {
  return /*#__PURE__*/React.createElement(ModalWrapper, {
    options: {
      isOverlay: true,
      isOverlayClosing: false
    },
    onOpenStart: function onOpenStart() {
      console.log("OPEN_MODAL_START");
    },
    onOpenEnd: function onOpenEnd() {
      console.log("OPEN_MODAL_END");
    },
    onCloseStart: function onCloseStart() {
      console.log("CLOSE_MODAL_START");
    },
    onCloseEnd: function onCloseEnd() {
      console.log("CLOSE_MODAL_END");
    }
  }, /*#__PURE__*/React.createElement(ModalContent, null));
};

exports.MODAL_WITH_PREVENT_CLOSE_OVERLAY = MODAL_WITH_PREVENT_CLOSE_OVERLAY;
MODAL_WITH_PREVENT_CLOSE_OVERLAY.story = {
  name: "[6] With prevent close overlay"
};

var MODAL_WITH_CUSTOM_PANEL = function MODAL_WITH_CUSTOM_PANEL() {
  return /*#__PURE__*/React.createElement(ModalWrapper, {
    options: {
      panelBorderRadius: "20px 30px 10px 40px",
      panelBorder: "5px solid #332321",
      panelBackground: "rgba(155,155,155,1)",
      panelBoxShadow: "0 0 5px 0 rgba(0, 0, 0, .2)"
    },
    onOpenStart: function onOpenStart() {
      console.log("OPEN_MODAL_START");
    },
    onOpenEnd: function onOpenEnd() {
      console.log("OPEN_MODAL_END");
    },
    onCloseStart: function onCloseStart() {
      console.log("CLOSE_MODAL_START");
    },
    onCloseEnd: function onCloseEnd() {
      console.log("CLOSE_MODAL_END");
    }
  }, /*#__PURE__*/React.createElement(ModalContent, null));
};

exports.MODAL_WITH_CUSTOM_PANEL = MODAL_WITH_CUSTOM_PANEL;
MODAL_WITH_CUSTOM_PANEL.story = {
  name: "[7] With custom panel"
};

var MODAL_WITH_RESTRICTED_CHILDREN_WIDTH = function MODAL_WITH_RESTRICTED_CHILDREN_WIDTH() {
  return /*#__PURE__*/React.createElement(ModalWrapper, {
    onOpenStart: function onOpenStart() {
      console.log("OPEN_MODAL_START");
    },
    onOpenEnd: function onOpenEnd() {
      console.log("OPEN_MODAL_END");
    },
    onCloseStart: function onCloseStart() {
      console.log("CLOSE_MODAL_START");
    },
    onCloseEnd: function onCloseEnd() {
      console.log("CLOSE_MODAL_END");
    }
  }, /*#__PURE__*/React.createElement(ModalContent, null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: "640px"
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium orci eu semper blandit. Fusce bibendum odio eu dolor elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis id diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim, eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque varius eget enim at varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium orci eu semper blandit. Fusce bibendum odio eu dolor elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis id diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim, eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque varius eget enim at varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium orci eu semper blandit. Fusce bibendum odio eu dolor elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis id diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim, eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque varius eget enim at varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium orci eu semper blandit. Fusce bibendum odio eu dolor elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis id diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim, eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque varius eget enim at varius.")));
};

exports.MODAL_WITH_RESTRICTED_CHILDREN_WIDTH = MODAL_WITH_RESTRICTED_CHILDREN_WIDTH;
MODAL_WITH_RESTRICTED_CHILDREN_WIDTH.story = {
  name: "[8] With restricted children width"
};

var MODAL_WITH_OVERLAY_WITH_RESTRICTED_CHILDREN_WIDTH = function MODAL_WITH_OVERLAY_WITH_RESTRICTED_CHILDREN_WIDTH() {
  return /*#__PURE__*/React.createElement(ModalWrapper, {
    options: {
      isOverlay: true
    },
    onOpenStart: function onOpenStart() {
      console.log("OPEN_MODAL_START");
    },
    onOpenEnd: function onOpenEnd() {
      console.log("OPEN_MODAL_END");
    },
    onCloseStart: function onCloseStart() {
      console.log("CLOSE_MODAL_START");
    },
    onCloseEnd: function onCloseEnd() {
      console.log("CLOSE_MODAL_END");
    }
  }, /*#__PURE__*/React.createElement(ModalContent, null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: "640px"
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium orci eu semper blandit. Fusce bibendum odio eu dolor elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis id diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim, eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque varius eget enim at varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium orci eu semper blandit. Fusce bibendum odio eu dolor elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis id diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim, eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque varius eget enim at varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium orci eu semper blandit. Fusce bibendum odio eu dolor elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis id diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim, eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque varius eget enim at varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium orci eu semper blandit. Fusce bibendum odio eu dolor elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis id diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim, eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque varius eget enim at varius.")));
};

exports.MODAL_WITH_OVERLAY_WITH_RESTRICTED_CHILDREN_WIDTH = MODAL_WITH_OVERLAY_WITH_RESTRICTED_CHILDREN_WIDTH;
MODAL_WITH_OVERLAY_WITH_RESTRICTED_CHILDREN_WIDTH.story = {
  name: "[9] With overlay with restricted children width"
};

var MODAL_WITH_RESTRICTED_CHILDREN_WIDTH_WITH_RESTRICTED_PANEL_SIZE = function MODAL_WITH_RESTRICTED_CHILDREN_WIDTH_WITH_RESTRICTED_PANEL_SIZE() {
  return /*#__PURE__*/React.createElement(ModalWrapper, {
    options: {
      isPanelRestrictedSize: true
    },
    onOpenStart: function onOpenStart() {
      console.log("OPEN_MODAL_START");
    },
    onOpenEnd: function onOpenEnd() {
      console.log("OPEN_MODAL_END");
    },
    onCloseStart: function onCloseStart() {
      console.log("CLOSE_MODAL_START");
    },
    onCloseEnd: function onCloseEnd() {
      console.log("CLOSE_MODAL_END");
    }
  }, /*#__PURE__*/React.createElement(ModalContent, null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: "640px"
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium orci eu semper blandit. Fusce bibendum odio eu dolor elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis id diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim, eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque varius eget enim at varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium orci eu semper blandit. Fusce bibendum odio eu dolor elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis id diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim, eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque varius eget enim at varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium orci eu semper blandit. Fusce bibendum odio eu dolor elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis id diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim, eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque varius eget enim at varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium orci eu semper blandit. Fusce bibendum odio eu dolor elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis id diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim, eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque varius eget enim at varius.")));
};

exports.MODAL_WITH_RESTRICTED_CHILDREN_WIDTH_WITH_RESTRICTED_PANEL_SIZE = MODAL_WITH_RESTRICTED_CHILDREN_WIDTH_WITH_RESTRICTED_PANEL_SIZE;
MODAL_WITH_RESTRICTED_CHILDREN_WIDTH_WITH_RESTRICTED_PANEL_SIZE.story = {
  name: "[10] With restricted children width with restricted panel size"
};

var MODAL_WITH_OVERLAY_WITH_RESTRICTED_CHILDREN_WIDTH_WITH_RESTRICTED_PANEL_SIZE = function MODAL_WITH_OVERLAY_WITH_RESTRICTED_CHILDREN_WIDTH_WITH_RESTRICTED_PANEL_SIZE() {
  return /*#__PURE__*/React.createElement(ModalWrapper, {
    options: {
      isOverlay: true,
      isPanelRestrictedSize: true
    },
    onOpenStart: function onOpenStart() {
      console.log("OPEN_MODAL_START");
    },
    onOpenEnd: function onOpenEnd() {
      console.log("OPEN_MODAL_END");
    },
    onCloseStart: function onCloseStart() {
      console.log("CLOSE_MODAL_START");
    },
    onCloseEnd: function onCloseEnd() {
      console.log("CLOSE_MODAL_END");
    }
  }, /*#__PURE__*/React.createElement(ModalContent, null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: "640px"
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium orci eu semper blandit. Fusce bibendum odio eu dolor elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis id diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim, eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque varius eget enim at varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium orci eu semper blandit. Fusce bibendum odio eu dolor elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis id diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim, eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque varius eget enim at varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium orci eu semper blandit. Fusce bibendum odio eu dolor elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis id diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim, eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque varius eget enim at varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium orci eu semper blandit. Fusce bibendum odio eu dolor elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis id diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim, eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque varius eget enim at varius.")));
};

exports.MODAL_WITH_OVERLAY_WITH_RESTRICTED_CHILDREN_WIDTH_WITH_RESTRICTED_PANEL_SIZE = MODAL_WITH_OVERLAY_WITH_RESTRICTED_CHILDREN_WIDTH_WITH_RESTRICTED_PANEL_SIZE;
MODAL_WITH_OVERLAY_WITH_RESTRICTED_CHILDREN_WIDTH_WITH_RESTRICTED_PANEL_SIZE.story = {
  name: "[11] With overlay with restricted children width with restricted panel size"
};

var MODAL_WITH_FULLSCREN_PANEL_WIDTH_AND_HEIGHT_WITH_RESTRICTED_PANEL_SIZE = function MODAL_WITH_FULLSCREN_PANEL_WIDTH_AND_HEIGHT_WITH_RESTRICTED_PANEL_SIZE() {
  return /*#__PURE__*/React.createElement(ModalWrapper, {
    options: {
      isPanelRestrictedSize: true,
      panelWidth: "100%",
      panelHeight: "100%"
    },
    onOpenStart: function onOpenStart() {
      console.log("OPEN_MODAL_START");
    },
    onOpenEnd: function onOpenEnd() {
      console.log("OPEN_MODAL_END");
    },
    onCloseStart: function onCloseStart() {
      console.log("CLOSE_MODAL_START");
    },
    onCloseEnd: function onCloseEnd() {
      console.log("CLOSE_MODAL_END");
    }
  }, /*#__PURE__*/React.createElement(ModalContent, null, /*#__PURE__*/React.createElement("div", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium orci eu semper blandit. Fusce bibendum odio eu dolor elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis id diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim, eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque varius eget enim at varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium orci eu semper blandit. Fusce bibendum odio eu dolor elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis id diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim, eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque varius eget enim at varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium orci eu semper blandit. Fusce bibendum odio eu dolor elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis id diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim, eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque varius eget enim at varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium orci eu semper blandit. Fusce bibendum odio eu dolor elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis id diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim, eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque varius eget enim at varius.")));
};

exports.MODAL_WITH_FULLSCREN_PANEL_WIDTH_AND_HEIGHT_WITH_RESTRICTED_PANEL_SIZE = MODAL_WITH_FULLSCREN_PANEL_WIDTH_AND_HEIGHT_WITH_RESTRICTED_PANEL_SIZE;
MODAL_WITH_FULLSCREN_PANEL_WIDTH_AND_HEIGHT_WITH_RESTRICTED_PANEL_SIZE.story = {
  name: "[12] With fullscreen panel width and height with restricted panel size"
};

var MODAL_WITH_OVERLAY_WITH_FULLSCREEN_PANEL_WIDTH_AND_HEIGHT_WITH_RESTRICTED_PANEL_SIZE = function MODAL_WITH_OVERLAY_WITH_FULLSCREEN_PANEL_WIDTH_AND_HEIGHT_WITH_RESTRICTED_PANEL_SIZE() {
  return /*#__PURE__*/React.createElement(ModalWrapper, {
    options: {
      isOverlay: true,
      isPanelRestrictedSize: true,
      panelWidth: "100%",
      panelHeight: "100%"
    },
    onOpenStart: function onOpenStart() {
      console.log("OPEN_MODAL_START");
    },
    onOpenEnd: function onOpenEnd() {
      console.log("OPEN_MODAL_END");
    },
    onCloseStart: function onCloseStart() {
      console.log("CLOSE_MODAL_START");
    },
    onCloseEnd: function onCloseEnd() {
      console.log("CLOSE_MODAL_END");
    }
  }, /*#__PURE__*/React.createElement(ModalContent, null, /*#__PURE__*/React.createElement("div", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium orci eu semper blandit. Fusce bibendum odio eu dolor elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis id diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim, eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque varius eget enim at varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium orci eu semper blandit. Fusce bibendum odio eu dolor elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis id diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim, eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque varius eget enim at varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium orci eu semper blandit. Fusce bibendum odio eu dolor elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis id diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim, eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque varius eget enim at varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium orci eu semper blandit. Fusce bibendum odio eu dolor elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis id diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim, eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque varius eget enim at varius.")));
};

exports.MODAL_WITH_OVERLAY_WITH_FULLSCREEN_PANEL_WIDTH_AND_HEIGHT_WITH_RESTRICTED_PANEL_SIZE = MODAL_WITH_OVERLAY_WITH_FULLSCREEN_PANEL_WIDTH_AND_HEIGHT_WITH_RESTRICTED_PANEL_SIZE;
MODAL_WITH_OVERLAY_WITH_FULLSCREEN_PANEL_WIDTH_AND_HEIGHT_WITH_RESTRICTED_PANEL_SIZE.story = {
  name: "[13] With overlay with fullcreen panel width and height with restricted panel size"
};

var MODAL_WITHOUT_CLOSE_BUTTON = function MODAL_WITHOUT_CLOSE_BUTTON() {
  return /*#__PURE__*/React.createElement(ModalWrapper, {
    options: {
      isPanelCloseButton: false
    },
    onOpenStart: function onOpenStart() {
      console.log("OPEN_MODAL_START");
    },
    onOpenEnd: function onOpenEnd() {
      console.log("OPEN_MODAL_END");
    },
    onCloseStart: function onCloseStart() {
      console.log("CLOSE_MODAL_START");
    },
    onCloseEnd: function onCloseEnd() {
      console.log("CLOSE_MODAL_END");
    }
  }, /*#__PURE__*/React.createElement(ModalContent, null));
};

exports.MODAL_WITHOUT_CLOSE_BUTTON = MODAL_WITHOUT_CLOSE_BUTTON;
MODAL_WITHOUT_CLOSE_BUTTON.story = {
  name: "[14] Without close button"
};
//# sourceMappingURL=Modal.stories.js.map
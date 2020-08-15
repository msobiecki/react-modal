"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Modal = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Modal = require("./Modal.reducer");

var _Modal2 = require("./Modal.styled");

var _Close = _interopRequireDefault(require("../assets/images/Close.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var modalPropTypes = {
  children: _propTypes.default.node,
  options: _propTypes.default.shape({
    openingDuration: _propTypes.default.number,
    closingDuration: _propTypes.default.number,
    zIndex: _propTypes.default.number,
    isOverlay: _propTypes.default.bool,
    isOverlayClosing: _propTypes.default.bool,
    overlayPadding: _propTypes.default.string,
    overlayBackground: _propTypes.default.string,
    isPanelCloseButton: _propTypes.default.bool,
    isPanelRestrictedSize: _propTypes.default.bool,
    panelRestrictedWidth: _propTypes.default.string,
    panelRestrictedHeight: _propTypes.default.string,
    panelWidth: _propTypes.default.string,
    panelHeight: _propTypes.default.string,
    panelBorderRadius: _propTypes.default.string,
    panelBorder: _propTypes.default.string,
    panelBackground: _propTypes.default.string,
    panelBoxShadow: _propTypes.default.string,
    panelPadding: _propTypes.default.string
  }),
  onOpenStart: _propTypes.default.func,
  onOpenEnd: _propTypes.default.func,
  onCloseStart: _propTypes.default.func,
  onCloseEnd: _propTypes.default.func
};
var modalDefaultProps = {
  options: {
    openingDuration: _Modal.initialValues.openingDuration,
    closingDuration: _Modal.initialValues.closingDuration,
    zIndex: _Modal.initialValues.zIndex,
    isOverlay: _Modal.initialValues.isOverlay,
    isOverlayClosing: _Modal.initialValues.isOverlayClosing,
    overlayPadding: _Modal.initialValues.overlayPadding,
    overlayBackground: _Modal.initialValues.overlayBackground,
    isPanelCloseButton: _Modal.initialValues.isPanelCloseButton,
    isPanelRestrictedSize: _Modal.initialValues.isPanelRestrictedSize,
    panelRestrictedWidth: _Modal.initialValues.panelRestrictedWidth,
    panelRestrictedHeight: _Modal.initialValues.panelRestrictedHeight,
    panelWidth: _Modal.initialValues.panelWidth,
    panelHeight: _Modal.initialValues.panelHeight,
    panelBorderRadius: _Modal.initialValues.panelBorderRadius,
    panelBorder: _Modal.initialValues.panelBorder,
    panelBackground: _Modal.initialValues.panelBackground,
    panelBoxShadow: _Modal.initialValues.panelBoxShadow,
    panelPadding: _Modal.initialValues.panelPadding
  },
  onOpenStart: function onOpenStart() {},
  onOpenEnd: function onOpenEnd() {},
  onCloseStart: function onCloseStart() {},
  onCloseEnd: function onCloseEnd() {}
};
var Modal = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, forwardedRef) {
  var children = _ref.children,
      options = _ref.options,
      onOpenStart = _ref.onOpenStart,
      onOpenEnd = _ref.onOpenEnd,
      onCloseStart = _ref.onCloseStart,
      onCloseEnd = _ref.onCloseEnd;
  var panelRef = (0, _react.useRef)(null);

  var _useReducer = (0, _react.useReducer)(_Modal.reducer, Object.assign({}, _Modal.initialValues, options)),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      modalState = _useReducer2[0],
      modalDispatch = _useReducer2[1];

  var handleActionOnOpenStart = function handleActionOnOpenStart() {
    return typeof onOpenStart === 'function' && onOpenStart();
  };

  var handleActionOnOpenEnd = function handleActionOnOpenEnd() {
    return typeof onOpenEnd === 'function' && onOpenEnd();
  };

  var handleActionOnCloseStart = function handleActionOnCloseStart() {
    return typeof onCloseStart === 'function' && onCloseStart();
  };

  var handleActionOnCloseEnd = function handleActionOnCloseEnd() {
    return typeof onCloseEnd === 'function' && onCloseEnd();
  };

  var _openModal = function openModal() {
    if (modalState.isClosed) modalDispatch({
      type: 'OPEN_START'
    });
  };

  var _closeModal = function closeModal() {
    if (modalState.isOpened) modalDispatch({
      type: 'CLOSE_START'
    });
  };

  var handleClickDocumentEventListener = function handleClickDocumentEventListener(event) {
    if (!(panelRef && panelRef.current && panelRef.current.contains(event.target))) {
      _closeModal();
    }
  };

  (0, _react.useEffect)(function () {
    var timeout;

    if (modalState.isOpening) {
      handleActionOnOpenStart();
      timeout = setTimeout(function () {
        modalDispatch({
          type: 'OPEN_END'
        });
      }, modalState.openingDuration);
    }

    return function () {
      if (timeout) clearTimeout(timeout);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalState.isOpening]);
  (0, _react.useEffect)(function () {
    if (modalState.isOpened) handleActionOnOpenEnd(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalState.isOpened]);
  (0, _react.useEffect)(function () {
    var timeout;

    if (modalState.isClosing) {
      handleActionOnCloseStart();
      timeout = setTimeout(function () {
        modalDispatch({
          type: 'CLOSE_END'
        });
      }, modalState.closingDuration);
    }

    return function () {
      if (timeout) clearTimeout(timeout);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalState.isClosing]);
  (0, _react.useEffect)(function () {
    if (modalState.isClosed) handleActionOnCloseEnd(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalState.isClosed]);
  (0, _react.useEffect)(function () {
    if (modalState.isOverlay && modalState.isOverlayClosing) document.addEventListener('click', handleClickDocumentEventListener);
    return function () {
      if (modalState.isOverlay && modalState.isOverlayClosing) document.removeEventListener('click', handleClickDocumentEventListener);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalState.isOpening, modalState.isOpened]);
  (0, _react.useImperativeHandle)(forwardedRef, function () {
    return {
      openModal: function openModal() {
        return _openModal();
      },
      closeModal: function closeModal() {
        return _closeModal();
      }
    };
  });

  var renderPanel = function renderPanel() {
    return /*#__PURE__*/_react.default.createElement(_Modal2.Panel, {
      ref: panelRef,
      isVisible: modalState.isOpening || modalState.isOpened || modalState.isClosing ? true : false,
      isOpening: modalState.isOpening ? true : false,
      isClosing: modalState.isClosing ? true : false,
      openingDuration: modalState.openingDuration,
      closingDuration: modalState.closingDuration,
      padding: modalState.panelPadding,
      isRestrictedSize: modalState.isPanelRestrictedSize,
      restrictedWidth: modalState.panelRestrictedWidth,
      restrictedHeight: modalState.panelRestrictedHeight,
      width: modalState.panelWidth,
      height: modalState.panelHeight,
      borderRadius: modalState.panelBorderRadius,
      border: modalState.panelBorder,
      background: modalState.panelBackground,
      boxShadow: modalState.panelBoxShadow
    }, modalState.isPanelCloseButton && /*#__PURE__*/_react.default.createElement(_Modal2.Close, {
      onClick: function onClick() {
        _closeModal();
      }
    }, /*#__PURE__*/_react.default.createElement(_Modal2.CloseIcon, {
      src: _Close.default
    })), children);
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !modalState.isClosed ? /*#__PURE__*/_react.default.createElement(_Modal2.Wrapper, {
    isOverlay: modalState.isOverlay ? true : false,
    zIndex: modalState.zIndex
  }, modalState.isOverlay ? /*#__PURE__*/_react.default.createElement(_Modal2.Overlay, {
    isVisible: modalState.isOpening || modalState.isOpened || modalState.isClosing ? true : false,
    isOpening: modalState.isOpening ? true : false,
    isClosing: modalState.isClosing ? true : false,
    openingDuration: modalState.openingDuration,
    closingDuration: modalState.closingDuration,
    padding: modalState.overlayPadding,
    background: modalState.overlayBackground
  }, renderPanel()) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, renderPanel())) : '');
});
exports.Modal = Modal;
Modal.defaultProps = modalDefaultProps;
var _default = Modal;
exports.default = _default;
//# sourceMappingURL=Modal.js.map
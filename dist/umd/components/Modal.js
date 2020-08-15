(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "./Modal.reducer", "./Modal.styled", "../assets/images/Close.svg"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("./Modal.reducer"), require("./Modal.styled"), require("../assets/images/Close.svg"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.Modal, global.Modal, global.Close);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _Modal, _Modal2, _Close) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Modal = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _Close2 = _interopRequireDefault(_Close);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const modalPropTypes = {
    children: _propTypes2.default.node,
    options: _propTypes2.default.shape({
      openingDuration: _propTypes2.default.number,
      closingDuration: _propTypes2.default.number,
      zIndex: _propTypes2.default.number,
      isOverlay: _propTypes2.default.bool,
      isOverlayClosing: _propTypes2.default.bool,
      overlayPadding: _propTypes2.default.string,
      overlayBackground: _propTypes2.default.string,
      isPanelCloseButton: _propTypes2.default.bool,
      isPanelRestrictedSize: _propTypes2.default.bool,
      panelRestrictedWidth: _propTypes2.default.string,
      panelRestrictedHeight: _propTypes2.default.string,
      panelWidth: _propTypes2.default.string,
      panelHeight: _propTypes2.default.string,
      panelBorderRadius: _propTypes2.default.string,
      panelBorder: _propTypes2.default.string,
      panelBackground: _propTypes2.default.string,
      panelBoxShadow: _propTypes2.default.string,
      panelPadding: _propTypes2.default.string
    }),
    onOpenStart: _propTypes2.default.func,
    onOpenEnd: _propTypes2.default.func,
    onCloseStart: _propTypes2.default.func,
    onCloseEnd: _propTypes2.default.func
  };
  const modalDefaultProps = {
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
    onOpenStart: () => {},
    onOpenEnd: () => {},
    onCloseStart: () => {},
    onCloseEnd: () => {}
  };
  const Modal = exports.Modal = (0, _react.forwardRef)(({
    children,
    options,
    onOpenStart,
    onOpenEnd,
    onCloseStart,
    onCloseEnd
  }, forwardedRef) => {
    const panelRef = (0, _react.useRef)(null);
    const [modalState, modalDispatch] = (0, _react.useReducer)(_Modal.reducer, Object.assign({}, _Modal.initialValues, options));

    const handleActionOnOpenStart = () => typeof onOpenStart === 'function' && onOpenStart();

    const handleActionOnOpenEnd = () => typeof onOpenEnd === 'function' && onOpenEnd();

    const handleActionOnCloseStart = () => typeof onCloseStart === 'function' && onCloseStart();

    const handleActionOnCloseEnd = () => typeof onCloseEnd === 'function' && onCloseEnd();

    const openModal = () => {
      if (modalState.isClosed) modalDispatch({
        type: 'OPEN_START'
      });
    };

    const closeModal = () => {
      if (modalState.isOpened) modalDispatch({
        type: 'CLOSE_START'
      });
    };

    const handleClickDocumentEventListener = event => {
      if (!(panelRef && panelRef.current && panelRef.current.contains(event.target))) {
        closeModal();
      }
    };

    (0, _react.useEffect)(() => {
      let timeout;

      if (modalState.isOpening) {
        handleActionOnOpenStart();
        timeout = setTimeout(() => {
          modalDispatch({
            type: 'OPEN_END'
          });
        }, modalState.openingDuration);
      }

      return () => {
        if (timeout) clearTimeout(timeout);
      }; // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [modalState.isOpening]);
    (0, _react.useEffect)(() => {
      if (modalState.isOpened) handleActionOnOpenEnd(); // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [modalState.isOpened]);
    (0, _react.useEffect)(() => {
      let timeout;

      if (modalState.isClosing) {
        handleActionOnCloseStart();
        timeout = setTimeout(() => {
          modalDispatch({
            type: 'CLOSE_END'
          });
        }, modalState.closingDuration);
      }

      return () => {
        if (timeout) clearTimeout(timeout);
      }; // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [modalState.isClosing]);
    (0, _react.useEffect)(() => {
      if (modalState.isClosed) handleActionOnCloseEnd(); // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [modalState.isClosed]);
    (0, _react.useEffect)(() => {
      if (modalState.isOverlay && modalState.isOverlayClosing) document.addEventListener('click', handleClickDocumentEventListener);
      return () => {
        if (modalState.isOverlay && modalState.isOverlayClosing) document.removeEventListener('click', handleClickDocumentEventListener);
      }; // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [modalState.isOpening, modalState.isOpened]);
    (0, _react.useImperativeHandle)(forwardedRef, () => ({
      openModal: () => openModal(),
      closeModal: () => closeModal()
    }));

    const renderPanel = () => {
      return /*#__PURE__*/_react2.default.createElement(_Modal2.Panel, {
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
      }, modalState.isPanelCloseButton && /*#__PURE__*/_react2.default.createElement(_Modal2.Close, {
        onClick: () => {
          closeModal();
        }
      }, /*#__PURE__*/_react2.default.createElement(_Modal2.CloseIcon, {
        src: _Close2.default
      })), children);
    };

    return /*#__PURE__*/_react2.default.createElement(_react2.default.Fragment, null, !modalState.isClosed ? /*#__PURE__*/_react2.default.createElement(_Modal2.Wrapper, {
      isOverlay: modalState.isOverlay ? true : false,
      zIndex: modalState.zIndex
    }, modalState.isOverlay ? /*#__PURE__*/_react2.default.createElement(_Modal2.Overlay, {
      isVisible: modalState.isOpening || modalState.isOpened || modalState.isClosing ? true : false,
      isOpening: modalState.isOpening ? true : false,
      isClosing: modalState.isClosing ? true : false,
      openingDuration: modalState.openingDuration,
      closingDuration: modalState.closingDuration,
      padding: modalState.overlayPadding,
      background: modalState.overlayBackground
    }, renderPanel()) : /*#__PURE__*/_react2.default.createElement(_react2.default.Fragment, null, renderPanel())) : '');
  });
  Modal.defaultProps = modalDefaultProps;
  exports.default = Modal;
});
//# sourceMappingURL=Modal.js.map
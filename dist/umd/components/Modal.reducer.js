(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.undefined = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var Type;

  (function (Type) {
    Type["OPEN_START"] = "OPEN_START";
    Type["OPEN_END"] = "OPEN_END";
    Type["CLOSE_START"] = "CLOSE_START";
    Type["CLOSE_END"] = "CLOSE_END";
  })(Type || (Type = {}));

  const initialValues = {
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
    isOpening: false,
    isOpened: false,
    isClosing: false,
    isClosed: true
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case Type.OPEN_START:
        return _objectSpread(_objectSpread({}, state), {}, {
          isOpening: true,
          isOpened: false,
          isClosing: false,
          isClosed: false
        });

      case Type.OPEN_END:
        return _objectSpread(_objectSpread({}, state), {}, {
          isOpening: false,
          isOpened: true,
          isClosing: false,
          isClosed: false
        });

      case Type.CLOSE_START:
        return _objectSpread(_objectSpread({}, state), {}, {
          isOpening: false,
          isOpened: false,
          isClosing: true,
          isClosed: false
        });

      case Type.CLOSE_END:
        return _objectSpread(_objectSpread({}, state), {}, {
          isOpening: false,
          isOpened: false,
          isClosing: false,
          isClosed: true
        });

      default:
        return state;
    }
  };

  exports.default = reducer;
  exports.reducer = reducer;
  exports.initialValues = initialValues;
});
//# sourceMappingURL=Modal.reducer.js.map
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CloseIcon = exports.Close = exports.Panel = exports.Overlay = exports.Wrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  max-width: 100%;\n  height: auto;\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: initial;\n  right: 0;\n  bottom: initial;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 44px;\n  height: 44px;\n  cursor: pointer;\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n      max-width: ", ";\n      max-height: ", ";\n      overflow: auto;\n    "]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n          animation: ", "ms\n            ", ";\n          animation-fill-mode: both;\n        "]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n      animation: ", "ms\n        ", ";\n      animation-fill-mode: both;\n    "]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: block;\n  margin: auto;\n  width: ", ";\n  height: ", ";\n  padding: ", ";\n  border-radius: ", ";\n  border: ", ";\n  background: ", ";\n  box-shadow: ", ";\n  box-sizing: border-box;\n  // opacity: 0;\n\n  ", "\n\n  ", "\n      ", ";\n\n  ", "\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n          animation: ", "ms\n            ", ";\n          animation-fill-mode: both;\n        "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n        animation: ", "ms\n          ", ";\n        animation-fill-mode: both;\n      "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  padding: ", ";\n  overflow: auto;\n  background: ", ";\n  box-sizing: border-box;\n  // opacity: 0;\n\n\n  ", "\n    ", "\n      ", ";\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      width: 100%;\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n      // top: 50%;\n      // left: 50%;\n      // transform: translate(-50%, -50%);\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      margin: auto;\n      overflow: auto;\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  max-width: 100%;\n  max-height: 100%;\n  z-index: ", ";\n  box-sizing: border-box;\n\n  ", "\n\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["", ""]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["", ""]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["", ""]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["", ""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var fadeIn = {
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
};
var fadeOut = {
  from: {
    opacity: 1
  },
  to: {
    opacity: 0
  }
};

var scale3d = function scale3d(a, b, c) {
  return "scale3d(".concat(a, ", ").concat(b, ", ").concat(c, ")");
};

var zoomIn = {
  from: {
    opacity: 0,
    transform: scale3d(0.3, 0.3, 0.3)
  },
  '50%': {
    opacity: 1
  }
};
var zoomOut = {
  from: {
    opacity: 1
  },
  '50%': {
    opacity: 0,
    transform: scale3d(0.3, 0.3, 0.3)
  },
  to: {
    opacity: 0
  }
};
var fadeInAnimation = (0, _styledComponents.keyframes)(_templateObject(), fadeIn);
var fadeOutAnimation = (0, _styledComponents.keyframes)(_templateObject2(), fadeOut);
var zoomInAnimation = (0, _styledComponents.keyframes)(_templateObject3(), zoomIn);
var zoomOutAnimation = (0, _styledComponents.keyframes)(_templateObject4(), zoomOut);

var Wrapper = _styledComponents.default.div(_templateObject5(), function (props) {
  return props.zIndex;
}, function (props) {
  return !props.isOverlay && (0, _styledComponents.css)(_templateObject6());
}, function (props) {
  return props.isOverlay && (0, _styledComponents.css)(_templateObject7());
});

exports.Wrapper = Wrapper;

var Overlay = _styledComponents.default.div(_templateObject8(), function (props) {
  return props.padding;
}, function (props) {
  return props.background;
}, function (props) {
  return props.isVisible && (0, _styledComponents.css)(_templateObject9());
}, function (props) {
  return props.isOpening && (0, _styledComponents.css)(_templateObject10(), function (props) {
    return props.openingDuration;
  }, fadeInAnimation);
}, function (props) {
  return props.isClosing && (0, _styledComponents.css)(_templateObject11(), function (props) {
    return props.closingDuration;
  }, fadeOutAnimation);
});

exports.Overlay = Overlay;

var Panel = _styledComponents.default.div(_templateObject12(), function (props) {
  return props.width;
}, function (props) {
  return props.height;
}, function (props) {
  return props.padding;
}, function (props) {
  return props.borderRadius;
}, function (props) {
  return props.border;
}, function (props) {
  return props.background;
}, function (props) {
  return props.boxShadow;
}, function (props) {
  return props.isVisible && (0, _styledComponents.css)(_templateObject13());
}, function (props) {
  return props.isOpening && (0, _styledComponents.css)(_templateObject14(), function (props) {
    return props.openingDuration;
  }, zoomInAnimation);
}, function (props) {
  return props.isClosing && (0, _styledComponents.css)(_templateObject15(), function (props) {
    return props.closingDuration;
  }, zoomOutAnimation);
}, function (props) {
  return props.isRestrictedSize && (0, _styledComponents.css)(_templateObject16(), function (props) {
    return props.restrictedWidth;
  }, function (props) {
    return props.restrictedHeight;
  });
});

exports.Panel = Panel;

var Close = _styledComponents.default.div(_templateObject17());

exports.Close = Close;

var CloseIcon = _styledComponents.default.img(_templateObject18());

exports.CloseIcon = CloseIcon;
//# sourceMappingURL=Modal.styled.js.map
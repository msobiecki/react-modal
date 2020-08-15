(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["enzyme", "enzyme-adapter-react-16", "@testing-library/jest-dom/extend-expect", "jest-enzyme"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("enzyme"), require("enzyme-adapter-react-16"), require("@testing-library/jest-dom/extend-expect"), require("jest-enzyme"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.enzyme, global.enzymeAdapterReact16, global.extendExpect, global.jestEnzyme);
    global.undefined = mod.exports;
  }
})(this, function (_enzyme, _enzymeAdapterReact) {
  "use strict";

  var Adapter = _interopRequireWildcard(_enzymeAdapterReact);

  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();

    _getRequireWildcardCache = function () {
      return cache;
    };

    return cache;
  }

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }

    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
      return {
        default: obj
      };
    }

    var cache = _getRequireWildcardCache();

    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }

    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }

    newObj.default = obj;

    if (cache) {
      cache.set(obj, newObj);
    }

    return newObj;
  }

  // jest-dom adds custom jest matchers for asserting on DOM nodes.
  // allows you to do things like:
  // expect(element).toHaveTextContent(/react/i)
  // learn more: https://github.com/testing-library/jest-dom
  const adapter = Adapter;
  (0, _enzyme.configure)({
    adapter: new adapter.default()
  });
});
//# sourceMappingURL=setupTests.js.map
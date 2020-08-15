(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Modal"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Modal"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Modal);
    global.undefined = mod.exports;
  }
})(this, function (exports, _Modal) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_Modal).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _Modal[key];
      }
    });
  });
});
//# sourceMappingURL=index.js.map
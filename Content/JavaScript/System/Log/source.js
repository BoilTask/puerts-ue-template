"use strict";
const UE = require("ue");
var puerts = require("puerts");
puerts.registerBuildinModule("path", {
  dirname(path) {
    return UE.PlatformLibrary.GetDirectoryName(path);
  },
  resolve(dir, url) {
    url = url.replace(/\\/g, "/");
    while (url.startsWith("../")) {
      dir = UE.PlatformLibrary.GetDirectoryName(dir);
      url = url.substr(3);
    }
    return UE.PlatformLibrary.CombinePath(dir, url);
  }
});
puerts.registerBuildinModule("fs", {
  existsSync(path) {
    return UE.PlatformLibrary.FileExists(path);
  },
  readFileSync(path) {
    return UE.PlatformLibrary.ReadAllText(path);
  }
});
(function() {
  let global = this ?? globalThis;
  global["Buffer"] = global["Buffer"] ?? {};
})();
require("source-map-support").install();
//# sourceMappingURL=source.js.map

"use strict";
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const puerts = require("puerts");
function ToMinix(c, m) {
  let modulePath = m;
  let exportName = null;
  if (m.includes(":")) {
    const parts = m.split(":");
    modulePath = parts[0];
    exportName = parts[1];
  }
  const mod = require(modulePath);
  const TargetClass = exportName ? mod[exportName] : mod.default;
  if (!TargetClass) {
    throw new Error(`not found: ${m}`);
  }
  puerts.blueprint.mixin(puerts.blueprint.tojs(c), TargetClass);
}
__name(ToMinix, "ToMinix");
exports.ToMinix = ToMinix;
//# sourceMappingURL=AutoMinix.js.map

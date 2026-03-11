"use strict";
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const UE = require("ue");
function ObjectValid(obj) {
  return obj && UE.KismetSystemLibrary.IsValid(obj);
}
__name(ObjectValid, "ObjectValid");
exports.ObjectValid = ObjectValid;
//# sourceMappingURL=index.js.map

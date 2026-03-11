"use strict";
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const UE = require("ue");
UE.Vector2D.prototype.toString = function() {
  return `(${this.X}, ${this.Y})`;
};
function Format(obj, prettyPrint = false) {
  return prettyPrint ? JSON.stringify(obj, null, 2) : JSON.stringify(obj);
}
__name(Format, "Format");
exports.Format = Format;
//# sourceMappingURL=format.js.map

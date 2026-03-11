"use strict";
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const _WBP_Main_C = class _WBP_Main_C {
  Construct() {
    console.log("WBP_Main_C Construct");
    this.NumTextBlock.SetText("0");
    this.NumButton.OnClicked.Add(() => this.OnNumButtonClicked());
  }
  OnNumButtonClicked() {
    console.log("OnNumButtonClicked");
    const currNum = parseInt(this.NumTextBlock.GetText());
    this.NumTextBlock.SetText((currNum + 1).toString());
  }
};
__name(_WBP_Main_C, "WBP_Main_C");
let WBP_Main_C = _WBP_Main_C;
exports.default = WBP_Main_C;
//# sourceMappingURL=WBP_Main.js.map

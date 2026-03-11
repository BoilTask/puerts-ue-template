"use strict";
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const UE = require("ue");
const System_Object_index = require("../Object/index.js");
function CreateUI(worldContext, rowName, param = null, showDelay = false, sync = false) {
  let uiSubsystem = UE.GameplayLibrary.GetGameInstanceSubsystem(worldContext, UE.UISubsystem.StaticClass());
  if (!System_Object_index.ObjectValid(uiSubsystem)) {
    console.error("UISubsystem not found");
    return null;
  }
  let uiWidgetHandle = uiSubsystem.CreateUI(rowName, param, showDelay, sync);
  if (!System_Object_index.ObjectValid(uiWidgetHandle)) {
    console.error("CreateUI failed");
    return null;
  }
  return uiWidgetHandle;
}
__name(CreateUI, "CreateUI");
exports.CreateUI = CreateUI;
//# sourceMappingURL=index.js.map

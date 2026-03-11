"use strict";
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
require("./source.js");
require("./format.js");
const originalLog = console.log;
const originalInfo = console.info;
const originalWarn = console.warn;
const originalError = console.error;
function getCallerInfo() {
  const stack = new Error().stack;
  if (!stack) return null;
  const stackLines = stack.split("\n");
  const callerLine = stackLines[3];
  if (!callerLine) return null;
  const match = callerLine.match(/at\s+(?:([^\s(]+)\s+)?\(([^)]+)\)|at\s+([^\s]+)/);
  if (!match) return null;
  let functionName = match[1] || "anonymous";
  let location = match[2] || match[3];
  if (functionName.includes(".")) {
    const parts = functionName.split(".");
    functionName = parts[parts.length - 1];
  }
  if (!location) return null;
  const locationMatch = location.match(/^(.*):(\d+):(\d+)$/);
  if (!locationMatch) return null;
  const filePath = locationMatch[1];
  const lineNumber = locationMatch[2];
  const fileName = filePath.split(/[\\/]/).pop() || filePath.split(/[\\/]/).pop() || "unknown";
  return {
    functionName,
    fileName,
    lineNumber
  };
}
__name(getCallerInfo, "getCallerInfo");
console.log = function(...args) {
  const callerInfo = getCallerInfo();
  if (callerInfo) {
    args.unshift(`[${callerInfo.fileName}:${callerInfo.lineNumber}:${callerInfo.functionName}]`);
  }
  const combinedArgs = args.map((arg) => String(arg)).join("	");
  originalLog.apply(console, [combinedArgs]);
};
console.info = function(...args) {
  const callerInfo = getCallerInfo();
  if (callerInfo) {
    args.unshift(`[${callerInfo.fileName}:${callerInfo.lineNumber}:${callerInfo.functionName}]`);
  }
  const combinedArgs = args.map((arg) => String(arg)).join("	");
  originalInfo.apply(console, [combinedArgs]);
};
console.warn = function(...args) {
  const callerInfo = getCallerInfo();
  if (callerInfo) {
    args.unshift(`[${callerInfo.fileName}:${callerInfo.lineNumber}:${callerInfo.functionName}]`);
  }
  const combinedArgs = args.map((arg) => String(arg)).join("	");
  originalWarn.apply(console, [combinedArgs]);
};
console.error = function(...args) {
  const callerInfo = getCallerInfo();
  if (callerInfo) {
    args.unshift(`[${callerInfo.fileName}:${callerInfo.lineNumber}:${callerInfo.functionName}]`);
  }
  const combinedArgs = args.map((arg) => String(arg)).join("	");
  const stack = new Error().stack;
  const errorOutput = stack ? `${combinedArgs}
${stack}` : combinedArgs;
  originalError.apply(console, [errorOutput]);
};
//# sourceMappingURL=index.js.map

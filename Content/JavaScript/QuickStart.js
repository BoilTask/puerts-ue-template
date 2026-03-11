"use strict";
const puerts = require("puerts");
const AutoMinix = require("./AutoMinix.js");
require("./System/Log/index.js");
let gameInstance = puerts.argv.getByName("GameInstance");
gameInstance.BindMixin(puerts.toDelegate(gameInstance, AutoMinix.ToMinix));
console.log("QuickStart loaded", "test");
//# sourceMappingURL=QuickStart.js.map

import * as UE from "ue";
import { argv, toDelegate } from "puerts";

import { ToMinix } from "./AutoMinix";
import "./System/Log/index"; // 导入日志系统，自动扩展console功能

let gameInstance = argv.getByName("GameInstance") as UE.MetaGameInstance;
gameInstance.BindMixin(toDelegate(gameInstance, ToMinix));

console.log("QuickStart loaded", "test");

import * as UE from "ue";
import { argv, toDelegate } from "puerts";

import { ToMinix } from "./AutoMixin";
import "./System/Log/index"; // 导入日志系统，自动扩展console功能

let jsHandler = argv.getByName("JsHandler") as UE.TemplateGameInstance;
jsHandler.BindMixin(toDelegate(jsHandler, ToMinix));

console.log("loaded");

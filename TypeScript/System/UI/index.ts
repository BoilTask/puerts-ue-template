import * as UE from "ue";
import { ObjectValid } from "@/System/Object";

export function CreateUI(
    worldContext: UE.Object,
    rowName: string,
    param: UE.Object = null,
    showDelay: boolean = false,
    sync: boolean = false
): UE.WidgetHandle | null {
    let uiSubsystem = UE.GameplayLibrary.GetGameInstanceSubsystem(worldContext, UE.UISubsystem.StaticClass()) as UE.UISubsystem | null;
    if (!ObjectValid(uiSubsystem)) {
        console.error("UISubsystem not found");
        return null;
    }
    let uiWidgetHandle = uiSubsystem.CreateUI(rowName, param, showDelay, sync) as UE.WidgetHandle;
    if (!ObjectValid(uiWidgetHandle)) {
        console.error("CreateUI failed");
        return null;
    }
    return uiWidgetHandle;
}

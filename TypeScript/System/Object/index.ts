import * as UE from "ue";
export function ObjectValid(obj: UE.Object): boolean {
    return obj && UE.KismetSystemLibrary.IsValid(obj);
}

import * as UE from "ue";

interface WBP_Main_C extends UE.Game.Template.WBP_Main.WBP_Main_C {}

class WBP_Main_C {
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
}

export default WBP_Main_C;

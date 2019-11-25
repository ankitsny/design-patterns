import { Dialog } from "../Dialog";
import { IButton } from "../IButton";
import { AndroidButton } from "./AndroidButton";

export class AndroidButtonCreator extends Dialog {
  public create(): IButton {
    return new AndroidButton();
  }
}

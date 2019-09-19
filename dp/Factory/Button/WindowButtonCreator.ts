import { Dialog } from "./Dialog";
import { IButton } from "./IButton";
import { WindowsButton } from "./WindowsButton";

export class WindowButtonCreator extends Dialog {
  public create(): IButton {
    return new WindowsButton();
  }
}

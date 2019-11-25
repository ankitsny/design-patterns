import { Dialog } from "../Dialog";
import { IButton } from "../IButton";
import { HTMLButton } from "./HTMLButton";

export class HTMLButtonCreator extends Dialog {
  public create(): IButton {
    return new HTMLButton();
  }
}

import { IButton } from "../IButton";

export class HTMLButton implements IButton {
  onClick(): void {
    console.log("HTML Button Clicked!");
  }
  render(): void {
    console.log("HTML Button render method called!");
  }
}

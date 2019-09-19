import { IButton } from "./IButton";
export class AndroidButton implements IButton {
  onClick(): void {
    console.log("Android onClick method called!");
  }
  render(): void {
    console.log("Android render method called!");
  }
}

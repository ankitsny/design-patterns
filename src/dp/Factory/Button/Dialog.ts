import { IButton } from "./IButton";

export abstract class Dialog {
  public abstract create(): IButton;

  public renderButton(): void {
    const button: IButton = this.create();
    button.render();
  }
}

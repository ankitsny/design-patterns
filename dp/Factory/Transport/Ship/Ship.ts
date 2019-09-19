import { ITransport } from "../ITransport";

export class Ship implements ITransport {
  deliver(): void {
    console.log("Delivering by Ship!");
  }
  calculate(): number {
    return 99999.99;
  }
}

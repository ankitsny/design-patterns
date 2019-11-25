import { ITransport } from "../ITransport";

export class Truck implements ITransport {
  deliver(): void {
    console.log("Delivering by truck!!!");
  }
  calculate(): number {
    return 999.9;
  }
}

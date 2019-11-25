import { Transport } from "../Transport";
import { ITransport } from "../ITransport";
import { Truck } from "./Truck";

export class TruckFactory extends Transport {
  public create(): ITransport {
    return new Truck();
  }
}

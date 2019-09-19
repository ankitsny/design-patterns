import { Transport } from "../Transport";
import { ITransport } from "../ITransport";
import { Ship } from "./Ship";

export class ShipFactory extends Transport {
  public create(): ITransport {
    return new Ship();
  }
}

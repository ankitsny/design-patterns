import { ITransport } from "./ITransport";
import { TransportMode } from "./TransportMode";
import { ShipFactory } from "./Ship/ShipFactory";
import { TruckFactory } from "./Truck/TruckFactory";

export abstract class Transport {
  public deliverItem(): void {
    const transport: ITransport = this.create();
    transport.deliver();
  }

  // static NewTransport(transportMode: TransportMode): ITransport {
  //   switch (transportMode) {
  //     case TransportMode.SHIP:
  //       return new ShipFactory().create();

  //     case TransportMode.TRUCK:
  //       return new TruckFactory().create();

  //     default:
  //       throw new Error("Invalid Transport Mode!!!");
  //   }
  // }

  public abstract create(): ITransport;
}

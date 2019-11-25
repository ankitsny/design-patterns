import {
  ShipFactory,
  TransportMode,
  TruckFactory,
  Transport
} from "./Transport";

(function LoadTransport(transportMode: TransportMode) {
  let transport: Transport;
  switch (transportMode) {
    case TransportMode.SHIP:
      transport = new ShipFactory();
      break;
    case TransportMode.TRUCK:
      transport = new TruckFactory();
      break;
    default:
      throw new Error("Invalid mode of transport!!!");
  }
  transport.deliverItem();

  // let transport = Transport.NewTransport(TransportMode.SHIP);
  // transport.calculate();
})(TransportMode.TRUCK);

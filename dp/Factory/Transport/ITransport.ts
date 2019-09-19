export interface ITransport {
  deliver(): void;
  calculate(): number;
}

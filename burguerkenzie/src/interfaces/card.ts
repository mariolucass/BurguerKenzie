export interface CardInterface {
  cvc: string;
  expiry: string;
  focus: "name" | "number" | "expiry" | "cvc";
  name: string;
  number: string;
}

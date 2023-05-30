import { KeyboardEventHandler } from "react";

export const monetizeString = (money: number) => {
  return money.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};

export const handleCardNumber = (e: any) => {
  const brands = {
    visa: "/^4d{12}(d{3})?$/",
    mastercard: "/^(5[1-5]d{4}|677189)d{10}$/",
    diners: "/^3(0[0-5]|[68]d)d{11}$/",
    discover: "/^6(?:011|5[0-9]{2})[0-9]{12}$/",
    amex: "/^3[47]d{13}$/",
    jcb: "/^(?:2131|1800|35d{3})d{11}$/",
    aura: "/^(5078d{2})(d{2})(d{11})$/",
    hipercard: "/^(606282d{10}(d{3})?)|(3841d{15})$/",
    maestro: "/^(?:5[0678]dd|6304|6390|67dd)d{8,15}$/",
  };
};

export const handleCardExpiry = (e: any) => {};

import Payment from "payment";
export const monetizeString = (money: number) => {
  return money.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};

export const clearNumber = (value = "") => {
  return value.replace(/\D+/g, "");
};

export const formatCreditCardNumber = (value: string) => {
  if (!value) {
    return value;
  }
  const issuer = Payment.fns.cardType(value);
  const clearValue = clearNumber(value);
  let nextValue;
  switch (issuer) {
    case "amex":
      nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
        4,
        10
      )} ${clearValue.slice(10, 15)}`;
      break;
    case "dinersclub":
      nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
        4,
        10
      )} ${clearValue.slice(10, 14)}`;
      break;
    default:
      nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
        4,
        8
      )} ${clearValue.slice(8, 12)} ${clearValue.slice(12, 19)}`;
      break;
  }
  return nextValue.trim();
};

export const formatCVC = (value: string, number: string) => {
  const clearValue = clearNumber(value);
  let maxLength = 4;
  if (number) {
    const issuer = Payment.fns.cardType(number);
    maxLength = issuer === "amex" ? 4 : 3;
  }
  return clearValue.slice(0, maxLength);
};

export const formatExpirationDate = (value: string) => {
  const clearValue = clearNumber(value);
  if (clearValue.length >= 3) {
    return `${clearValue.slice(0, 2)}/${clearValue.slice(2, 4)}`;
  }
  return clearValue;
};

export const formatCEP = (value: string) => {
  if (!value) return "";
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{5})(\d)/, "$1-$2");
  return value;
};

export const formatPhone = (value: string) => {
  if (!value) return "";
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{2})(\d)/, "($1) $2");
  value = value.replace(/(\d)(\d{4})$/, "$1-$2");
  return value;
};

import { CARD_COMPANY_DATA } from "../constants/index.js";

export const findCompany = (firstNumber, secondNumber) => {
  const cardNumber = firstNumber + secondNumber;

  return CARD_COMPANY_DATA.filter((el) => el.number === cardNumber)[0];
};

export const findColor = (name) =>
  CARD_COMPANY_DATA.filter((el) => el.name === name)[0].color;

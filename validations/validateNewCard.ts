import { CARD_MAX_LENGTH, NEW_CARD_ERROR_MESSAGE } from '../constants';
import { CardCompany, CardExpiredDate, CardNumber, CardPassword } from '../types/card';

export const validateNewCard = (newCard: {
  number: CardNumber;
  cvc: string;
  password: CardPassword;
  expiredDate: CardExpiredDate;
  cardCompany: CardCompany;
}): void => {
  const { number, expiredDate, cvc, password, cardCompany } = newCard;

  const isValidCardNumberLength = Object.values(number).every(
    (quarterCardNumber) => quarterCardNumber.length === 4,
  );

  const month = Number(expiredDate.month);
  const year = Number(expiredDate.year);

  const isValidExpiredMonth = month >= 1 && month <= 12;
  const isValidExpiredYear = year >= 10 && year <= 50;

  const isValidCvc = cvc.length === CARD_MAX_LENGTH.CVC;

  const isValidPassword = Object.values(password).every((onePassword) => onePassword.length === 1);

  const hasCompany = cardCompany.length > 0;

  if (!isValidCardNumberLength) throw new Error(NEW_CARD_ERROR_MESSAGE.NUMBER);
  if (!isValidExpiredMonth) throw new Error(NEW_CARD_ERROR_MESSAGE.EXPIRED_MONTH);
  if (!isValidExpiredYear) throw new Error(NEW_CARD_ERROR_MESSAGE.EXPIRED_YEAR);
  if (!isValidCvc) throw new Error(NEW_CARD_ERROR_MESSAGE.CVC);
  if (!isValidPassword) throw new Error(NEW_CARD_ERROR_MESSAGE.PASSWORD);
  if (!hasCompany) throw new Error(NEW_CARD_ERROR_MESSAGE.COMPANY);
};

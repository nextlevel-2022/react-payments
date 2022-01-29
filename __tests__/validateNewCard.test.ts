import { CARD_COMPANIES, NEW_CARD_ERROR_MESSAGE } from '../constants';
import { Card } from '../types/card';
import { validateNewCard } from '../validations/validateNewCard';

const validCard = {
  number: { 0: '1234', 1: '1234', 2: '1234', 3: '1234' },
  cvc: '123',
  password: { 0: '1', 1: '2' },
  expiredDate: { month: '10', year: '10' },
  cardCompany: CARD_COMPANIES.기업,
};

describe('올바른 카드 정보가 입력된 경우 에러를 throw 하지 않는다.', () => {
  it('올바른 카드 정보를 입력하면 에러를 throw 하지 않는다.', () => {
    runAndCheckValidateNewCardHasNoneError(validCard);
  });

  it('(경계 값)올바른 카드 만료 월(1월~12월)을 입력한 경우 에러를 throw 하지 않는다.', () => {
    const validCardExpiredMonthCases = [
      { ...validCard, expiredDate: { month: '1', year: '10' } },
      { ...validCard, expiredDate: { month: '12', year: '10' } },
    ];

    validCardExpiredMonthCases.forEach((validCardNumber) =>
      runAndCheckValidateNewCardHasNoneError(validCardNumber),
    );
  });

  it('(경계 값)올바른 카드 만료 년(10년~50월)을 입력한 경우 에러를 throw 하지 않는다.', () => {
    const validCardExpiredYearCases = [
      { ...validCard, expiredDate: { month: '1', year: '10' } },
      { ...validCard, expiredDate: { month: '1', year: '50' } },
    ];

    validCardExpiredYearCases.forEach((validCardNumber) =>
      runAndCheckValidateNewCardHasNoneError(validCardNumber),
    );
  });
});

describe('올바르지 않은 카드를 등록하려 할 경우 에러를 throw 한다.', () => {
  it('4개중 하나라도 짧은 카드 번호를 입력하고 제출하면 에러를 throw 한다.', () => {
    const shortCardNumberCases = [
      { 0: '12', 1: '1234', 2: '1234', 3: '1234' },
      { 0: '1234', 1: '12', 2: '1234', 3: '1234' },
      { 0: '1234', 1: '1234', 2: '12', 3: '1234' },
      { 0: '1234', 1: '1234', 2: '1234', 3: '12' },
    ];

    shortCardNumberCases.forEach((shortCardNumber) => {
      runAndCheckValidateNewCardError(
        { ...validCard, number: shortCardNumber },
        NEW_CARD_ERROR_MESSAGE.NUMBER,
      );
    });
  });

  it('올바르지 않은 만료 월을 입력 한 경우 에러를 throw 한다([만료 월]: 1월 ~ 12월) -> (0, 13) 테스트 ', () => {
    const validExpiredDate = { month: '1', year: '10' };
    const invalidExpiredMonthCases = [
      { ...validExpiredDate, month: '0' },
      { ...validExpiredDate, month: '13' },
    ];

    invalidExpiredMonthCases.forEach((invalidExpiredMonth) => {
      runAndCheckValidateNewCardError(
        { ...validCard, expiredDate: invalidExpiredMonth },
        NEW_CARD_ERROR_MESSAGE.EXPIRED_MONTH,
      );
    });
  });

  it('올바르지 않은 만료 년을 입력 한 경우 에러를 throw 한다([만료 년]: 10 ~ 50) -> (9, 51) 테스트', () => {
    const validExpiredDate = { month: '1', year: '10' };

    const invalidExpiredYearCases = [
      { ...validExpiredDate, year: '9' },
      { ...validExpiredDate, year: '51' },
    ];

    invalidExpiredYearCases.forEach((invalidExpiredYear) => {
      runAndCheckValidateNewCardError(
        { ...validCard, expiredDate: invalidExpiredYear },
        NEW_CARD_ERROR_MESSAGE.EXPIRED_YEAR,
      );
    });
  });

  it('올바르지 않은 cvc를 입력한 경우 에러를 throw 한다(3자리의 cvc가 입력되어야 한다).', () => {
    const shortCvcLengthCases = ['0', '00'];

    shortCvcLengthCases.forEach((shortCvcLength) => {
      runAndCheckValidateNewCardError(
        { ...validCard, cvc: shortCvcLength },
        NEW_CARD_ERROR_MESSAGE.CVC,
      );
    });
  });

  it('패스워드를 하나라도 입력하지 않으면 에러를 throw 한다.', () => {
    const shortPasswordCases = [
      { 0: '', 1: '' },
      { 0: '0', 1: '' },
      { 0: '', 1: '0' },
    ];

    shortPasswordCases.forEach((shortPassword) => {
      runAndCheckValidateNewCardError(
        { ...validCard, password: shortPassword },
        NEW_CARD_ERROR_MESSAGE.PASSWORD,
      );
    });
  });

  it('카드 회사 정보를 입력하지 않으면 에러를 throw 한다.', () => {
    const noneCardCompany = '';

    runAndCheckValidateNewCardError(
      { ...validCard, cardCompany: noneCardCompany },
      NEW_CARD_ERROR_MESSAGE.COMPANY,
    );
  });
});

// util 함수
const runAndCheckValidateNewCardHasNoneError = (newCard: {
  number: Card['number'];
  cvc: Card['cvc'];
  password: Card['password'];
  expiredDate: Card['expiredDate'];
  cardCompany: Card['cardCompany'];
}) => {
  expect(() => {
    validateNewCard(newCard);
  }).not.toThrowError();
};

const runAndCheckValidateNewCardError = (
  newCard: {
    number: Card['number'];
    cvc: Card['cvc'];
    password: Card['password'];
    expiredDate: Card['expiredDate'];
    cardCompany: Card['cardCompany'];
  },
  errorMessage: string,
) =>
  expect(() => {
    validateNewCard(newCard);
  }).toThrowError(errorMessage);

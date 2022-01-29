import { BUTTON_TYPE, CARD_COMPANIES, CARD_KEY, CARD_SIZE, CARD_TYPE, COLOR } from '../constants';

const companies = Object.keys(CARD_COMPANIES).map((company) => company);

export type CardNumber = {
  0: string;
  1: string;
  2: string;
  3: string;
};
export type CardExpiredDate = { month: string; year: string };
export type CardCompany = typeof companies[number];
export type CardPassword = {
  0: string;
  1: string;
};

export interface Card {
  number: CardNumber;
  expiredDate: CardExpiredDate;
  holderName: string;
  cvc: string;
  password: CardPassword;
  cardCompany: CardCompany;
}

export type CardSize = typeof CARD_SIZE[keyof typeof CARD_SIZE];

export type CardType = typeof CARD_TYPE[keyof typeof CARD_TYPE];

export type CardKey = typeof CARD_KEY[keyof typeof CARD_KEY];

export type Color = typeof COLOR[keyof typeof COLOR];

export type ButtonType = typeof BUTTON_TYPE[keyof typeof BUTTON_TYPE];

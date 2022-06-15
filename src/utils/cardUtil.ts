import { CARD_COMPANIES } from '@constants';
import { CardCompany } from '@interface';

export const isPublicCardNumberInCardCompany = (publicCardNumber: string) => {
  if (CARD_COMPANIES.findIndex((company: CardCompany) => company.publicCardNumber == publicCardNumber) !== -1) {
    return true;
  }
  return false;
};

export const getCardBackGroundColor = (publicCardNumber: string) => {
  const target = CARD_COMPANIES.find((company) => company.publicCardNumber === publicCardNumber);
  if (target) {
    const { color } = target;
    return color;
  }
  throw new Error('cannot found adjust company');
};

import { CardCompany } from 'src/interface';
import { CardProps } from 'src/interface';

export const initialCardForm: CardProps = {
  company: '',
  cardNumber: ['', '', '', ''],
  ownerName: '',
  expireMonth: '',
  expireYear: '',
  cvcNumber: '',
  nickname: '',
  bgColor: '',
  password: ['', ''],
};

export const initialNewCard = () => JSON.parse(JSON.stringify(initialCardForm));

export const PUBLIC_CARD_NUMBER_INPUT_LAST_INDEX = 1;
export const CARD_NUMBER_TOTAL_LAST_INDEX = 3;
export const PUBLIC_CARD_NUMBER_LENGTH = 8;
export const CARD_NUMBER_TOTAL_LENGTH = 16;

export const CARD_COMPANIES: CardCompany[] = [
  {
    name: '현대카드',
    color: 'black',
    publicCardNumber: '11111111',
  },
  {
    name: '국민카드',
    color: 'gold',
    publicCardNumber: '22222222',
  },
  {
    name: '삼성카드',
    color: 'dodgerblue',
    publicCardNumber: '33333333',
  },
  {
    name: 'BC카드',
    color: 'firebrick',
    publicCardNumber: '44444444',
  },
  {
    name: '하나카드',
    color: 'forestgreen',
    publicCardNumber: '55555555',
  },
  {
    name: '롯데카드',
    color: 'hotpink',
    publicCardNumber: '66666666',
  },
  {
    name: '신한카드',
    color: 'indigo',
    publicCardNumber: '77777777',
  },
  {
    name: '우리카드',
    color: 'khaki',
    publicCardNumber: '88888888',
  },
];

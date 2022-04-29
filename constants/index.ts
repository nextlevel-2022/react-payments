export const CARD_SIZE = {
  SMALL: 'small',
  BIG: 'big',
} as const;

export const CARD_TYPE = {
  NORMAL: 'normal',
  ADD: 'add',
} as const;

export const CARD_KEY = {
  NUMBER: 'cardNumber',
  EXPIRED_DATE: 'expiredDate',
  HOLDER_NAME: 'holderName',
  CVC: 'cvc',
  PASSWORD: 'password',
} as const;

export const CARD_MAX_LENGTH = {
  NUMBER: 4,
  EXPIRED_DATE: 2,
  HOLDER_NAME: 10,
  CVC: 3,
  PASSWORD: 1,
} as const;

export const NEW_CARD_ERROR_MESSAGE = {
  NUMBER: '카드 번호를 모두 입력해주세요(16자리).',
  COMPANY: '카드 회사를 등록해주세요.',
  EXPIRED_MONTH: '형식에 맞는 만료일(월)을 선택해주세요(1월~12월).',
  EXPIRED_YEAR: '형식에 맞는 만료일(년)을 선택해주세요(2010년~2050년).',
  CVC: 'CVC 번호를 모두 입력해주세요(3자리).',
  PASSWORD: '비밀 번호를 모두 입력해주세요(앞 2자리).',
};

export const CARD_COMPANIES = {
  국민: '국민',
  농협: '농협',
  기업: '기업',
  수협: '수협',
  우리: '우리',
  신한: '신한',
  롯데: '롯데',
  토스: '토스',
};

export const COMPANY_COLOR = {
  [CARD_COMPANIES.국민]: '#E24141',
  [CARD_COMPANIES.농협]: '#547CE4',
  [CARD_COMPANIES.기업]: '#73BC6D',
  [CARD_COMPANIES.수협]: '#DE59B9',
  [CARD_COMPANIES.우리]: '#04C09E75',
  [CARD_COMPANIES.신한]: '#E76E9A',
  [CARD_COMPANIES.롯데]: '#F37D3B',
  [CARD_COMPANIES.토스]: '#FBCD58',
} as const;

export const COLOR = {
  WHITE: '#FFF',
  BLACK: '#000',
  SKY: '#36caef',
  BLACK_OPACITY_70: 'rgba(0,0,0,0.7)',
  BLACK_OPACITY_25: 'rgba(0,0,0,0.25)',
  GRAY_10: '#FDFDFD',
  GRAY_50: '#ECEBF1',
  GRAY_80: '#E5E5E5',
  GRAY_100: '#D2D2D2',
  GRAY_150: '#BABABA',
  GRAY_200: '#969696',
  GRAY_300: '#737373',
  GRAY_500: '#525252',
  GRAY_700: '#383838',
  GRAY_900_OPACITY_55: 'rgba(30, 30, 30, 0.55)',
  RED_700: '#E24141',
  BLUE_400: '#547CE4',
  GREEN_400: '#73BC6D',
  PINK_600: '#DE59B9',
  PINK_500: '#E76E9A',
  ORANGE_700: '#F37D3B',
  GOLD_400: '#CBBA64',
  YELLOW_500: '#FBCD58',
  MINT_500: '#04C09E',
  CYAN_300: '#94DACD',
} as const;

export const BUTTON_TYPE = {
  BASIC: 'basic',
  UNDERLINE: 'underline',
} as const;

export const TEST_ID = {
  CARD_NUMBER_INPUTS: 'cardNumberInputs',
  CARD_EXPIRED_DATE_INPUTS: 'cardExpiredDateInputs',
  CARD_HOLDER_NAME_INPUT: 'cardHolderNameInput',
  CARD_CVC_INPUT: 'cardCvcInput',
  CARD_PASSWORD_INPUTS: 'cardPasswordInputs',
  COMPANY_SELECT_MODAL: 'cardCompanySelectModal',
};

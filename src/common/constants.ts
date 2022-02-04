export type CardData = {
	cardName: string;
	cardNumber: string;
	cardExpireDate: string;
	cardOwner: string;
	cardNickname: string;
	password?: string;
	cvc?: string;
};

export type CardType = 'small' | 'big' | 'new' | 'empty';

export const cardColor: any = {
	'포코 카드': 1,
	'준 카드': 2,
	'공원 카드': 3,
	'브랜 카드': 4,
	'로이드 카드': 5,
	'도비 카드': 6,
	'콜린 카드': 7,
	'썬 카드': 8,
};

export const LIMITS = {
	CARD_NUMBER_SIZE: 4,
	MAX_NAME_SIZE: 30,
	MONTH_SIZE: 2,
	YEAR_MIN: 22,
	YEAR_MAX: 99,
	YEAR_SIZE: 2,
	CVC_SIZE: 3,
	PASSWORD_SIZE: 1,
};

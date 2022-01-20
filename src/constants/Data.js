
export const DATA = {
	CARD_ID: 0,						// Card ID
	NAME: '',							// 소유자
	CARD_NUMBER_1: '',					// 첫 번째 4자리 카드번호
	CARD_NUMBER_2: '',					// 두 번째 4자리 카드번호
	CARD_NUMBER_3: '',					// 세 번째 4자리 카드번호
	CARD_NUMBER_4: '',					// 네 번째 4자리 카드번호
	EXPIRATION_DATE_YY: '',			// 유효기간_년도
	EXPIRATION_DATE_MM: '',				// 유효기간_월
	CREDIT_CARD_COMPANY: 0,			// 카드사
}
export const DATA_LIST = []

export const CARD_INPUT_LENGTH = {
	CARD_NUMBERS: '4',
	EXPIRATION_DATE: '2',
	USER_NAME: '30',
	CVC: '3',
	PASSWORD: '1'
};

export const CARD_COMPANY = [
	{
		CODE: 1,
		COMPANY: 'A카드',
		COLOR: 'red'
	},
	{
		CODE: 2,
		COMPANY: 'B카드',
		COLOR: 'yellow'
	},
	{
		CODE: 3,
		COMPANY: 'C카드',
		COLOR: 'pink'
	},
	{
		CODE: 4,
		COMPANY: 'D카드',
		COLOR: 'green'
	},
];

export const ERROR_MESSAGE = {
	CARD_NUMBERS: '카드 번호를 입력해주세요.',
	EXPIRATION_DATE: '유효기간을 다시 확인해주세요.',
	USER_NAME: '30',
	CVC: '3',
	PASSWORD: '1'
};


